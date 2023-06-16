import LevelLayout from '../level/Layout';
import CodeLayout from '../code/Layout';
import gameLevels from '../level/Data';

class App {
    private codeLayout: CodeLayout;

    private levelLayout: LevelLayout;

    constructor() {
        this.codeLayout = new CodeLayout();
        this.levelLayout = new LevelLayout(gameLevels);
    }

    public start(): void {
        this.codeLayout.init();
        this.levelLayout.init();
    }
}

export default App;
