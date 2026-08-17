//src/components/Typewriter.ts

export interface TypewriterPart {
    text: string;
    className?: string; // For css styling
    tag?: keyof HTMLElementTagNameMap;  // only needed for typeRendered
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
    }

    // Method to type a custom element with desired tag, text, and css classes
    typeParts(parts: TypewriterPart[], lineClassName?: string) {
        this.#addToQueue(resolve => {
            // Wrapper line element
            const line = document.createElement("p");
            if (lineClassName) line.className = lineClassName;
            this.#container.appendChild(line);

            // Cursor at the end
            const cursorSpan = document.createElement("span");
            cursorSpan.className = "cursor";
            cursorSpan.textContent = "|";

            const typeNext = (index: number) => {
                if (index >= parts.length) {
                    cursorSpan.remove();
                    resolve();
                    return;
                }
                const { text, className } = parts[index];
                const span = document.createElement("span");
                if (className) span.className = className;
                line.appendChild(span);
                line.appendChild(cursorSpan);

                let i = 0;
                const interval = setInterval(() => {
                    span.textContent = text.substring(0, i + 1);  // was innerHTML
                    i++;
                    if (i >= text.length) {
                        clearInterval(interval);
                        typeNext(index + 1);
                    }
                }, this.#typingSpeed);
            };

            typeNext(0);
        });
        return this;
    }

    typeRendered(options: TypewriterPart) {
        this.#addToQueue(resolve => {
            const { tag = "p", text, className } = options;
            const element = document.createElement(tag);
            if (className) element.className = className;
            this.#container.appendChild(element);

            const textSpan = document.createElement("span");
            element.appendChild(textSpan);
            const cursorSpan = document.createElement("span");
            cursorSpan.className = "cursor";
            cursorSpan.textContent = "|";
            element.appendChild(cursorSpan);

            let i = 0;
            const interval = setInterval(() => {
                textSpan.innerHTML = text.substring(0, i + 1);
                i++;
                if (i >= text.length) {
                    clearInterval(interval);
                    cursorSpan.remove();
                    resolve();
                }
            }, this.#typingSpeed);
        });
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