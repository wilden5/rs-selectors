import GameElements from './GameElements';
import DOMHelpers from '../../utils/DOMHelpers';

class GameLayout {
    private gameElements: GameElements;

    constructor() {
        this.gameElements = GameElements.getInstance();
    }

    private appendGameLayoutElements(): void {
        const codeEditorContainer = DOMHelpers.getElement('.code-editor-container');
        codeEditorContainer.appendChild(this.gameElements.gameWrapper);
        this.gameElements.gameWrapper.appendChild(this.gameElements.tableWrapper);
        this.gameElements.tableWrapper.appendChild(this.gameElements.tableArea);
        this.gameElements.tableArea.appendChild(this.gameElements.tableTop);
    }

    public init(): void {
        this.appendGameLayoutElements();
    }
}

export default GameLayout;
