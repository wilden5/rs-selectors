import Layout from '../level/Layout';
import gameLevels from '../level/Data';

class App {
    private levelLayout: Layout;

    constructor() {
        this.levelLayout = new Layout(gameLevels);
    }

    public start(): void {
        this.levelLayout.buildLayout();
        this.levelLayout.populateLevelData();
    }
}

export default App;
