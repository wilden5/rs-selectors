import Singleton from '../utils/Singleton';
import DOMHelpers from '../utils/DOMHelpers';

class CodeEditorElements {
    public header: HTMLElement;

    public codeEditorContainer: HTMLElement;

    public socials: HTMLElement;

    public emailLink: HTMLElement;

    public facebookLink: HTMLElement;

    public twitterLink: HTMLElement;

    public editor: HTMLElement;

    public editorHtmlView: HTMLElement;

    public editorInput: HTMLElement;

    public inputHeader: HTMLElement;

    public htmlFileName: HTMLElement;

    public htmlFileWindow: HTMLElement;

    public htmlLineNumbers: HTMLElement;

    public htmlLineMarkup: HTMLElement;

    public markupCodeWrapper: HTMLElement;

    public constructor() {
        this.codeEditorContainer = DOMHelpers.createElement('div', ['code-editor-container']);
        this.header = DOMHelpers.createElement('div', ['header'], "Wilden's CSS Diner");
        this.socials = DOMHelpers.createElement('div', ['header__socials'], 'Share');
        this.emailLink = DOMHelpers.createElement('a', ['socials__email']);
        this.facebookLink = DOMHelpers.createElement('a', ['socials__facebook']);
        this.twitterLink = DOMHelpers.createElement('a', ['socials__twitter']);
        this.editor = DOMHelpers.createElement('div', ['editor']);
        this.editorHtmlView = DOMHelpers.createElement('div', ['editor__table', 'editor__view']);
        this.editorInput = DOMHelpers.createElement('div', ['editor__table', 'editor__input']);
        this.inputHeader = DOMHelpers.createElement('div', ['table__input-header'], 'HTML Viewer');
        this.htmlFileName = DOMHelpers.createElement('div', ['view__file-name'], 'table.html');
        this.htmlFileWindow = DOMHelpers.createElement('div', ['view__file-window']);
        this.htmlLineNumbers = DOMHelpers.createElement('div', ['table__line-numbers']);
        this.htmlLineMarkup = DOMHelpers.createElement('div', ['view__markup']);
        this.markupCodeWrapper = DOMHelpers.createElement('div', ['view__markup-code-wrapper'], '<div class="table">');
    }

    public static getInstance(): CodeEditorElements {
        return Singleton.getInstance<CodeEditorElements>(CodeEditorElements);
    }
}

export default CodeEditorElements;
