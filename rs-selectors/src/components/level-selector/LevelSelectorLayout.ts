import { LevelInfo } from '../../types/Interfaces';
import BurgerMenuLayout from './burger-menu/BurgerMenuLayout';
import LevelSelectorElements from './LevelSelectorElements';

class LevelSelectorLayout {
    private levels: LevelInfo[];

    private currentLevelIndex: number;

    private levelElements: LevelSelectorElements;

    private burgerMenuLayout: BurgerMenuLayout;

    constructor(levels: LevelInfo[]) {
        this.levels = levels;
        this.currentLevelIndex = 0;
        this.levelElements = LevelSelectorElements.getInstance();
        this.burgerMenuLayout = new BurgerMenuLayout(levels);
    }

    private appendElements(): void {
        document.body.appendChild(this.levelElements.levelSelectorContainer);
        this.levelElements.levelSelectorContainer.appendChild(this.levelElements.levelSelectorNav);
        this.levelElements.levelSelectorContainer.appendChild(this.levelElements.levelProgress);
        this.levelElements.levelProgress.appendChild(this.levelElements.levelProgressState);
        this.levelElements.levelSelectorContainer.appendChild(this.levelElements.levelInformationContainer);
        this.levelElements.levelSelectorNav.appendChild(this.levelElements.navLevelNumber);
        this.levelElements.levelSelectorNav.appendChild(this.levelElements.navCheckmark);
        this.levelElements.levelSelectorNav.appendChild(this.levelElements.navPrevLevel);
        this.levelElements.levelSelectorNav.appendChild(this.levelElements.navNextLevel);
        this.levelElements.levelInformationContainer.appendChild(this.levelElements.selectorType);
        this.levelElements.levelInformationContainer.appendChild(this.levelElements.selectorTitle);
        this.levelElements.levelInformationContainer.appendChild(this.levelElements.selectorSyntax);
        this.levelElements.levelInformationContainer.appendChild(this.levelElements.selectorHint);
        this.levelElements.levelInformationContainer.appendChild(this.levelElements.exampleTitle);
        this.levelElements.levelInformationContainer.appendChild(this.levelElements.exampleCase);
    }

    private assignEventListeners(): void {
        this.levelElements.navNextLevel.addEventListener('click', this.handleNextLevel);
        this.levelElements.navPrevLevel.addEventListener('click', this.handlePrevLevel);
    }

    private changeProgressState(option: string): void {
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
    }

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

    private populateLevelData(): void {
        this.levelElements.navLevelNumber.innerText = `${this.levels[this.currentLevelIndex].levelIndicator} of ${
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
    }

    public init(): void {
        this.appendElements();
        this.assignEventListeners();
        this.populateLevelData();
        this.burgerMenuLayout.init((levelIndex: number) => {
            this.currentLevelIndex = levelIndex; // updating the currentLevelIndex with index from clickBurgerMenuLevel
            this.populateLevelData(); // recall populateLevelData to update the level info
        });
    }
}

export default LevelSelectorLayout;
