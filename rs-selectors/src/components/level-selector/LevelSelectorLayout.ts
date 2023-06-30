import { LevelInfo, ProjectComponent } from '../../types/Interfaces';
import BurgerMenuLayout from './burger-menu/BurgerMenuLayout';
import LevelSelectorElements from './LevelSelectorElements';
import DOMHelpers from '../utils/DOMHelpers';
import BurgerMenuElements from './burger-menu/BurgerMenuElements';
import CodeEditorLayout from '../code-editor/CodeEditorLayout';
import {
    getCurrentLevelIndex,
    updateLevelData,
    setCurrentLevelIndex,
    generateElementsOnTable,
    highlightElementsWithSameClass,
    appendLevelMarkup,
} from '../utils/LevelHelpers';
import CodeEditorInput from '../code-editor/CodeEditorInput';
import GameLayout from '../code-editor/game/GameLayout';

class LevelSelectorLayout implements ProjectComponent {
    private levels: LevelInfo[];

    private levelElements: LevelSelectorElements;

    private burgerMenuLayout: BurgerMenuLayout;

    private burgerMenuElements: BurgerMenuElements;

    private codeEditorLayout: CodeEditorLayout;

    private codeEditorInput: CodeEditorInput;

    private gameLayout: GameLayout;

    constructor(levels: LevelInfo[]) {
        this.levels = levels;
        setCurrentLevelIndex(0);
        this.levelElements = LevelSelectorElements.getInstance();
        this.burgerMenuLayout = new BurgerMenuLayout(levels);
        this.burgerMenuElements = BurgerMenuElements.getInstance();
        this.codeEditorLayout = new CodeEditorLayout();
        this.codeEditorInput = new CodeEditorInput();
        this.gameLayout = new GameLayout();
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
        this.burgerMenuElements.burgerResetLevelButton.addEventListener('click', () => {
            setCurrentLevelIndex(0);
            this.burgerMenuElements.navBurger.classList.remove('burger--open');
            this.burgerMenuElements.burgerMenu.classList.remove('burger-menu--open');
            localStorage.clear();
            window.location.reload();
        });
    }

    private handleNextLevel = (): void => {
        const currentLevelIndex = getCurrentLevelIndex();
        if (getCurrentLevelIndex() < this.levels.length - 1) {
            setCurrentLevelIndex(currentLevelIndex + 1);
            updateLevelData();
            appendLevelMarkup();
            this.codeEditorLayout.setUserInputState(true);
            highlightElementsWithSameClass();
            this.codeEditorInput.syncLevelStatusCheckmark();
            generateElementsOnTable();
        }
    };

    private handlePrevLevel = (): void => {
        const currentLevelIndex = getCurrentLevelIndex();
        if (getCurrentLevelIndex() > 0) {
            setCurrentLevelIndex(currentLevelIndex - 1);
            updateLevelData();
            appendLevelMarkup();
            this.codeEditorLayout.setUserInputState(true);
            highlightElementsWithSameClass();
            this.codeEditorInput.syncLevelStatusCheckmark();
            generateElementsOnTable();
        }
    };

    public init(): void {
        this.appendElements();
        this.assignEventListeners();
        this.burgerMenuLayout.init((levelIndex: number) => {
            setCurrentLevelIndex(levelIndex); // updating the currentLevelIndex with index from clickBurgerMenuLevel
            updateLevelData(); // recall populateLevelData to update the level info
            appendLevelMarkup();
            highlightElementsWithSameClass();
            this.codeEditorInput.syncLevelStatusCheckmark();
            generateElementsOnTable();
        });
        updateLevelData();
        appendLevelMarkup();
    }
}

export default LevelSelectorLayout;
