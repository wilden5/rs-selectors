import LevelLayout from '../level-selector/LevelSelectorLayout';
import CodeEditorLayout from '../code-editor/CodeEditorLayout';
import GAME_LEVELS from './AppLevels';

class App {
    private codeEditorLayout: CodeEditorLayout;

    private levelLayout: LevelLayout;

    constructor() {
        this.codeEditorLayout = new CodeEditorLayout();
        this.levelLayout = new LevelLayout(GAME_LEVELS);
    }

    public start(): void {
        this.codeEditorLayout.init();
        this.levelLayout.init();
    }
}

export default App;
