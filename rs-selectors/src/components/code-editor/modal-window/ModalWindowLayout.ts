import ModalWindowElements from './ModalWindowElements';
import DOMHelpers from '../../utils/DOMHelpers';
import modalWindowContent from './ModalWindowContent';
import { ProjectComponent } from '../../../types/Interfaces';

class ModalWindowLayout implements ProjectComponent {
    private modalWindowElements: ModalWindowElements;

    constructor() {
        this.modalWindowElements = ModalWindowElements.getInstance();
    }

    private appendModalWindowElements(): void {
        DOMHelpers.appendChildToElement(
            DOMHelpers.getElement('.code-editor-container'),
            this.modalWindowElements.modalBody
        );
        DOMHelpers.appendChildToElement(this.modalWindowElements.modalBody, this.modalWindowElements.modalTitle);
        DOMHelpers.appendChildToElement(this.modalWindowElements.modalBody, this.modalWindowElements.modalGreeting);
        DOMHelpers.appendChildToElement(this.modalWindowElements.modalBody, this.modalWindowElements.modalCodeTitle);
        DOMHelpers.appendChildToElement(this.modalWindowElements.modalBody, this.modalWindowElements.modalCode);
        DOMHelpers.appendChildToElement(this.modalWindowElements.modalBody, this.modalWindowElements.modalDescription);
        DOMHelpers.appendChildToElement(this.modalWindowElements.modalBody, this.modalWindowElements.modalCloseButton);
    }

    private populateModalWindowData(): void {
        this.modalWindowElements.modalTitle.innerText = modalWindowContent.title;
        this.modalWindowElements.modalGreeting.innerText = modalWindowContent.greeting;
        this.modalWindowElements.modalCodeTitle.innerText = modalWindowContent.codeTitle;
        this.modalWindowElements.modalCode.innerText = modalWindowContent.code;
        this.modalWindowElements.modalDescription.innerText = modalWindowContent.description;
    }

    private assignModalWindowEventListeners(): void {
        this.modalWindowElements.modalCloseButton.addEventListener('click', () => {
            this.modalWindowElements.modalBody.classList.remove('modal--opened');
            DOMHelpers.getElement('.modal-button').classList.remove('modal-button--hided');
        });
    }

    public init(): void {
        this.appendModalWindowElements();
        this.populateModalWindowData();
        this.assignModalWindowEventListeners();
    }
}

export default ModalWindowLayout;
