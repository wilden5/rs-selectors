import ModalWindowElements from './ModalWindowElements';
import DOMHelpers from '../../utils/DOMHelpers';
import modalWindowContent from './ModalWindowContent';

class ModalWindowLayout {
    private modalWindowElements: ModalWindowElements;

    constructor() {
        this.modalWindowElements = ModalWindowElements.getInstance();
    }

    private appendCodeEditorElements(): void {
        const codeEditorContainer = DOMHelpers.getElement('.code-editor-container');
        codeEditorContainer.appendChild(this.modalWindowElements.modal);
        this.modalWindowElements.modal.appendChild(this.modalWindowElements.modalTitle);
        this.modalWindowElements.modal.appendChild(this.modalWindowElements.modalGreeting);
        this.modalWindowElements.modal.appendChild(this.modalWindowElements.modalCodeTitle);
        this.modalWindowElements.modal.appendChild(this.modalWindowElements.modalCode);
        this.modalWindowElements.modal.appendChild(this.modalWindowElements.modalDescription);
        this.modalWindowElements.modal.appendChild(this.modalWindowElements.modalCloseButton);
    }

    private populateModalData(): void {
        this.modalWindowElements.modalTitle.innerText = modalWindowContent.title;
        this.modalWindowElements.modalGreeting.innerText = modalWindowContent.greeting;
        this.modalWindowElements.modalCodeTitle.innerText = modalWindowContent.codeTitle;
        this.modalWindowElements.modalCode.innerText = modalWindowContent.code;
        this.modalWindowElements.modalDescription.innerText = modalWindowContent.description;
    }

    private assignCodeEditorEventListeners(): void {
        this.modalWindowElements.modalCloseButton.addEventListener('click', () => {
            this.modalWindowElements.modal.classList.remove('modal--opened');
            DOMHelpers.getElement('.modal-button').classList.remove('modal-button--hided');
        });
    }

    public init(): void {
        this.appendCodeEditorElements();
        this.populateModalData();
        this.assignCodeEditorEventListeners();
    }
}

export default ModalWindowLayout;
