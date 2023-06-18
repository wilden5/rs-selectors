import DOMHelpers from '../utils/DOMHelpers';
import Singleton from '../utils/Singleton';

class LevelSelectorElements {
    private static instance: LevelSelectorElements;

    public levelSelectorContainer: HTMLElement;

    public levelSelectorNav: HTMLElement;

    public navNextLevel: HTMLElement;

    public navPrevLevel: HTMLElement;

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

    public constructor() {
        this.levelSelectorContainer = DOMHelpers.createElement('div', ['level-selector-container']);
        this.levelSelectorNav = DOMHelpers.createElement('div', ['level-selector__nav']);
        this.navNextLevel = DOMHelpers.createElement('button', ['nav__next-level'], '>');
        this.navPrevLevel = DOMHelpers.createElement('button', ['nav__prev-level'], '<');
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
    }

    public static getInstance(): LevelSelectorElements {
        return Singleton.getInstance<LevelSelectorElements>(LevelSelectorElements);
    }
}

export default LevelSelectorElements;
