import { LevelInfo } from '../../types/Interfaces';
import BurgerMenuLayout from './burger-menu/BurgerMenuLayout';
import LevelSelectorElements from './LevelSelectorElements';
import { barProgressStateMap } from '../../types/Types';
import DOMHelpers from '../utils/DOMHelpers';
import BurgerMenuElements from './burger-menu/BurgerMenuElements';
import CodeEditorLayout from '../code-editor/CodeEditorLayout';

class LevelSelectorLayout {
    private levels: LevelInfo[];

    private currentLevelIndex: number;

    private levelElements: LevelSelectorElements;

    private burgerMenuLayout: BurgerMenuLayout;

    private burgerMenuElements: BurgerMenuElements;

    private codeEditorLayout: CodeEditorLayout;

    constructor(levels: LevelInfo[]) {
        this.levels = levels;
        this.currentLevelIndex = 0;
        this.levelElements = LevelSelectorElements.getInstance();
        this.burgerMenuLayout = new BurgerMenuLayout(levels);
        this.burgerMenuElements = BurgerMenuElements.getInstance();
        this.codeEditorLayout = new CodeEditorLayout();
    }

    private appendElements(): void {
        DOMHelpers.appendChildToElement(document.body, this.levelElements.levelSelectorContainer);
        DOMHelpers.appendChildToElement(this.levelElements.levelSelectorContainer, this.levelElements.levelSelectorNav);
        DOMHelpers.appendChildToElement(this.levelElements.levelSelectorContainer, this.levelElements.levelProgress);
        DOMHelpers.appendChildToElement(this.levelElements.levelProgress, this.levelElements.levelProgressState);
        DOMHelpers.appendChildToElement(
            this.levelElements.levelSelectorContainer,
            this.levelElements.levelInformationContainer
        );
        DOMHelpers.appendChildToElement(this.levelElements.levelSelectorNav, this.levelElements.navLevelNumber);
        DOMHelpers.appendChildToElement(this.levelElements.levelSelectorNav, this.levelElements.navCheckmark);
        DOMHelpers.appendChildToElement(this.levelElements.levelSelectorNav, this.levelElements.navPrevLevel);
        DOMHelpers.appendChildToElement(this.levelElements.levelSelectorNav, this.levelElements.navNextLevel);
        DOMHelpers.appendChildToElement(this.levelElements.levelInformationContainer, this.levelElements.selectorType);
        DOMHelpers.appendChildToElement(this.levelElements.levelInformationContainer, this.levelElements.selectorTitle);
        DOMHelpers.appendChildToElement(
            this.levelElements.levelInformationContainer,
            this.levelElements.selectorSyntax
        );
        DOMHelpers.appendChildToElement(this.levelElements.levelInformationContainer, this.levelElements.selectorHint);
        DOMHelpers.appendChildToElement(this.levelElements.levelInformationContainer, this.levelElements.exampleTitle);
        DOMHelpers.appendChildToElement(this.levelElements.levelInformationContainer, this.levelElements.exampleCase);
        DOMHelpers.appendChildToElement(
            this.levelElements.levelInformationContainer,
            this.levelElements.exampleCaseSecond
        );
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
            this.codeEditorLayout.highlightElementsWithSameClass();
        }
    };

    private handlePrevLevel = (): void => {
        if (this.currentLevelIndex > 0) {
            this.currentLevelIndex -= 1;
            this.changeProgressState();
            this.populateLevelData();
            this.appendLevelMarkup();
            this.codeEditorLayout.highlightElementsWithSameClass();
        }
    };

    private populateLevelData(): void {
        const globalHeader = DOMHelpers.getElement('.global-header');
        this.levelElements.navLevelNumber.innerText = `${this.levels[this.currentLevelIndex].levelIndicator} of ${
            this.levels.length
        }`;
        this.levelElements.selectorType.innerText = this.levels[this.currentLevelIndex].selectorType;
        this.levelElements.selectorTitle.innerText = this.levels[this.currentLevelIndex].selectorTitle;
        this.levelElements.selectorSyntax.innerText = this.levels[this.currentLevelIndex].selectorSyntax;
        this.levelElements.selectorHint.innerHTML = this.levels[this.currentLevelIndex].hint;
        this.levelElements.exampleTitle.innerText = this.levels[this.currentLevelIndex].example.title;
        this.levelElements.exampleCase.innerHTML = this.levels[this.currentLevelIndex].example.case1;
        this.levelElements.exampleCaseSecond.innerHTML = this.levels[this.currentLevelIndex].example.case2;
        globalHeader.innerText = this.levels[this.currentLevelIndex].doThis;
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
        container.innerHTML = '';
        const arrayMarkup: string[] = this.levels[this.currentLevelIndex].boardMarkup.split(',');
        let previousElement: HTMLElement | null = null;

        for (let index = 0; index < arrayMarkup.length; index += 1) {
            const item = arrayMarkup[index];
            const div = DOMHelpers.createElement('div', [`item-${index}`, 'item'], `${item}`);
            container.appendChild(div);
            if (item.includes('/') && !item.includes(' /') && previousElement) {
                previousElement.className += ` item-nested-${index}`;
                container.childNodes.forEach((childNode) => {
                    if (childNode.textContent === item.replace('</', '<')) {
                        (childNode as HTMLElement).classList.add(`item-${index}`);
                    }
                });
            }
            previousElement = div;
        }
        container.childNodes.forEach((childNode: ChildNode) => {
            if (childNode instanceof HTMLElement && childNode.classList.length > 3) {
                const fourthClass: string = childNode.classList.item(3) as string;
                childNode.classList.remove(fourthClass);
            }
        });
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
            this.codeEditorLayout.highlightElementsWithSameClass();
        });
        this.populateLevelData();
        this.resetButtonClick();
        this.appendLevelMarkup();
    }
}

export default LevelSelectorLayout;
