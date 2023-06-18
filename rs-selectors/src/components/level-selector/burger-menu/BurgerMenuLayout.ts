import BurgerMenuElements from './BurgerMenuElements';
import LevelSelectorElements from '../LevelSelectorElements';
import DOMHelpers from '../../utils/DOMHelpers';
import { LevelInfo } from '../../../types/Interfaces';

class BurgerMenuLayout {
    private levels: LevelInfo[];

    private burgerMenuElements: BurgerMenuElements;

    private levelSelectorElements: LevelSelectorElements;

    constructor(levels: LevelInfo[]) {
        this.levels = levels;
        this.burgerMenuElements = BurgerMenuElements.getInstance();
        this.levelSelectorElements = LevelSelectorElements.getInstance();
    }

    private appendBurgerMenuElements(): void {
        this.levelSelectorElements.levelSelectorContainer.appendChild(this.burgerMenuElements.burgerMenu);
        this.levelSelectorElements.levelSelectorNav.appendChild(this.burgerMenuElements.burger);
        this.burgerMenuElements.burger.appendChild(this.burgerMenuElements.burgerLine);
        this.burgerMenuElements.burgerMenu.appendChild(this.burgerMenuElements.burgerHeader);
        this.burgerMenuElements.burgerMenu.appendChild(this.burgerMenuElements.burgerLevels);
    }

    private assignBurgerMenuEventListeners(): void {
        this.burgerMenuElements.burger.addEventListener('click', () => {
            this.burgerMenuElements.burger.classList.toggle('burger-opened');
            this.burgerMenuElements.burgerMenu.classList.toggle('burger-menu--open');
        });
    }

    private populateBurgerMenu(): void {
        this.levels.forEach((level) => {
            const div = DOMHelpers.createElement('div', ['div-wrapper']);
            const number = DOMHelpers.createElement('span', ['number'], `${level.levelIndicator.split(' ')[1]}`);
            const checkmark = DOMHelpers.createElement('span', ['checkmark-s']);
            const element = DOMHelpers.createElement(
                'span',
                ['level', `level-${level.levelIndicator.split(' ')[1]}`],
                `${level.selectorSyntax}`
            );
            this.burgerMenuElements.burgerLevels.appendChild(div);
            div.appendChild(checkmark);
            div.appendChild(number);
            div.appendChild(element);
        });
    }

    public init = (): void => {
        this.appendBurgerMenuElements();
        this.assignBurgerMenuEventListeners();
        this.populateBurgerMenu();
    };
}

export default BurgerMenuLayout;
