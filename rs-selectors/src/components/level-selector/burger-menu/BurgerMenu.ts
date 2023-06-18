import LevelSelectorElements from '../LevelSelectorElements';

class BurgerMenu {
    private elements: LevelSelectorElements;

    constructor() {
        this.elements = LevelSelectorElements.getInstance();
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
