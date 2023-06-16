import DOMHelpers from '../utils/DOMHelpers';

class Layout {
    private codeWrapper: HTMLElement = DOMHelpers.createElement('div', ['code-wrapper']);

    private appendElements = (): void => {
        document.body.appendChild(this.codeWrapper);
    };

    private assignEventListeners = (): void => {};

    private populateLevelData = (): void => {};

    public init = (): void => {
        this.appendElements();
        this.assignEventListeners();
        this.populateLevelData();
    };
}

export default Layout;
