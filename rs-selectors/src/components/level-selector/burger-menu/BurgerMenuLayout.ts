import BurgerMenuElements from './BurgerMenuElements';
import LevelSelectorElements from '../LevelSelectorElements';
import { LevelInfo } from '../../../types/Interfaces';
import DOMHelpers from '../../utils/DOMHelpers';

class BurgerMenuLayout {
    private levels: LevelInfo[];

    private readonly burgerMenuElements: BurgerMenuElements;

    private levelSelectorElements: LevelSelectorElements;

    constructor(levels: LevelInfo[]) {
        this.levels = levels;
        this.burgerMenuElements = BurgerMenuElements.getInstance();
        this.levelSelectorElements = LevelSelectorElements.getInstance();
    }

    private appendBurgerMenuElements(): void {
        this.levelSelectorElements.levelSelectorContainer.appendChild(this.burgerMenuElements.burgerMenu);
        this.levelSelectorElements.levelSelectorNav.appendChild(this.burgerMenuElements.navBurger);
        this.burgerMenuElements.navBurger.appendChild(this.burgerMenuElements.burgerLine);
        this.burgerMenuElements.burgerMenu.appendChild(this.burgerMenuElements.burgerHeader);
        this.burgerMenuElements.burgerMenu.appendChild(this.burgerMenuElements.burgerLevels);
    }

    private assignBurgerMenuEventListeners(): void {
        this.burgerMenuElements.navBurger.addEventListener('click', () => {
            this.burgerMenuElements.navBurger.classList.toggle('burger--open');
            this.burgerMenuElements.burgerMenu.classList.toggle('burger-menu--open');
        });
    }

    private populateBurgerMenu(): void {
        this.levels.forEach((level) => {
            const [clonedContent, clonedCheckmark, clonedNumber, clonedSyntax] = [
                this.burgerMenuElements.burgerLevelContent,
                this.burgerMenuElements.burgerLevelCheckmark,
                this.burgerMenuElements.burgerLevelNumber,
                this.burgerMenuElements.burgerLevelSyntax,
            ].map((element) => element.cloneNode(true) as HTMLElement);

            this.burgerMenuElements.burgerLevels.appendChild(clonedContent);
            clonedContent.appendChild(clonedCheckmark);
            clonedContent.appendChild(clonedNumber);
            clonedContent.appendChild(clonedSyntax);

            clonedContent.classList.add(`level-${level.levelIndicator.split(' ')[1]}`);
            clonedNumber.innerText = `${level.levelIndicator.split(' ')[1]}`;
            clonedSyntax.classList.add(`level__syntax-${level.levelIndicator.split(' ')[1]}`);
            clonedSyntax.innerText = `${level.selectorSyntax}`;
        });
    }

    private clickBurgerMenuLevel(callback: (levelIndex: number) => void): void {
        const burgerLevelContentAll = DOMHelpers.getElements<HTMLElement>('.burger-content__level');
        burgerLevelContentAll.forEach((item) => {
            item.addEventListener('click', () => {
                const secondClass = item.classList.item(1)?.replace('-', ' ');
                this.levels.forEach((level, index) => {
                    if (level.levelIndicator.toLowerCase() === secondClass) {
                        this.burgerMenuElements.navBurger.classList.toggle('burger--open');
                        this.burgerMenuElements.burgerMenu.classList.toggle('burger-menu--open');
                        callback(index); // calling callback here that takes number and return nothing
                    }
                });
            });
        });
    }

    public init(callback: (levelIndex: number) => void): void {
        // adding callback here cuz we need to pass it to the clickBurgerMenuLevel
        this.appendBurgerMenuElements();
        this.assignBurgerMenuEventListeners();
        this.populateBurgerMenu();
        this.clickBurgerMenuLevel(callback);
    }
}

export default BurgerMenuLayout;
