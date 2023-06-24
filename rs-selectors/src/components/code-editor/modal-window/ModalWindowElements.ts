import Singleton from '../../utils/Singleton';
import DOMHelpers from '../../utils/DOMHelpers';

class ModalWindowElements {
    public modal: HTMLElement;

    public modalTitle: HTMLElement;

    public modalGreeting: HTMLElement;

    public modalCodeTitle: HTMLElement;

    public modalCode: HTMLElement;

    public modalDescription: HTMLElement;

    public modalCloseButton: HTMLElement;

    public constructor() {
        this.modal = DOMHelpers.createElement('div', ['modal']);
        this.modalTitle = DOMHelpers.createElement('h3', ['modal__title']);
        this.modalGreeting = DOMHelpers.createElement('p', ['modal__greeting']);
        this.modalCodeTitle = DOMHelpers.createElement('h4', ['modal__code-title']);
        this.modalCode = DOMHelpers.createElement('pre', ['modal__code']);
        this.modalDescription = DOMHelpers.createElement('p', ['modal__description']);
        this.modalCloseButton = DOMHelpers.createElement('button', ['modal__close-button'], 'Ok, got it!');
    }

    public static getInstance(): ModalWindowElements {
        return Singleton.getInstance<ModalWindowElements>(ModalWindowElements);
    }
}

export default ModalWindowElements;
