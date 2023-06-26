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
    }

    public init(): void {
        this.appendFooterElements();
    }
}

export default FooterLayout;
