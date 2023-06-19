import LevelSelectorLayout from '../level-selector/LevelSelectorLayout';
import CodeEditorLayout from '../code-editor/CodeEditorLayout';
import GAME_LEVELS from './AppLevels';

class App {
    private codeEditorLayout: CodeEditorLayout;

    private levelSelectorLayout: LevelSelectorLayout;

    constructor() {
        this.codeEditorLayout = new CodeEditorLayout();
        this.levelSelectorLayout = new LevelSelectorLayout(GAME_LEVELS);
    }

    public start(): void {
        this.codeEditorLayout.init();
        this.levelSelectorLayout.init();
    }
}

export default App;
