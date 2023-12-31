import CodeEditorElements from './CodeEditorElements';
import DOMHelpers from '../utils/DOMHelpers';
import { ProjectComponent } from '../../types/Interfaces';
import CodeEditorInput from './CodeEditorInput';
import GAME_LEVELS from '../app/AppLevels';
import { getCurrentLevelIndex } from '../utils/LevelHelpers';

class CodeEditorLayout implements ProjectComponent {
    private codeEditorElements: CodeEditorElements;

    private codeEditorInput: CodeEditorInput;

    constructor() {
        this.codeEditorElements = new CodeEditorElements();
        this.codeEditorInput = new CodeEditorInput();
    }

    private appendCodeEditorElements(): void {
        DOMHelpers.appendChildToElement(DOMHelpers.getElement('.wrapper'), this.codeEditorElements.codeEditorContainer);
        DOMHelpers.appendChildToElement(this.codeEditorElements.codeEditorContainer, this.codeEditorElements.header);
        DOMHelpers.appendChildToElement(
            this.codeEditorElements.codeEditorContainer,
            this.codeEditorElements.globalHeader
        );
        DOMHelpers.appendChildToElement(
            this.codeEditorElements.codeEditorContainer,
            this.codeEditorElements.modalButton
        );
        DOMHelpers.appendChildToElement(
            this.codeEditorElements.codeEditorContainer,
            this.codeEditorElements.codeEditorOverlay
        );
        DOMHelpers.appendChildToElement(this.codeEditorElements.codeEditorContainer, this.codeEditorElements.editor);
        DOMHelpers.appendChildToElement(this.codeEditorElements.header, this.codeEditorElements.headerTitle);
        DOMHelpers.appendChildToElement(this.codeEditorElements.header, this.codeEditorElements.socials);
        DOMHelpers.appendChildToElement(this.codeEditorElements.socials, this.codeEditorElements.emailLink);
        DOMHelpers.appendChildToElement(this.codeEditorElements.socials, this.codeEditorElements.facebookLink);
        DOMHelpers.appendChildToElement(this.codeEditorElements.socials, this.codeEditorElements.twitterLink);
        DOMHelpers.appendChildToElement(this.codeEditorElements.editor, this.codeEditorElements.editorInput);
        DOMHelpers.appendChildToElement(this.codeEditorElements.editor, this.codeEditorElements.editorHtmlView);
        DOMHelpers.appendChildToElement(this.codeEditorElements.editorHtmlView, this.codeEditorElements.htmlViewHeader);
        DOMHelpers.appendChildToElement(this.codeEditorElements.htmlViewHeader, this.codeEditorElements.htmlFileName);
        DOMHelpers.appendChildToElement(this.codeEditorElements.editorHtmlView, this.codeEditorElements.htmlFileWindow);
        DOMHelpers.appendChildToElement(
            this.codeEditorElements.htmlFileWindow,
            this.codeEditorElements.htmlLineNumbers
        );
        DOMHelpers.appendChildToElement(this.codeEditorElements.htmlFileWindow, this.codeEditorElements.htmlLineMarkup);
        DOMHelpers.appendChildToElement(
            this.codeEditorElements.htmlLineMarkup,
            this.codeEditorElements.markupCodeWrapper
        );
        DOMHelpers.appendChildToElement(this.codeEditorElements.htmlLineMarkup, this.codeEditorElements.levelMarkup);
        DOMHelpers.appendChildToElement(this.codeEditorElements.editorInput, this.codeEditorElements.editorHeader);
        DOMHelpers.appendChildToElement(this.codeEditorElements.editorHeader, this.codeEditorElements.editorFileName);
        DOMHelpers.appendChildToElement(this.codeEditorElements.editorInput, this.codeEditorElements.inputFileWindow);
        DOMHelpers.appendChildToElement(
            this.codeEditorElements.inputFileWindow,
            this.codeEditorElements.inputLineNumbers
        );
        DOMHelpers.appendChildToElement(this.codeEditorElements.inputFileWindow, this.codeEditorElements.inputMarkup);
        DOMHelpers.appendChildToElement(this.codeEditorElements.inputMarkup, this.codeEditorElements.userInputWrapper);
        DOMHelpers.appendChildToElement(
            this.codeEditorElements.userInputWrapper,
            this.codeEditorElements.userInputField
        );
        DOMHelpers.appendChildToElement(this.codeEditorElements.inputMarkup, this.codeEditorElements.enterButton);
        DOMHelpers.appendChildToElement(
            this.codeEditorElements.inputMarkup,
            this.codeEditorElements.helpSelectorButton
        );
        DOMHelpers.appendChildToElement(this.codeEditorElements.inputMarkup, this.codeEditorElements.userInputHint);
        DOMHelpers.appendChildToElement(
            this.codeEditorElements.inputMarkup,
            this.codeEditorElements.userInputSkipLevel
        );
    }

