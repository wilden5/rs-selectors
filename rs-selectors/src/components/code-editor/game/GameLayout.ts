import GameElements from './GameElements';
import DOMHelpers from '../../utils/DOMHelpers';
import { ProjectComponent } from '../../../types/Interfaces';

class GameLayout implements ProjectComponent {
    private gameElements: GameElements;

    constructor() {
        this.gameElements = GameElements.getInstance();
    }

    private appendGameLayoutElements(): void {
        DOMHelpers.appendChildToElement(DOMHelpers.getElement('.code-editor-container'), this.gameElements.gameWrapper);
        DOMHelpers.appendChildToElement(this.gameElements.gameWrapper, this.gameElements.tableWrapper);
        DOMHelpers.appendChildToElement(this.gameElements.tableWrapper, this.gameElements.tableArea);
        DOMHelpers.appendChildToElement(this.gameElements.tableArea, this.gameElements.tableTop);
    }

    public init(): void {
        this.appendGameLayoutElements();
    }
}

export default GameLayout;
