import DOMHelpers from '../utils/DOMHelpers';
import { LevelInfo } from '../../types';

class Layout {
    private levels: LevelInfo[];

    private currentLevelIndex: number;

    constructor(levels: LevelInfo[]) {
        this.levels = levels;
        this.currentLevelIndex = 0;
    }

    public buildLayout = (): void => {
        const levelWrapper: HTMLElement = DOMHelpers.createElement('div', ['level-wrapper']);
        const navElements: HTMLElement = DOMHelpers.createElement('div', ['level__nav-elements']);
        const nextLevel: HTMLElement = DOMHelpers.createElement('button', ['nav-elements__nextLevel'], '>');
        const prevLevel: HTMLElement = DOMHelpers.createElement('button', ['nav-elements__prevLevel'], '<');
        const burger: HTMLElement = DOMHelpers.createElement('div', ['nav-elements__burger']);
        const burgerLine: HTMLElement = DOMHelpers.createElement('span', ['burger__burger-line']);
        const levelNumber: HTMLElement = DOMHelpers.createElement('span', ['nav-elements__level-number']);
        const levelProgress: HTMLElement = DOMHelpers.createElement('div', ['nav-elements__level-progress']);
        document.body.appendChild(levelWrapper);
        levelWrapper.appendChild(navElements);
        levelWrapper.appendChild(levelProgress);
        navElements.appendChild(levelNumber);
        navElements.appendChild(prevLevel);
        navElements.appendChild(nextLevel);
        navElements.appendChild(burger);
        burger.appendChild(burgerLine);

        nextLevel.addEventListener('click', this.handleNextLevel);
        prevLevel.addEventListener('click', this.handlePrevLevel);
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

    public populateLevelData = (): void => {
        const levelNumberElement = DOMHelpers.getElement<HTMLElement>('.nav-elements__level-number');
        levelNumberElement.innerText = this.levels[this.currentLevelIndex].levelIndicator;
    };
}

export default Layout;
