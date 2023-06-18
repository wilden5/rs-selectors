import DOMHelpers from '../utils/DOMHelpers';

class LevelSelectorElements {
    private static instance: LevelSelectorElements;

    public levelSelectorContainer: HTMLElement;

    public levelSelectorNav: HTMLElement;

    public navNextLevel: HTMLElement;

    public navPrevLevel: HTMLElement;

    public burger: HTMLElement;

    public burgerLine: HTMLElement;

    public navLevelNumber: HTMLElement;

    public levelProgress: HTMLElement;

    public levelProgressState: HTMLElement;

    public levelInformationContainer: HTMLElement;

    public selectorType: HTMLElement;

    public selectorTitle: HTMLElement;

    public selectorSyntax: HTMLElement;

    public selectorHint: HTMLElement;

    public exampleTitle: HTMLElement;

    public exampleCase: HTMLElement;

    public navCheckmark: HTMLElement;

    public burgerMenu: HTMLElement;

    public burgerHeader: HTMLElement;

    public burgerLevels: HTMLElement;

    private constructor() {
        this.levelSelectorContainer = DOMHelpers.createElement('div', ['level-selector-container']);
        this.levelSelectorNav = DOMHelpers.createElement('div', ['level-selector__nav']);
        this.navNextLevel = DOMHelpers.createElement('button', ['nav__next-level'], '>');
        this.navPrevLevel = DOMHelpers.createElement('button', ['nav__prev-level'], '<');
        this.burger = DOMHelpers.createElement('div', ['nav-elements__burger']);
        this.burgerLine = DOMHelpers.createElement('span', ['burger__burger-line']);
        this.navLevelNumber = DOMHelpers.createElement('span', ['nav__level-number']);
        this.levelProgress = DOMHelpers.createElement('div', ['level-selector__state-progress']);
        this.levelProgressState = DOMHelpers.createElement('div', ['state-progress__completed']);
        this.levelInformationContainer = DOMHelpers.createElement('div', ['level-selector__level-information']);
        this.selectorType = DOMHelpers.createElement('h3', ['level-information__selector-type']);
        this.selectorTitle = DOMHelpers.createElement('h2', ['level-information__selector-title']);
        this.selectorSyntax = DOMHelpers.createElement('h2', ['level-information__selector-syntax']);
        this.selectorHint = DOMHelpers.createElement('div', ['level-information__selector-hint']);
        this.exampleTitle = DOMHelpers.createElement('h4', ['level-information__example-title']);
        this.exampleCase = DOMHelpers.createElement('div', ['level-information__example-case']);
        this.navCheckmark = DOMHelpers.createElement('span', ['nav__checkmark']);
        this.burgerMenu = DOMHelpers.createElement('div', ['burger-menu']);
        this.burgerHeader = DOMHelpers.createElement('h2', ['burger-header'], 'Choose a level');
        this.burgerLevels = DOMHelpers.createElement('div', ['burger-levels']);
    }

    public static getInstance(): LevelSelectorElements {
        if (!LevelSelectorElements.instance) {
            LevelSelectorElements.instance = new LevelSelectorElements();
        }
        return LevelSelectorElements.instance;
    }
}

export default LevelSelectorElements;
