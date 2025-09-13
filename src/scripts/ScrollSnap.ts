// src/components/ScrollSnap.ts

export function setupCustomScrollSnap(
    scrollContainerSelector: string,
    sectionSelector: string,
    threshold = 0.6
) {
    const scrollContainer = document.querySelector(scrollContainerSelector);
    if (!scrollContainer) return;

    const options = {
        root: scrollContainer,
        threshold: threshold,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        })
    }, options);

    const sections = scrollContainer.querySelectorAll(sectionSelector);
    sections.forEach((section) => observer.observe(section));
}