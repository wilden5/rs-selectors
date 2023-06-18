import Elements from '../Elements';

class BurgerMenu {
    private elements: Elements;

    constructor() {
        this.elements = Elements.getInstance();
    }

    private assignBurgerMenuEventListeners(): void {
        this.elements.burger.addEventListener('click', () => {
            this.elements.burger.classList.toggle('burger-opened');
            this.elements.burgerMenu.classList.toggle('burger-menu--open');
        });
    }

    public init = (): void => {
        this.assignBurgerMenuEventListeners();
    };
}

export default BurgerMenu;
