import Elements from './Elements';

class Menu {
    private elements: Elements;

    constructor() {
        this.elements = Elements.getInstance();
    }

    public activateBurger(): void {
        this.elements.burger.addEventListener('click', () => {
            this.elements.burger.classList.toggle('burger-opened');
        });
    }

    public init = (): void => {
        this.activateBurger();
    };
}

export default Menu;
