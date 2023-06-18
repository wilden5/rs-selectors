import DOMHelpers from '../utils/DOMHelpers';

class CodeEditorLayout {
    private codeEditorContainer: HTMLElement = DOMHelpers.createElement('div', ['code-editor-container']);

    private appendCodeEditorElements = (): void => {
        document.body.appendChild(this.codeEditorContainer);
    };

    private assignCodeEditorEventListeners = (): void => {};

    private populateCodeEditorData = (): void => {};

    public init = (): void => {
        this.appendCodeEditorElements();
        this.assignCodeEditorEventListeners();
        this.populateCodeEditorData();
    };
}

export default CodeEditorLayout;
