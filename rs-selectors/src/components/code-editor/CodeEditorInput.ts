import DOMHelpers from '../utils/DOMHelpers';
import GAME_LEVELS from '../app/AppLevels';
import { getCurrentLevelIndex } from '../utils/GlobalVariables';

class CodeEditorInput {
    public getInputValue(): string {
        const value: string = (DOMHelpers.getElement('.input__user-input') as HTMLInputElement).value.trim();
        console.log(value);
        return value;
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
            console.log('es');
        } else {
            console.log('no');
        }
    }
}

export default CodeEditorInput;
