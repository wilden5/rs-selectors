import DOMHelpers from '../../utils/DOMHelpers';
import Singleton from '../../utils/Singleton';

class BurgerMenuElements {
    public navBurger: HTMLElement;

    public burgerLine: HTMLElement;

    public burgerMenu: HTMLElement;

    public burgerHeader: HTMLElement;

    public burgerLevels: HTMLElement;

    public constructor() {
        this.navBurger = DOMHelpers.createElement('div', ['nav__burger']);
        this.burgerLine = DOMHelpers.createElement('span', ['burger__burger-line']);
        this.burgerMenu = DOMHelpers.createElement('div', ['level-selector__burger-menu']);
        this.burgerHeader = DOMHelpers.createElement('h2', ['burger-menu__burger-header'], 'Choose a level');
        this.burgerLevels = DOMHelpers.createElement('div', ['burger-menu__burger-content']);
    }

    public static getInstance(): BurgerMenuElements {
        return Singleton.getInstance<BurgerMenuElements>(BurgerMenuElements);
    }
}

export default BurgerMenuElements;
