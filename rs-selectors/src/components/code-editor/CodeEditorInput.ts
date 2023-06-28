import DOMHelpers from '../utils/DOMHelpers';
import GAME_LEVELS from '../app/AppLevels';
import { getCurrentLevelIndex } from '../utils/GlobalVariables';

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
            GAME_LEVELS[getCurrentLevelIndex()].status = true; // for localStorage
            this.setLevelStatus();
            (DOMHelpers.getElement('.input__user-input') as HTMLInputElement).value = '';
            console.log('es');
        } else {
            console.log('no');
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
