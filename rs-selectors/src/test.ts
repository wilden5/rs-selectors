import CodeEditorInput from './components/code-editor/CodeEditorInput';
import DOMHelpers from './components/utils/DOMHelpers';
import { userCorrectSelector, userIncorrectSelector } from './components/utils/LevelHelpers';

describe('CodeEditorInput', () => {
    let codeEditorInput: CodeEditorInput;
    let mockUserInputElement: HTMLInputElement;

    beforeEach(() => {
        codeEditorInput = new CodeEditorInput();
        mockUserInputElement = DOMHelpers.createElement('input', ['test-input']) as HTMLInputElement;
    });

    it('should return the correct user input', () => {
        mockUserInputElement.value = 'plate ~ bento';
        jest.spyOn(DOMHelpers, 'getElement').mockReturnValue(mockUserInputElement);

        const result = codeEditorInput.getInputValue();

        expect(result).toBe('plate ~ bento');
    });

    it('should return the trimmed value of the user input', () => {
        mockUserInputElement.value = '   test 123   ';
        jest.spyOn(DOMHelpers, 'getElement').mockReturnValue(mockUserInputElement);

        const result = codeEditorInput.getInputValue();

        expect(result).toBe('test 123');
    });

    it('should return an empty string if user input is empty', () => {
        mockUserInputElement.value = '';
        jest.spyOn(DOMHelpers, 'getElement').mockReturnValue(mockUserInputElement);

        const result = codeEditorInput.getInputValue();

        expect(result).toBe('');
    });

    it('should return the trimmed value of the user input with multiple spaces between words', () => {
        mockUserInputElement.value = 'multiple   spaces   between   words';
        jest.spyOn(DOMHelpers, 'getElement').mockReturnValue(mockUserInputElement);

        const result = codeEditorInput.getInputValue();

        expect(result).toBe('multiple spaces between words');
    });
});

describe('userCorrectSelector', () => {
    beforeEach(() => {
        const mockElements = [
            DOMHelpers.createElement('div', ['target']),
            DOMHelpers.createElement('div', ['target']),
            DOMHelpers.createElement('div', ['target']),
        ];
        jest.spyOn(DOMHelpers, 'getElements').mockReturnValue(mockElements);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should add "correct-answer" class to all elements with "target" class', () => {
        userCorrectSelector();

        const targets = DOMHelpers.getElements('.target');
        targets.forEach((element) => {
            expect(element.classList.contains('correct-answer')).toBe(true);
        });
    });
});

describe('userIncorrectSelector', () => {
    beforeEach(() => {
        const mockElement = DOMHelpers.createElement('div', ['editor']);
        jest.spyOn(DOMHelpers, 'getElement').mockReturnValue(mockElement);
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.restoreAllMocks();
        jest.clearAllTimers();
    });

    it('should add "editor--blocked" class and remove it after 300ms', () => {
        userIncorrectSelector();

        const editor = DOMHelpers.getElement('.editor');
        expect(editor.classList.contains('editor--blocked')).toBe(true);

        jest.runAllTimers();

        expect(editor.classList.contains('editor--blocked')).toBe(false);
    });
});
