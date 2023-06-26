import DOMHelpers from '../utils/DOMHelpers';
import Singleton from '../utils/Singleton';

class FooterElements {
    public footerContainer: HTMLElement;

    constructor() {
        this.footerContainer = DOMHelpers.createElement('div', ['footer-container']);
    }

    public static getInstance(): FooterElements {
        return Singleton.getInstance<FooterElements>(FooterElements);
    }
}

export default FooterElements;
