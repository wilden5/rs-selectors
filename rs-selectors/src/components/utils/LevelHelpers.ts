import DOMHelpers from './DOMHelpers';
import GAME_LEVELS from '../app/AppLevels';
import { barProgressStateMap } from '../../types/Types';

let currentLevelIndex = 0;

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

export function updateLevelData(): void {
    const globalHeader = DOMHelpers.getElement('.global-header');
    DOMHelpers.getElement('.nav__level-number').innerText = `${GAME_LEVELS[getCurrentLevelIndex()].levelIndicator} of ${
        GAME_LEVELS.length
    }`;
    DOMHelpers.getElement('.level-information__selector-type').innerText =
        GAME_LEVELS[getCurrentLevelIndex()].selectorType;
    DOMHelpers.getElement('.level-information__selector-title').innerText =
        GAME_LEVELS[getCurrentLevelIndex()].selectorTitle;
    DOMHelpers.getElement('.level-information__selector-syntax').innerText =
        GAME_LEVELS[getCurrentLevelIndex()].selectorSyntax;
    DOMHelpers.getElement('.level-information__selector-hint').innerHTML = GAME_LEVELS[getCurrentLevelIndex()].hint;
    DOMHelpers.getElement('.level-information__example-title').innerText =
        GAME_LEVELS[getCurrentLevelIndex()].example.title;
    DOMHelpers.getElement('.level-information__example-case').innerHTML =
        GAME_LEVELS[getCurrentLevelIndex()].example.case1;
    DOMHelpers.getElement('.level-information__example-case-2').innerHTML =
        GAME_LEVELS[getCurrentLevelIndex()].example.case2;
    globalHeader.innerText = GAME_LEVELS[getCurrentLevelIndex()].doThis;
    updateLevelProgressBar();
    highlightSelectedLevelInMenu();
}
