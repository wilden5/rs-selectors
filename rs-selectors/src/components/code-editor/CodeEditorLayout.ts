import CodeEditorElements from './CodeEditorElements';

class CodeEditorLayout {
    private codeEditorElements: CodeEditorElements;

    constructor() {
        this.codeEditorElements = new CodeEditorElements();
    }

    private appendCodeEditorElements(): void {
        document.body.appendChild(this.codeEditorElements.codeEditorContainer);
        this.codeEditorElements.codeEditorContainer.appendChild(this.codeEditorElements.header);
        this.codeEditorElements.header.appendChild(this.codeEditorElements.socials);
        this.codeEditorElements.socials.appendChild(this.codeEditorElements.emailLink);
        this.codeEditorElements.socials.appendChild(this.codeEditorElements.facebookLink);
        this.codeEditorElements.socials.appendChild(this.codeEditorElements.twitterLink);
    }

    private assignCodeEditorEventListeners(): void {}

    private populateCodeEditorData(): void {}

    public init(): void {
        this.appendCodeEditorElements();
        this.assignCodeEditorEventListeners();
        this.populateCodeEditorData();
    }
}

export default CodeEditorLayout;
