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
            console.log('es');
            (DOMHelpers.getElement('.input__user-input') as HTMLInputElement).value = '';
        } else {
            console.log('no');
        }
    }
}

export default CodeEditorInput;
