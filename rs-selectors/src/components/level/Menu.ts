import Elements from './Elements';

class Menu {
    private elements: Elements;

    constructor() {
        this.elements = Elements.getInstance();
    }

    private activateBurger(): void {
        this.elements.burger.addEventListener('click', () => {
            this.elements.burger.classList.toggle('burger-opened');
            this.elements.burgerMenu.classList.toggle('burger-menu--open');
        });
    }

    public init = (): void => {
        this.activateBurger();
    };
}

export default Menu;
