class Menu {
    private readonly burger: HTMLElement;

    constructor(burger: HTMLElement) {
        this.burger = burger;
    }

    public activateBurger(): void {
        this.burger.addEventListener('click', () => {
            this.burger.classList.toggle('burger-opened');
        });
    }

    public init = (): void => {
        this.activateBurger();
    };
}

export default Menu;
