import { LevelInfo } from '../../types/Interfaces';
import BurgerMenuLayout from './burger-menu/BurgerMenuLayout';
import LevelSelectorElements from './LevelSelectorElements';
import { barProgressStateMap } from '../../types/Types';
import DOMHelpers from '../utils/DOMHelpers';
import BurgerMenuElements from './burger-menu/BurgerMenuElements';

class LevelSelectorLayout {
    private levels: LevelInfo[];

    private currentLevelIndex: number;

    private levelElements: LevelSelectorElements;

    private burgerMenuLayout: BurgerMenuLayout;

    private burgerMenuElements: BurgerMenuElements;

    constructor(levels: LevelInfo[]) {
        this.levels = levels;
        this.currentLevelIndex = 0;
        this.levelElements = LevelSelectorElements.getInstance();
        this.burgerMenuLayout = new BurgerMenuLayout(levels);
        this.burgerMenuElements = BurgerMenuElements.getInstance();
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

    private changeProgressState(): void {
        this.levelElements.levelProgressState.style.setProperty(
            'width',
            `${barProgressStateMap[this.currentLevelIndex]}px`
        );
    }

    private handleNextLevel = (): void => {
        if (this.currentLevelIndex < this.levels.length - 1) {
            this.currentLevelIndex += 1;
            this.changeProgressState();
            this.populateLevelData();
            this.appendLevelMarkup();
        }
    };

    private handlePrevLevel = (): void => {
        if (this.currentLevelIndex > 0) {
            this.currentLevelIndex -= 1;
            this.changeProgressState();
            this.populateLevelData();
            this.appendLevelMarkup();
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
        this.highlightSelectedLevelInBurgerMenu();
    }

    private highlightSelectedLevelInBurgerMenu(): void {
        DOMHelpers.getElements('.burger-content__level').forEach((item) => {
            const secondClass = Number(item.classList[1].split('-')[1]);
            if (this.currentLevelIndex === secondClass - 1) {
                item.classList.add('level--selected');
            } else {
                item.classList.remove('level--selected');
            }
        });
    }

    private resetButtonClick(): void {
        this.burgerMenuElements.burgerResetLevelButton.addEventListener('click', () => {
            this.currentLevelIndex = 0;
            this.burgerMenuElements.navBurger.classList.remove('burger--open');
            this.burgerMenuElements.burgerMenu.classList.remove('burger-menu--open');
        });
    }

    private appendLevelMarkup(): void {
        const container = DOMHelpers.getElement('.view_level-markup');
        container.innerText = this.levels[this.currentLevelIndex].boardMarkup;
    }

    public init(): void {
        this.appendElements();
        this.assignEventListeners();
        this.burgerMenuLayout.init((levelIndex: number) => {
            this.currentLevelIndex = levelIndex; // updating the currentLevelIndex with index from clickBurgerMenuLevel
            this.populateLevelData(); // recall populateLevelData to update the level info
            this.changeProgressState();
            this.highlightSelectedLevelInBurgerMenu();
            this.appendLevelMarkup();
        });
        this.populateLevelData();
        this.resetButtonClick();
        this.appendLevelMarkup();
    }
}

export default LevelSelectorLayout;
