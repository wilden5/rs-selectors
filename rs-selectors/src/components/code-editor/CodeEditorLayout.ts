import CodeEditorElements from './CodeEditorElements';
import DOMHelpers from '../utils/DOMHelpers';

class CodeEditorLayout {
    private codeEditorElements: CodeEditorElements;

    constructor() {
        this.codeEditorElements = new CodeEditorElements();
    }

    private appendCodeEditorElements(): void {
        document.body.appendChild(this.codeEditorElements.codeEditorContainer);
        this.codeEditorElements.codeEditorContainer.appendChild(this.codeEditorElements.header);
        this.codeEditorElements.codeEditorContainer.appendChild(this.codeEditorElements.editor);
        this.codeEditorElements.header.appendChild(this.codeEditorElements.socials);
        this.codeEditorElements.socials.appendChild(this.codeEditorElements.emailLink);
        this.codeEditorElements.socials.appendChild(this.codeEditorElements.facebookLink);
        this.codeEditorElements.socials.appendChild(this.codeEditorElements.twitterLink);
        this.codeEditorElements.editor.appendChild(this.codeEditorElements.editorInput);
        this.codeEditorElements.editor.appendChild(this.codeEditorElements.editorHtmlView);
        this.codeEditorElements.editorHtmlView.appendChild(this.codeEditorElements.inputHeader);
        this.codeEditorElements.inputHeader.appendChild(this.codeEditorElements.htmlFileName);
        this.codeEditorElements.editorHtmlView.appendChild(this.codeEditorElements.htmlFileWindow);
        this.codeEditorElements.htmlFileWindow.appendChild(this.codeEditorElements.htmlLineNumbers);
        this.codeEditorElements.htmlFileWindow.appendChild(this.codeEditorElements.htmlLineMarkup);
        this.codeEditorElements.htmlLineMarkup.appendChild(this.codeEditorElements.markupCodeWrapper);
    }

    private appendImages(): void {
        DOMHelpers.appendImage(this.codeEditorElements.emailLink, '../../assets/img/email.png');
        DOMHelpers.appendImage(this.codeEditorElements.facebookLink, '../../assets/img/facebook.png');
        DOMHelpers.appendImage(this.codeEditorElements.twitterLink, '../../assets/img/twitter.png');
    }

    private generateLineNumbers(number: number, element: string): void {
        for (let i = 1; i <= number; i += 1) {
            DOMHelpers.getElement(element).innerHTML += `${i}<br>`;
        }
        DOMHelpers.getElement('.view__markup').appendChild(DOMHelpers.createElement('div', ['div'], '</div>'));
    }

    private assignCodeEditorEventListeners(): void {}

    private populateCodeEditorData(): void {}

    public init(): void {
        this.appendCodeEditorElements();
        this.appendImages();
        this.assignCodeEditorEventListeners();
        this.populateCodeEditorData();
        this.generateLineNumbers(15, '.table__line-numbers');
    }
}

export default CodeEditorLayout;
