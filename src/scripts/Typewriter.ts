//src/components/Typewriter.ts

export interface TypewriterLine {
    tag?: keyof HTMLElementTagNameMap; //e.g. h1, h2, h3, (default) p
    text: string;
    className?: string; //for css styling
}

type QueueItem = () => Promise<void>

class Typewriter {

    //Private Variables
    #queue: QueueItem[] = []
    #container: HTMLElement;
    //#cursor: HTMLElement;
    #loop: boolean;
    #typingSpeed: number;

    // Constructor creates a container element where all typed elements will be appended
    constructor(
        parent:HTMLElement,
        { loop = false, typingSpeed = 50} = {}
    ) {
        this.#container = document.createElement("div");
        parent.append(this.#container);
        this.#loop = loop;
        this.#typingSpeed = typingSpeed;

        // Create and append a persistent cursor element
        // this.#cursor = document.createElement("span");
        // this.#cursor.className = "cursor"; // Style this in CSS
        // this.#cursor.textContent = "|";
        // this.#container.appendChild(this.#cursor);
    }

    // Method to type a custom element with desired tag, text, and css classes
    typeElement(options: TypewriterLine) {
        this.#addToQueue(resolve => {

            // Set up the element with the given options properties
            const { tag = "p", text, className } = options;
            //Create new element
            const element = document.createElement(tag);
            if (className) {
                element.className = className;
            }
            // Append the element to the container
            this.#container.appendChild(element);

            // Create a separate span for the text
            const textSpan = document.createElement("span");
            element.appendChild(textSpan);

            // Create a separate span for the cursor
            const cursorSpan = document.createElement("span");
            cursorSpan.className = "cursor";
            cursorSpan.textContent = "|";
            element.appendChild(cursorSpan);

            // Type animation for the string
            let i = 0;
            const interval = setInterval(() => {
                // Update innerHTML to include the text and a blinking cursor span
                textSpan.innerHTML = text.substring(0, i + 1);
                i++;
                if (i >= text.length) {
                    clearInterval(interval);
                    // Remove the cursor once typing is done
                    cursorSpan.remove();
                    resolve();
                }
            }, this.#typingSpeed)
        })
        return this;
    }

    pauseFor(duration: number) {
        this.#addToQueue(resolve => {
            setTimeout(resolve, duration);
        })
        return this;
    }

    async start() {
        let cb = this.#queue.shift();
        while (cb != null) {
            console.log("Executing next queue item...");
            await cb();
            if (this.#loop) this.#queue.push(cb);
            cb = this.#queue.shift();
        }
    }

    callFunction(fn: ()=> void) {
        this.#addToQueue(resolve => {
            fn(); // Call provided function
            resolve(); // Resolve immediately after calling
        });
        return this;
    }

    #addToQueue(cb: (resolve: () => void) => void) {
        this.#queue.push(() => new Promise(cb));
    }
}

export default Typewriter;