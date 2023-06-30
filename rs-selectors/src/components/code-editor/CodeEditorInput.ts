import DOMHelpers from '../utils/DOMHelpers';
import GAME_LEVELS from '../app/AppLevels';
import {
    getCurrentLevelIndex,
    updateLevelData,
    setCurrentLevelIndex,
    generateElementsOnTable,
    userIncorrectSelector,
    userCorrectSelector,
} from '../utils/LevelHelpers';

class CodeEditorInput {
    public getInputValue(): string {
        return (DOMHelpers.getElement('.input__user-input') as HTMLInputElement).value.trim();
    }

    public handleEnterButtonPress = (event: KeyboardEvent): void => {
        const enterButton: HTMLElement = DOMHelpers.getElement('.input__enter-button');
        if (event.key === 'Enter') {
            enterButton.classList.add('active');
            this.checkUserAnswer(this.getInputValue());
            setTimeout(() => {
                enterButton.classList.remove('active');
            }, 300);
        }
    };

    public checkUserAnswer(value: string): void {
        if (value === GAME_LEVELS[getCurrentLevelIndex()].correctAnswer) {
            userCorrectSelector();
            setTimeout(() => {
                GAME_LEVELS[getCurrentLevelIndex()].status = true; // for localStorage
                (DOMHelpers.getElement('.input__user-input') as HTMLInputElement).value = '';
                setCurrentLevelIndex(getCurrentLevelIndex() + 1);
                this.setLevelStatus();
                updateLevelData();
                generateElementsOnTable();
            }, 500);
        } else {
            userIncorrectSelector();
        }
    }

    public setLevelStatus(): void {
        GAME_LEVELS.forEach((level) => {
            if (level.status && level.isHintUsed) {
                DOMHelpers.getElement(`.${level.levelIndicator.replace(' ', '-').toLowerCase()}`).classList.add(
                    'level-passed-hint'
                );
                this.syncLevelStatusCheckmark();
            }
            if (level.status && !level.isHintUsed) {
                DOMHelpers.getElement(`.${level.levelIndicator.replace(' ', '-').toLowerCase()}`).classList.add(
                    'level-passed'
                );
                this.syncLevelStatusCheckmark();
            }
        });
    }

    public syncLevelStatusCheckmark(): void {
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
}

export default CodeEditorInput;
