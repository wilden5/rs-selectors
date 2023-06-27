import Singleton from '../utils/Singleton';
import DOMHelpers from '../utils/DOMHelpers';

class CodeEditorElements {
    public header: HTMLElement;

    public headerTitle: HTMLElement;

    public codeEditorContainer: HTMLElement;

    public socials: HTMLElement;

    public emailLink: HTMLElement;

    public facebookLink: HTMLElement;

    public twitterLink: HTMLElement;

    public editor: HTMLElement;

    public editorHtmlView: HTMLElement;

    public editorInput: HTMLElement;

    public htmlViewHeader: HTMLElement;

    public htmlFileName: HTMLElement;

    public htmlFileWindow: HTMLElement;

    public htmlLineNumbers: HTMLElement;

    public htmlLineMarkup: HTMLElement;

    public markupCodeWrapper: HTMLElement;

    public editorHeader: HTMLElement;

    public editorFileName: HTMLElement;

    public inputFileWindow: HTMLElement;

    public inputLineNumbers: HTMLElement;

    public userInputField: HTMLElement;

    public userInputHint: HTMLElement;

    public userInputSkipLevel: HTMLElement;

    public inputMarkup: HTMLElement;

    public enterButton: HTMLElement;

    public levelMarkup: HTMLElement;

    public globalHeader: HTMLElement;

    public modalButton: HTMLElement;

    public helpSelectorButton: HTMLElement;

    public userInputWrapper: HTMLElement;

    public constructor() {
        this.codeEditorContainer = DOMHelpers.createElement('div', ['code-editor-container']);
        this.header = DOMHelpers.createElement('div', ['header']);
        this.headerTitle = DOMHelpers.createElement('div', ['header__title'], "Wilden's CSS Diner");
        this.socials = DOMHelpers.createElement('div', ['header__socials'], 'Share');
        this.emailLink = DOMHelpers.createElement('a', ['socials__email']);
        this.facebookLink = DOMHelpers.createElement('a', ['socials__facebook']);
        this.twitterLink = DOMHelpers.createElement('a', ['socials__twitter']);
        this.editor = DOMHelpers.createElement('div', ['editor']);
        this.editorHtmlView = DOMHelpers.createElement('div', ['editor__table', 'editor__view']);
        this.editorInput = DOMHelpers.createElement('div', ['editor__table', 'editor__input']);
        this.htmlViewHeader = DOMHelpers.createElement('div', ['table__input-header'], 'HTML Viewer');
        this.htmlFileName = DOMHelpers.createElement('div', ['view__file-name'], 'table.html');
        this.htmlFileWindow = DOMHelpers.createElement('div', ['view__file-window']);
        this.htmlLineNumbers = DOMHelpers.createElement('div', ['table__line-numbers']);
        this.htmlLineMarkup = DOMHelpers.createElement('div', ['view__markup']);
        this.markupCodeWrapper = DOMHelpers.createElement('div', ['view__markup-code-wrapper'], '<div class="table">');
        this.editorHeader = DOMHelpers.createElement('div', ['input__header'], 'CSS Editor');
        this.editorFileName = DOMHelpers.createElement('div', ['input__file-name'], 'style.css');
        this.inputFileWindow = DOMHelpers.createElement('div', ['input__file-window']);
        this.inputLineNumbers = DOMHelpers.createElement('div', ['input__line-numbers']);
        this.userInputField = DOMHelpers.createElement('input', ['input__user-input']);
        this.userInputHint = DOMHelpers.createElement('div', ['input__hint']);
        this.inputMarkup = DOMHelpers.createElement('div', ['input__markup']);
        this.userInputSkipLevel = DOMHelpers.createElement('div', ['input__skipLevel']);
        this.enterButton = DOMHelpers.createElement('div', ['input__enter-button'], 'enter');
        this.levelMarkup = DOMHelpers.createElement('pre', ['view_level-markup']);
        this.globalHeader = DOMHelpers.createElement('h2', ['global-header']);
        this.modalButton = DOMHelpers.createElement('button', ['modal-button'], "Help, I'm stuck!");
        this.helpSelectorButton = DOMHelpers.createElement('div', ['input__help-button'], 'help');
        this.userInputWrapper = DOMHelpers.createElement('div', ['user-input-wrapper']);
    }

    public static getInstance(): CodeEditorElements {
        return Singleton.getInstance<CodeEditorElements>(CodeEditorElements);
    }
}

export default CodeEditorElements;
