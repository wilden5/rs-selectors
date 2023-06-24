import LevelSelectorLayout from '../level-selector/LevelSelectorLayout';
import CodeEditorLayout from '../code-editor/CodeEditorLayout';
import GAME_LEVELS from './AppLevels';
import ModalWindowLayout from '../code-editor/modal-window/ModalWindowLayout';

class App {
    private codeEditorLayout: CodeEditorLayout;

    private levelSelectorLayout: LevelSelectorLayout;

    private modalWindowLayout: ModalWindowLayout;

    constructor() {
        this.codeEditorLayout = new CodeEditorLayout();
        this.levelSelectorLayout = new LevelSelectorLayout(GAME_LEVELS);
        this.modalWindowLayout = new ModalWindowLayout();
    }

    public start(): void {
        this.codeEditorLayout.init();
        this.levelSelectorLayout.init();
        this.modalWindowLayout.init();
    }
}

export default App;
