import {
    appendLevelMarkup,
    generateElementsOnTable,
    getCurrentLevelIndex,
    setCurrentLevelIndex,
    setLevelStatus,
    updateLevelData,
} from './LevelHelpers';
import GAME_LEVELS from '../app/AppLevels';

export function setLocalStorageCurrentLevel(): void {
    localStorage.setItem('current-level', `${getCurrentLevelIndex()}`);
}

export function setLocalStorageLevelStatuses(): void {
    const levelProgressObject = {
        status: [] as boolean[],
        isHint: [] as boolean[],
    };
    GAME_LEVELS.forEach((item) => {
        levelProgressObject.status.push(item.status);
        levelProgressObject.isHint.push(item.isHintUsed);
    });
    localStorage.setItem('levelProgressObject', JSON.stringify(levelProgressObject));
}

export function getLocalStorageLevelStatuses(): void {
    const levelProgressString = localStorage.getItem('levelProgressObject');
    if (levelProgressString) {
        const levelProgressObject = JSON.parse(levelProgressString);

        GAME_LEVELS.forEach((item, index) => {
            const itemCopy = item;
            itemCopy.status = levelProgressObject.status[index];
            itemCopy.isHintUsed = levelProgressObject.isHint[index];
        });
    }
}

export function synchronizeWithLocalStorage(): void {
    setCurrentLevelIndex(Number(`${localStorage.getItem('current-level')}`));
    getLocalStorageLevelStatuses();
    setLevelStatus();
    updateLevelData();
    appendLevelMarkup();
    generateElementsOnTable();
}
