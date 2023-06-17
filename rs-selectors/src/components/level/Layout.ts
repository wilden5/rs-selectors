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

    private levelProgressState: HTMLElement = DOMHelpers.createElement('div', ['level-progress__state']);

    private levelBlock: HTMLElement = DOMHelpers.createElement('div', ['nav-elements__block']);

    private selectorType: HTMLElement = DOMHelpers.createElement('h3', ['nav-elements__selector-name']);

    private selectorTitle: HTMLElement = DOMHelpers.createElement('h2', ['nav-elements__selector-title']);

    private selectorSyntax: HTMLElement = DOMHelpers.createElement('h2', ['nav-elements__selector-syntax']);

    private selectorHint: HTMLElement = DOMHelpers.createElement('div', ['nav-elements__selector-hint']);

    private exampleTitle: HTMLElement = DOMHelpers.createElement('h4', ['nav-elements__example-title']);

    private exampleCase: HTMLElement = DOMHelpers.createElement('div', ['nav-elements__example-case']);

    private checkMark: HTMLElement = DOMHelpers.createElement('span', ['nav-elements__checkmark']);

    constructor(levels: LevelInfo[]) {
        this.levels = levels;
        this.currentLevelIndex = 0;
    }

    private appendElements = (): void => {
        document.body.appendChild(this.levelWrapper);
        this.levelWrapper.appendChild(this.navElements);
        this.levelWrapper.appendChild(this.levelProgress);
        this.levelProgress.appendChild(this.levelProgressState);
        this.levelWrapper.appendChild(this.levelBlock);
        this.navElements.appendChild(this.levelNumber);
        this.navElements.appendChild(this.checkMark);
        this.navElements.appendChild(this.prevLevel);
        this.navElements.appendChild(this.nextLevel);
        this.navElements.appendChild(this.burger);
        this.burger.appendChild(this.burgerLine);
        this.levelBlock.appendChild(this.selectorType);
        this.levelBlock.appendChild(this.selectorTitle);
        this.levelBlock.appendChild(this.selectorSyntax);
        this.levelBlock.appendChild(this.selectorHint);
        this.levelBlock.appendChild(this.exampleTitle);
        this.levelBlock.appendChild(this.exampleCase);
    };

    private assignEventListeners = (): void => {
        this.nextLevel.addEventListener('click', this.handleNextLevel);
        this.prevLevel.addEventListener('click', this.handlePrevLevel);
    };

    private changeProgressState = (option: string): void => {
        let currentWidth = parseFloat(getComputedStyle(this.levelProgressState).getPropertyValue('width'));
        if (option === 'increase') {
            currentWidth += 35;
            this.levelProgressState.style.setProperty('width', `${currentWidth}px`);
        } else {
            currentWidth -= 35;
            this.levelProgressState.style.setProperty('width', `${currentWidth}px`);
        }
    };

    private handleNextLevel = (): void => {
        if (this.currentLevelIndex < this.levels.length - 1) {
            this.currentLevelIndex += 1;
            this.changeProgressState('increase');
            this.populateLevelData();
        }
    };

    private handlePrevLevel = (): void => {
        if (this.currentLevelIndex > 0) {
            this.currentLevelIndex -= 1;
            this.changeProgressState('decrease');
            this.populateLevelData();
        }
    };

    private populateLevelData = (): void => {
        this.levelNumber.innerText = `${this.levels[this.currentLevelIndex].levelIndicator} of ${this.levels.length}`;
        this.selectorType.innerText = this.levels[this.currentLevelIndex].selectorType;
        this.selectorTitle.innerText = this.levels[this.currentLevelIndex].selectorTitle;
        this.selectorSyntax.innerText = this.levels[this.currentLevelIndex].selectorSyntax;
        this.selectorHint.innerText = this.levels[this.currentLevelIndex].hint;
        this.exampleTitle.innerText = this.levels[this.currentLevelIndex].example.title;
        this.exampleCase.innerText = `${this.levels[this.currentLevelIndex].example.case1} \n ${
            this.levels[this.currentLevelIndex].example.case2
        }`;
    };

    public init = (): void => {
        this.appendElements();
        this.assignEventListeners();
        this.populateLevelData();
    };
}

export default Layout;
