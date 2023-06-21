import Singleton from '../utils/Singleton';
import DOMHelpers from '../utils/DOMHelpers';

class CodeEditorElements {
    public header: HTMLElement;

    public codeEditorContainer: HTMLElement;

    public socials: HTMLElement;

    public emailLink: HTMLElement;

    public facebookLink: HTMLElement;

    public twitterLink: HTMLElement;

    public constructor() {
        this.codeEditorContainer = DOMHelpers.createElement('div', ['code-editor-container']);
        this.header = DOMHelpers.createElement('div', ['header'], "Wilden's CSS Diner");
        this.socials = DOMHelpers.createElement('div', ['header__socials'], 'Share');
        this.emailLink = DOMHelpers.createElement('a', ['socials__email']);
        this.facebookLink = DOMHelpers.createElement('a', ['socials__facebook']);
        this.twitterLink = DOMHelpers.createElement('a', ['socials__twitter']);
    }

    public static getInstance(): CodeEditorElements {
        return Singleton.getInstance<CodeEditorElements>(CodeEditorElements);
    }
}

export default CodeEditorElements;