    private appendImages(): void {
        DOMHelpers.appendImage(this.codeEditorElements.headerTitle, './assets/img/dish.png');
        DOMHelpers.appendImage(this.codeEditorElements.emailLink, './assets/img/email.png');
        DOMHelpers.appendImage(this.codeEditorElements.facebookLink, './assets/img/facebook.png');
        DOMHelpers.appendImage(this.codeEditorElements.twitterLink, './assets/img/twitter.png');
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
            '/* <br> Click on the HELP button to skip to a level.<br>HELP button disables input until the next level.<br>*/';
    }

    private assignCodeEditorEventListeners(): void {
        this.codeEditorElements.modalButton.addEventListener('click', () => {
            DOMHelpers.getElement('.modal').classList.add('modal--opened');
            this.codeEditorElements.modalButton.classList.add('modal-button--hided');
        });

        this.codeEditorElements.emailLink.addEventListener('click', () => {
            window.location.href = 'mailto:your.email@example.com';
        });

        this.codeEditorElements.facebookLink.addEventListener('click', () => {
            window.open('https://www.facebook.com', '_blank');
        });

        this.codeEditorElements.twitterLink.addEventListener('click', () => {
            window.open('https://twitter.com', '_blank');
        });

        this.codeEditorElements.userInputField.addEventListener('keydown', this.codeEditorInput.handleEnterButtonPress);

        this.codeEditorElements.enterButton.addEventListener('click', () => {
            const value: string = this.codeEditorInput.getInputValue();
            this.codeEditorInput.checkUserAnswer(value);
        });

        this.codeEditorElements.helpSelectorButton.addEventListener('click', () => {
            (this.codeEditorElements.userInputField as HTMLInputElement).value =
                GAME_LEVELS[getCurrentLevelIndex()].correctAnswer;
            GAME_LEVELS[getCurrentLevelIndex()].isHintUsed = true;
            this.setUserInputState();
        });
    }

    public setUserInputState(isLevelSelector?: boolean): void {
        if (isLevelSelector) {
            DOMHelpers.getElement('.input__user-input').classList.remove('input-animation');
            (DOMHelpers.getElement('.input__user-input') as HTMLInputElement).disabled = false;
            (DOMHelpers.getElement('.input__user-input') as HTMLInputElement).value = '';
        }
        if (this.codeEditorElements.userInputField.classList.contains('input-animation')) {
            this.codeEditorElements.userInputField.classList.remove('input-animation');
            (this.codeEditorElements.userInputField as HTMLInputElement).disabled = false;
        } else {
            this.codeEditorElements.userInputField.classList.add('input-animation');
            (this.codeEditorElements.userInputField as HTMLInputElement).disabled = true;
        }
    }

    public init(): void {
        this.appendCodeEditorElements();
        this.appendImages();
        this.assignCodeEditorEventListeners();
        this.generateLineNumbers(20, '.table__line-numbers', true);
        this.generateLineNumbers(20, '.input__line-numbers', false);
        this.setUserInputProperties();
    }
}

export default CodeEditorLayout;
