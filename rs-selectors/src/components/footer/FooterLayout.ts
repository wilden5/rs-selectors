import FooterElements from './FooterElements';
import DOMHelpers from '../utils/DOMHelpers';
import { ProjectComponent } from '../../types/Interfaces';

class FooterLayout implements ProjectComponent {
    private footerElements: FooterElements;

    constructor() {
        this.footerElements = new FooterElements();
    }

    private appendFooterElements(): void {
        DOMHelpers.appendChildToElement(document.body, this.footerElements.footerContainer);
        DOMHelpers.appendChildToElement(this.footerElements.footerContainer, this.footerElements.footerAuthor);
        DOMHelpers.appendChildToElement(this.footerElements.footerContainer, this.footerElements.footerYear);
        DOMHelpers.appendChildToElement(this.footerElements.footerContainer, this.footerElements.footerSchool);
        DOMHelpers.appendImage(this.footerElements.footerSchool, 'https://rs.school/images/rs_school_js.svg');
    }

    private assignCodeEditorEventListeners(): void {
        this.footerElements.footerAuthor.addEventListener('click', () => {
            window.open('https://github.com/wilden5', '_blank');
        });

        this.footerElements.footerSchool.addEventListener('click', () => {
            window.open('https://rs.school/js/', '_blank');
        });
    }

    public init(): void {
        this.appendFooterElements();
        this.assignCodeEditorEventListeners();
    }
}

export default FooterLayout;
