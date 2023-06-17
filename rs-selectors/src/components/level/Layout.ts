import { LevelInfo } from '../../types/Interfaces';
import Menu from './Menu';
import Elements from './Elements';

class Layout {
    private levels: LevelInfo[];

    private currentLevelIndex: number;

    private levelElements: Elements;

    private menu: Menu;

    constructor(levels: LevelInfo[]) {
        this.levels = levels;
        this.currentLevelIndex = 0;
        this.levelElements = Elements.getInstance();
        this.menu = new Menu();
    }

    private appendElements = (): void => {
        document.body.appendChild(this.levelElements.levelWrapper);
        this.levelElements.levelWrapper.appendChild(this.levelElements.navElements);
        this.levelElements.levelWrapper.appendChild(this.levelElements.levelProgress);
        this.levelElements.levelProgress.appendChild(this.levelElements.levelProgressState);
        this.levelElements.levelWrapper.appendChild(this.levelElements.levelBlock);
        this.levelElements.navElements.appendChild(this.levelElements.levelNumber);
        this.levelElements.navElements.appendChild(this.levelElements.checkMark);
        this.levelElements.navElements.appendChild(this.levelElements.prevLevel);
        this.levelElements.navElements.appendChild(this.levelElements.nextLevel);
        this.levelElements.navElements.appendChild(this.levelElements.burger);
        this.levelElements.burger.appendChild(this.levelElements.burgerLine);
        this.levelElements.levelBlock.appendChild(this.levelElements.selectorType);
        this.levelElements.levelBlock.appendChild(this.levelElements.selectorTitle);
        this.levelElements.levelBlock.appendChild(this.levelElements.selectorSyntax);
        this.levelElements.levelBlock.appendChild(this.levelElements.selectorHint);
        this.levelElements.levelBlock.appendChild(this.levelElements.exampleTitle);
        this.levelElements.levelBlock.appendChild(this.levelElements.exampleCase);
    };

    private assignEventListeners = (): void => {
        this.levelElements.nextLevel.addEventListener('click', this.handleNextLevel);
        this.levelElements.prevLevel.addEventListener('click', this.handlePrevLevel);
    };

    private changeProgressState = (option: string): void => {
        let currentWidth = parseFloat(
            getComputedStyle(this.levelElements.levelProgressState).getPropertyValue('width')
        );
        if (option === 'increase') {
            currentWidth += 35;
            this.levelElements.levelProgressState.style.setProperty('width', `${currentWidth}px`);
        } else {
            currentWidth -= 35;
            this.levelElements.levelProgressState.style.setProperty('width', `${currentWidth}px`);
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
        this.levelElements.levelNumber.innerText = `${this.levels[this.currentLevelIndex].levelIndicator} of ${
            this.levels.length
        }`;
        this.levelElements.selectorType.innerText = this.levels[this.currentLevelIndex].selectorType;
        this.levelElements.selectorTitle.innerText = this.levels[this.currentLevelIndex].selectorTitle;
        this.levelElements.selectorSyntax.innerText = this.levels[this.currentLevelIndex].selectorSyntax;
        this.levelElements.selectorHint.innerText = this.levels[this.currentLevelIndex].hint;
        this.levelElements.exampleTitle.innerText = this.levels[this.currentLevelIndex].example.title;
        this.levelElements.exampleCase.innerText = `${this.levels[this.currentLevelIndex].example.case1} \n ${
            this.levels[this.currentLevelIndex].example.case2
        }`;
    };

    public init = (): void => {
        this.appendElements();
        this.assignEventListeners();
        this.populateLevelData();
        this.menu.init();
    };
}

export default Layout;
