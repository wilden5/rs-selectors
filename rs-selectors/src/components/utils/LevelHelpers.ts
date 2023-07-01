import DOMHelpers from './DOMHelpers';
import GAME_LEVELS from '../app/AppLevels';
import { barProgressStateMap } from '../../types/Types';
import { LevelInfo } from '../../types/Interfaces';

let currentLevelIndex = 0;

const levels: LevelInfo[] = GAME_LEVELS;

export function setCurrentLevelIndex(index: number): void {
    currentLevelIndex = index;
}

export function getCurrentLevelIndex(): number {
    return currentLevelIndex;
}

function updateLevelProgressBar(): void {
    DOMHelpers.getElement('.state-progress__completed').style.setProperty(
        'width',
        `${barProgressStateMap[getCurrentLevelIndex()]}px`
    );
}

function highlightSelectedLevelInMenu(): void {
    DOMHelpers.getElements('.burger-content__level').forEach((item) => {
        const secondClass = Number(item.classList[1].split('-')[1]);
        if (getCurrentLevelIndex() === secondClass - 1) {
            item.classList.add('level--selected');
        } else {
            item.classList.remove('level--selected');
        }
    });
}

export function highlightElementsWithSameClass(): void {
    const items: HTMLElement[] = DOMHelpers.getElements('.item');
    items.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.classList.forEach((className) => {
                if (className.startsWith('item-')) {
                    const classNumber: string = className.replace('item-', '');
                    const itemsToHighlight: HTMLElement[] = DOMHelpers.getElements(`.item-${classNumber}`);
                    itemsToHighlight.forEach((itemToHighlight) => {
                        itemToHighlight.classList.add('highlighted');
                    });
                }
            });
        });

        item.addEventListener('mouseout', () => {
            item.classList.forEach((className) => {
                if (className.startsWith('item-')) {
                    const classNumber: string = className.replace('item-', '');
                    const itemsToHighlight: HTMLElement[] = DOMHelpers.getElements(`.item-${classNumber}`);
                    itemsToHighlight.forEach((itemToHighlight) => {
                        itemToHighlight.classList.remove('highlighted');
                    });
                }
            });
        });
    });
}

export function generateElementsOnTable(): void {
    const tableArea: HTMLElement = DOMHelpers.getElement('.table-area');
    const tableTop: HTMLElement = DOMHelpers.getElement('.table-top');
    tableTop.innerHTML = '';
    const boardElementArray = levels[getCurrentLevelIndex()].boardElement;
    if (boardElementArray) {
        tableArea.style.width = `${levels[getCurrentLevelIndex()].tableWidth}`;
        for (let i = 0; i < levels.length; i += 1) {
            let previousElem: HTMLElement | null = null;
            if (getCurrentLevelIndex() === Number(levels[i].levelIndicator.split(' ')[1]) - 1) {
                boardElementArray.type.forEach((elem, index) => {
                    const createElem = DOMHelpers.createElement(`${elem.split('-')[0]}`, [
                        `${boardElementArray.class[index]}`,
                        'item',
                    ]);
                    if (elem.split('-')[1] === 'target') {
                        createElem.classList.add(`${elem.split('-')[1]}`, `${elem.split('-')[2]}`);
                    }
                    if (elem.split('-')[1] === 'fancy') {
                        createElem.classList.add('fancy');
                    }

                    if (elem.split('-')[2] === 'nested') {
                        if (previousElem) {
                            previousElem.appendChild(createElem);
                        }
                    } else {
                        tableTop.appendChild(createElem);
                    }
                    previousElem = createElem;
                });
            }
        }
    }
    highlightElementsWithSameClass();
}

