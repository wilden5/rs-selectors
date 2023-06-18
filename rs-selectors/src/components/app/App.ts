import LevelLayout from '../level-selector/Layout';
import CodeEditorLayout from '../code-editor/CodeEditorLayout';
import GAME_LEVELS from '../level-selector/LevelSelectorData';

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
