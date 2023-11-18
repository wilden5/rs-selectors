import DOMHelpers from '../utils/DOMHelpers';
import Singleton from '../utils/Singleton';

class FooterElements {
    public footerContainer: HTMLElement;

    public footerAuthor: HTMLElement;

    public footerYear: HTMLElement;

    public footerSchool: HTMLElement;

    constructor() {
        this.footerContainer = DOMHelpers.createElement('div', ['footer-container'], 'Made by');
        this.footerAuthor = DOMHelpers.createElement('a', ['footer__author'], '@Wilden5');
        this.footerYear = DOMHelpers.createElement('span', ['footer__year'], '2023');
        this.footerSchool = DOMHelpers.createElement('a', ['footer__school']);
    }

    public static getInstance(): FooterElements {
        return Singleton.getInstance<FooterElements>(FooterElements);
    }
}

export default FooterElements;