export function appendLevelMarkup(): void {
    const container = DOMHelpers.getElement('.view_level-markup');
    container.innerHTML = '';
    const arrayMarkup: string[] = levels[getCurrentLevelIndex()].boardMarkup.split(',');
    let previousElement: HTMLElement | null = null;

    for (let index = 0; index < arrayMarkup.length; index += 1) {
        const item = arrayMarkup[index];
        const div = DOMHelpers.createElement('div', [`item-${index}`, 'item'], `${item}`);
        container.appendChild(div);
        if (item.includes('/') && !item.includes(' /') && previousElement) {
            previousElement.className += ` item-nested-${index}`;
            container.childNodes.forEach((childNode) => {
                if (childNode.textContent === item) {
                    const element = childNode as HTMLElement;
                    element.className = '';
                    element.classList.add(`item-${index - 2}`, 'item');
                }
            });
        }
        previousElement = div;
    }
    container.childNodes.forEach((childNode: ChildNode) => {
        if (childNode instanceof HTMLElement && childNode.classList.length > 3) {
            const fourthClass: string = childNode.classList.item(3) as string;
            childNode.classList.remove(fourthClass);
        }
    });
}

export function updateLevelData(): void {
    const globalHeader = DOMHelpers.getElement('.global-header');
    DOMHelpers.getElement('.nav__level-number').innerText = `${levels[getCurrentLevelIndex()].levelIndicator} of ${
        levels.length
    }`;
    DOMHelpers.getElement('.level-information__selector-type').innerText = levels[getCurrentLevelIndex()].selectorType;
    DOMHelpers.getElement('.level-information__selector-title').innerText =
        levels[getCurrentLevelIndex()].selectorTitle;
    DOMHelpers.getElement('.level-information__selector-syntax').innerText =
        levels[getCurrentLevelIndex()].selectorSyntax;
    DOMHelpers.getElement('.level-information__selector-hint').innerHTML = levels[getCurrentLevelIndex()].hint;
    DOMHelpers.getElement('.level-information__example-title').innerText = levels[getCurrentLevelIndex()].example.title;
    DOMHelpers.getElement('.level-information__example-case').innerHTML = levels[getCurrentLevelIndex()].example.case1;
    DOMHelpers.getElement('.level-information__example-case-2').innerHTML =
        levels[getCurrentLevelIndex()].example.case2;
    globalHeader.innerText = levels[getCurrentLevelIndex()].doThis;
    updateLevelProgressBar();
    highlightSelectedLevelInMenu();
}

export function userIncorrectSelector(): void {
    const editor: HTMLElement = DOMHelpers.getElement('.editor');
    editor.classList.add('editor--blocked');
    setTimeout(() => {
        editor.classList.remove('editor--blocked');
    }, 300);
}

export function userCorrectSelector(): void {
    const targets: HTMLElement[] = DOMHelpers.getElements('.target');
    targets.forEach((element) => {
        element.classList.add('correct-answer');
    });
}

export function syncLevelStatusCheckmark(): void {
    if (GAME_LEVELS[getCurrentLevelIndex()].status && !GAME_LEVELS[getCurrentLevelIndex()].isHintUsed) {
        DOMHelpers.getElement('.nav__checkmark').style.borderColor = '#35ff00';
    }

    if (GAME_LEVELS[getCurrentLevelIndex()].status && GAME_LEVELS[getCurrentLevelIndex()].isHintUsed) {
        DOMHelpers.getElement('.nav__checkmark').style.borderColor = '#faf102';
    }

    if (!GAME_LEVELS[getCurrentLevelIndex()].status && !GAME_LEVELS[getCurrentLevelIndex()].isHintUsed) {
        DOMHelpers.getElement('.nav__checkmark').style.borderColor = '#fff';
    }
}

export function setLevelStatus(): void {
    GAME_LEVELS.forEach((level) => {
        if (level.status && level.isHintUsed) {
            DOMHelpers.getElement(`.${level.levelIndicator.replace(' ', '-').toLowerCase()}`).classList.add(
                'level-passed-hint'
            );
            syncLevelStatusCheckmark();
        }
        if (level.status && !level.isHintUsed) {
            DOMHelpers.getElement(`.${level.levelIndicator.replace(' ', '-').toLowerCase()}`).classList.add(
                'level-passed'
            );
            syncLevelStatusCheckmark();
        }
    });
}
