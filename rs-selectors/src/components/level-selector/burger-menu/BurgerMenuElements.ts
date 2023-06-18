import DOMHelpers from '../../utils/DOMHelpers';
import Singleton from '../../utils/Singleton';

class BurgerMenuElements {
    public burger: HTMLElement;

    public burgerLine: HTMLElement;

    public burgerMenu: HTMLElement;

    public burgerHeader: HTMLElement;

    public burgerLevels: HTMLElement;

    public constructor() {
        this.burger = DOMHelpers.createElement('div', ['nav-elements__burger']);
        this.burgerLine = DOMHelpers.createElement('span', ['burger__burger-line']);
        this.burgerMenu = DOMHelpers.createElement('div', ['burger-menu']);
        this.burgerHeader = DOMHelpers.createElement('h2', ['burger-header'], 'Choose a level');
        this.burgerLevels = DOMHelpers.createElement('div', ['burger-levels']);
    }

    public static getInstance(): BurgerMenuElements {
        return Singleton.getInstance<BurgerMenuElements>(BurgerMenuElements);
    }
}

export default BurgerMenuElements;
