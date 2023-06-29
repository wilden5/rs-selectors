import GameElements from './GameElements';
import DOMHelpers from '../../utils/DOMHelpers';
import { LevelInfo, ProjectComponent } from '../../../types/Interfaces';
import { getCurrentLevelIndex } from '../../utils/LevelHelpers';
import CodeEditorLayout from '../CodeEditorLayout';

class GameLayout implements ProjectComponent {
    private gameElements: GameElements;

    private codeEditorLayout: CodeEditorLayout;

    private levels: LevelInfo[];

    constructor(levels: LevelInfo[]) {
        this.gameElements = GameElements.getInstance();
        this.levels = levels;
        this.codeEditorLayout = new CodeEditorLayout();
    }

    private appendGameLayoutElements(): void {
        DOMHelpers.appendChildToElement(DOMHelpers.getElement('.code-editor-container'), this.gameElements.gameWrapper);
        DOMHelpers.appendChildToElement(this.gameElements.gameWrapper, this.gameElements.tableWrapper);
        DOMHelpers.appendChildToElement(this.gameElements.tableWrapper, this.gameElements.tableArea);
        DOMHelpers.appendChildToElement(this.gameElements.tableArea, this.gameElements.tableTop);
    }

    public generateElementsOnTable(): void {
        const boardElementArray = this.levels[getCurrentLevelIndex()].boardElement;
        if (boardElementArray) {
            for (let i = 0; i < this.levels.length; i += 1) {
                if (getCurrentLevelIndex() === Number(this.levels[i].levelIndicator.split(' ')[1]) - 1) {
                    boardElementArray.type.forEach((elem, index) => {
                        const createElem = DOMHelpers.createElement(`${elem}`, [
                            `${boardElementArray.class[index]}`,
                            'item',
                        ]);
                        this.gameElements.tableTop.appendChild(createElem);
                    });
                }
            }
        }
    }

    public init(): void {
        this.appendGameLayoutElements();
        this.generateElementsOnTable();
        this.codeEditorLayout.highlightElementsWithSameClass();
    }
}

export default GameLayout;
