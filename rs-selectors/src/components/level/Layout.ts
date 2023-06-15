import DOMHelpers from '../utils/DOMHelpers';
import { LevelInfo } from '../../types/Interfaces';

class Layout {
    private levels: LevelInfo[];

    private currentLevelIndex: number;

    private levelWrapper: HTMLElement = DOMHelpers.createElement('div', ['level-wrapper']);

    private navElements: HTMLElement = DOMHelpers.createElement('div', ['level__nav-elements']);

    private nextLevel: HTMLElement = DOMHelpers.createElement('button', ['nav-elements__nextLevel'], '>');

    private prevLevel: HTMLElement = DOMHelpers.createElement('button', ['nav-elements__prevLevel'], '<');

    private burger: HTMLElement = DOMHelpers.createElement('div', ['nav-elements__burger']);

    private burgerLine: HTMLElement = DOMHelpers.createElement('span', ['burger__burger-line']);

    private levelNumber: HTMLElement = DOMHelpers.createElement('span', ['nav-elements__level-number']);

    private levelProgress: HTMLElement = DOMHelpers.createElement('div', ['nav-elements__level-progress']);

    constructor(levels: LevelInfo[]) {
        this.levels = levels;
        this.currentLevelIndex = 0;
    }

    private appendElements = (): void => {
        document.body.appendChild(this.levelWrapper);
        this.levelWrapper.appendChild(this.navElements);
        this.levelWrapper.appendChild(this.levelProgress);
        this.navElements.appendChild(this.levelNumber);
        this.navElements.appendChild(this.prevLevel);
        this.navElements.appendChild(this.nextLevel);
        this.navElements.appendChild(this.burger);
        this.burger.appendChild(this.burgerLine);
    };

    private assignEventListeners = (): void => {
        this.nextLevel.addEventListener('click', this.handleNextLevel);
        this.prevLevel.addEventListener('click', this.handlePrevLevel);
    };

    private handleNextLevel = (): void => {
        if (this.currentLevelIndex < this.levels.length - 1) {
            this.currentLevelIndex += 1;
            this.populateLevelData();
        }
    };

    private handlePrevLevel = (): void => {
        if (this.currentLevelIndex > 0) {
            this.currentLevelIndex -= 1;
            this.populateLevelData();
        }
    };

    private populateLevelData = (): void => {
        const levelNumberElement = DOMHelpers.getElement<HTMLElement>('.nav-elements__level-number');
        levelNumberElement.innerText = this.levels[this.currentLevelIndex].levelIndicator;
    };

    public init = (): void => {
        this.appendElements();
        this.assignEventListeners();
        this.populateLevelData();
    };
}

export default Layout;
