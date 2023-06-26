import LevelSelectorLayout from '../level-selector/LevelSelectorLayout';
import CodeEditorLayout from '../code-editor/CodeEditorLayout';
import GAME_LEVELS from './AppLevels';
import ModalWindowLayout from '../code-editor/modal-window/ModalWindowLayout';
import GameLayout from '../code-editor/game/GameLayout';
import FooterLayout from '../footer/FooterLayout';
import { ProjectModule } from '../../types/Interfaces';

class App {
    private PROJECT_MODULES: ProjectModule[];

    private readonly CODE_EDITOR: CodeEditorLayout;

    private readonly LEVEL_SELECTOR: LevelSelectorLayout;

    private readonly MODAL_WINDOW: ModalWindowLayout;

    private readonly GAME: GameLayout;

    private readonly FOOTER: FooterLayout;

    constructor() {
        this.CODE_EDITOR = new CodeEditorLayout();
        this.LEVEL_SELECTOR = new LevelSelectorLayout(GAME_LEVELS);
        this.MODAL_WINDOW = new ModalWindowLayout();
        this.GAME = new GameLayout();
        this.FOOTER = new FooterLayout();

        this.PROJECT_MODULES = [this.CODE_EDITOR, this.LEVEL_SELECTOR, this.MODAL_WINDOW, this.GAME, this.FOOTER];
    }

    public start(): void {
        this.PROJECT_MODULES.forEach((module) => {
            module.init();
        });
    }
}

export default App;
