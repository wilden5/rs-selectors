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
        this.codeEditorElements.codeEditorContainer.appendChild(this.codeEditorElements.globalHeader);
        this.codeEditorElements.codeEditorContainer.appendChild(this.codeEditorElements.modalButton);
        this.codeEditorElements.codeEditorContainer.appendChild(this.codeEditorElements.editor);
        this.codeEditorElements.header.appendChild(this.codeEditorElements.socials);
        this.codeEditorElements.socials.appendChild(this.codeEditorElements.emailLink);
        this.codeEditorElements.socials.appendChild(this.codeEditorElements.facebookLink);
        this.codeEditorElements.socials.appendChild(this.codeEditorElements.twitterLink);
        this.codeEditorElements.editor.appendChild(this.codeEditorElements.editorInput);
        this.codeEditorElements.editor.appendChild(this.codeEditorElements.editorHtmlView);
        this.codeEditorElements.editorHtmlView.appendChild(this.codeEditorElements.htmlViewHeader);
        this.codeEditorElements.htmlViewHeader.appendChild(this.codeEditorElements.htmlFileName);
        this.codeEditorElements.editorHtmlView.appendChild(this.codeEditorElements.htmlFileWindow);
        this.codeEditorElements.htmlFileWindow.appendChild(this.codeEditorElements.htmlLineNumbers);
        this.codeEditorElements.htmlFileWindow.appendChild(this.codeEditorElements.htmlLineMarkup);
        this.codeEditorElements.htmlLineMarkup.appendChild(this.codeEditorElements.markupCodeWrapper);
        this.codeEditorElements.htmlLineMarkup.appendChild(this.codeEditorElements.levelMarkup);
        this.codeEditorElements.editorInput.appendChild(this.codeEditorElements.editorHeader);
        this.codeEditorElements.editorHeader.appendChild(this.codeEditorElements.editorFileName);
        this.codeEditorElements.editorInput.appendChild(this.codeEditorElements.inputFileWindow);
        this.codeEditorElements.inputFileWindow.appendChild(this.codeEditorElements.inputLineNumbers);
        this.codeEditorElements.inputFileWindow.appendChild(this.codeEditorElements.inputMarkup);
        this.codeEditorElements.inputMarkup.appendChild(this.codeEditorElements.userInputField);
        this.codeEditorElements.inputMarkup.appendChild(this.codeEditorElements.enterButton);
        this.codeEditorElements.inputMarkup.appendChild(this.codeEditorElements.userInputHint);
        this.codeEditorElements.inputMarkup.appendChild(this.codeEditorElements.userInputSkipLevel);
    }

    private appendImages(): void {
        DOMHelpers.appendImage(this.codeEditorElements.emailLink, '../../assets/img/email.png');
        DOMHelpers.appendImage(this.codeEditorElements.facebookLink, '../../assets/img/facebook.png');
        DOMHelpers.appendImage(this.codeEditorElements.twitterLink, '../../assets/img/twitter.png');
    }

    private setUserInputProperties(): void {
        const userInput = DOMHelpers.getElement('.input__user-input') as HTMLInputElement;
        userInput.type = 'text';
        userInput.placeholder = 'Type in a CSS selector';
        this.generateInputHint();
    }

    private generateLineNumbers(number: number, element: string, additionalDiv: boolean): void {
        for (let i = 1; i <= number; i += 1) {
            DOMHelpers.getElement(element).innerHTML += `${i}<br>`;
        }
        if (additionalDiv) {
            DOMHelpers.getElement('.view__markup').appendChild(DOMHelpers.createElement('div', ['div'], '</div>'));
        }
    }

    private generateInputHint(): void {
        this.codeEditorElements.userInputHint.innerHTML = '{<br>/* Styles would go here. */<br>}';
        this.codeEditorElements.userInputSkipLevel.innerHTML =
            '/* <br> Type a number to skip to a level.<br>Ex → "5" for level 5<br>*/';
    }

    private assignCodeEditorEventListeners(): void {
        this.codeEditorElements.modalButton.addEventListener('click', () => {
            DOMHelpers.getElement('.modal').classList.add('modal--opened');
            this.codeEditorElements.modalButton.classList.add('modal-button--hided');
        });
    }

    private populateCodeEditorData(): void {}

    public init(): void {
        this.appendCodeEditorElements();
        this.appendImages();
        this.assignCodeEditorEventListeners();
        this.populateCodeEditorData();
        this.generateLineNumbers(20, '.table__line-numbers', true);
        this.generateLineNumbers(20, '.input__line-numbers', false);
        this.setUserInputProperties();
    }
}

export default CodeEditorLayout;
