class DOMHelpers {
    static createElement(type: string, classes: string[] = [], text = ''): HTMLElement {
        const element = document.createElement(type);
        classes.forEach((className) => element.classList.add(className));
        if (text) {
            element.innerText = text;
        }
        return element;
    }

    static getElement<T extends HTMLElement>(selector: string): T {
        const element = document.querySelector(selector);
        if (element === null) {
            throw new Error(`Element with selector '${selector}' not found.`);
        }
        return element as T;
    }
}

export default DOMHelpers;
