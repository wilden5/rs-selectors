import DOMHelpers from '../../utils/DOMHelpers';

class BurgerMenuElements {
    private static instance: BurgerMenuElements;

    public burger: HTMLElement;

    public burgerLine: HTMLElement;

    public burgerMenu: HTMLElement;

    public burgerHeader: HTMLElement;

    public burgerLevels: HTMLElement;

    private constructor() {
        this.burger = DOMHelpers.createElement('div', ['nav-elements__burger']);
        this.burgerLine = DOMHelpers.createElement('span', ['burger__burger-line']);
        this.burgerMenu = DOMHelpers.createElement('div', ['burger-menu']);
        this.burgerHeader = DOMHelpers.createElement('h2', ['burger-header'], 'Choose a level');
        this.burgerLevels = DOMHelpers.createElement('div', ['burger-levels']);
    }

    public static getInstance(): BurgerMenuElements {
        if (!BurgerMenuElements.instance) {
            BurgerMenuElements.instance = new BurgerMenuElements();
        }
        return BurgerMenuElements.instance;
    }
}

export default BurgerMenuElements;
