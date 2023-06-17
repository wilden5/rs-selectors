import DOMHelpers from '../utils/DOMHelpers';

class Elements {
    private static instance: Elements;

    public levelWrapper: HTMLElement;

    public navElements: HTMLElement;

    public nextLevel: HTMLElement;

    public prevLevel: HTMLElement;

    public burger: HTMLElement;

    public burgerLine: HTMLElement;

    public levelNumber: HTMLElement;

    public levelProgress: HTMLElement;

    public levelProgressState: HTMLElement;

    public levelBlock: HTMLElement;

    public selectorType: HTMLElement;

    public selectorTitle: HTMLElement;

    public selectorSyntax: HTMLElement;

    public selectorHint: HTMLElement;

    public exampleTitle: HTMLElement;

    public exampleCase: HTMLElement;

    public checkMark: HTMLElement;

    private constructor() {
        this.levelWrapper = DOMHelpers.createElement('div', ['level-wrapper']);
        this.navElements = DOMHelpers.createElement('div', ['level__nav-elements']);
        this.nextLevel = DOMHelpers.createElement('button', ['nav-elements__nextLevel'], '>');
        this.prevLevel = DOMHelpers.createElement('button', ['nav-elements__prevLevel'], '<');
        this.burger = DOMHelpers.createElement('div', ['nav-elements__burger']);
        this.burgerLine = DOMHelpers.createElement('span', ['burger__burger-line']);
        this.levelNumber = DOMHelpers.createElement('span', ['nav-elements__level-number']);
        this.levelProgress = DOMHelpers.createElement('div', ['nav-elements__level-progress']);
        this.levelProgressState = DOMHelpers.createElement('div', ['level-progress__state']);
        this.levelBlock = DOMHelpers.createElement('div', ['nav-elements__block']);
        this.selectorType = DOMHelpers.createElement('h3', ['nav-elements__selector-name']);
        this.selectorTitle = DOMHelpers.createElement('h2', ['nav-elements__selector-title']);
        this.selectorSyntax = DOMHelpers.createElement('h2', ['nav-elements__selector-syntax']);
        this.selectorHint = DOMHelpers.createElement('div', ['nav-elements__selector-hint']);
        this.exampleTitle = DOMHelpers.createElement('h4', ['nav-elements__example-title']);
        this.exampleCase = DOMHelpers.createElement('div', ['nav-elements__example-case']);
        this.checkMark = DOMHelpers.createElement('span', ['nav-elements__checkmark']);
    }

    public static getInstance(): Elements {
        if (!Elements.instance) {
            Elements.instance = new Elements();
        }
        return Elements.instance;
    }
}

export default Elements;
