import DOMHelpers from '../../utils/DOMHelpers';
import Singleton from '../../utils/Singleton';

class GameElements {
    public gameWrapper: HTMLElement;

    public tableWrapper: HTMLElement;

    public tableArea: HTMLElement;

    public tableTop: HTMLElement;

    public constructor() {
        this.gameWrapper = DOMHelpers.createElement('div', ['game-wrapper']);
        this.tableWrapper = DOMHelpers.createElement('div', ['table-wrapper']);
        this.tableArea = DOMHelpers.createElement('div', ['table-area']);
        this.tableTop = DOMHelpers.createElement('div', ['table-top']);
    }

    public static getInstance(): GameElements {
        return Singleton.getInstance<GameElements>(GameElements);
    }
}

export default GameElements;
