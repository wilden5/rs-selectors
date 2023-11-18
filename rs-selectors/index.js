/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"> <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"> <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"> <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin> <link href=\"https://fonts.googleapis.com/css2?family=Exo+2:wght@100;300;400;500;600;800&display=swap\" rel=\"stylesheet\"> <title>Wilden's RS-Selectors</title> </head> <body> </body> </html> ";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ 344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 265:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const LevelSelectorLayout_1 = __importDefault(__webpack_require__(113));
const CodeEditorLayout_1 = __importDefault(__webpack_require__(184));
const AppLevels_1 = __importDefault(__webpack_require__(314));
const ModalWindowLayout_1 = __importDefault(__webpack_require__(378));
const GameLayout_1 = __importDefault(__webpack_require__(386));
const FooterLayout_1 = __importDefault(__webpack_require__(77));
const LocalStorage_1 = __webpack_require__(451);
const DOMHelpers_1 = __importDefault(__webpack_require__(255));
class App {
    constructor() {
        this.CODE_EDITOR = new CodeEditorLayout_1.default();
        this.LEVEL_SELECTOR = new LevelSelectorLayout_1.default(AppLevels_1.default);
        this.MODAL_WINDOW = new ModalWindowLayout_1.default();
        this.GAME = new GameLayout_1.default();
        this.FOOTER = new FooterLayout_1.default();
        this.PROJECT_COMPONENTS = [this.CODE_EDITOR, this.LEVEL_SELECTOR, this.MODAL_WINDOW, this.GAME, this.FOOTER];
    }
    start() {
        DOMHelpers_1.default.appendChildToElement(DOMHelpers_1.default.getElement('body'), DOMHelpers_1.default.createElement('div', ['wrapper']));
        this.PROJECT_COMPONENTS.forEach((module) => {
            module.init();
        });
        if (localStorage.length > 0) {
            (0, LocalStorage_1.synchronizeWithLocalStorage)();
        }
    }
}
exports["default"] = App;


/***/ }),

/***/ 314:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const GAME_LEVELS = [
    {
        doThis: 'Select the plates',
        levelIndicator: 'Level 1',
        selectorType: 'Type Selector',
        selectorTitle: 'Select elements by their type',
        selectorSyntax: 'A',
        hint: 'Selects all elements of type <strong>A</strong>.' +
            'Type refers to the type of tag, so <strong>&lt;div&gt;</strong>, <strong>&lt;p&gt;</strong> and <strong>&lt;ul&gt;</strong> are all different element types.',
        example: {
            title: 'Examples',
            case1: '<strong>div</strong> selects all <strong>&lt;div&gt;</strong> elements.',
            case2: '<strong>p</strong> selects all <strong>&lt;p&gt;</strong> elements.',
        },
        boardMarkup: '<plate />,<plate />',
        correctAnswer: 'plate',
        status: false,
        isHintUsed: false,
        boardElement: {
            type: ['plate-target', 'plate-target'],
            class: ['item-0', 'item-1'],
        },
        tableWidth: '40rem',
    },
    {
        doThis: 'Select the fancy plate',
        levelIndicator: 'Level 2',
        selectorType: 'ID Selector',
        selectorTitle: 'Select elements with an ID',
        selectorSyntax: '#id',
        hint: 'Selects the element with a specific <strong>id</strong>. ' +
            'You can also combine the ID selector with the type selector.',
        example: {
            title: 'Examples',
            case1: '<strong>#cool</strong> selects any element with <strong>id="cool"</strong>',
            case2: '<strong>ul#long</strong> selects <strong>&lt;ul id="long"&gt;</strong>',
        },
        boardMarkup: '<plate id="fancy" />,<plate />,<bento />',
        correctAnswer: '#fancy',
        status: false,
        isHintUsed: false,
        boardElement: {
            type: ['plate-target-fancy', 'plate', 'bento'],
            class: ['item-0', 'item-1', 'item-2'],
        },
        tableWidth: '40rem',
    },
    {
        doThis: 'Select the apple on the plate',
        levelIndicator: 'Level 3',
        selectorType: 'Descendant Selector',
        selectorTitle: 'Select an element inside another element',
        selectorSyntax: 'A B',
        hint: 'Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called ' +
            'a descendant because it is inside of another element.',
        example: {
            title: 'Examples',
            case1: '<strong>p strong</strong> selects all <strong>&lt;strong&gt;</strong> elements that ' +
                'are inside of any <strong>&lt;p&gt;</strong>',
            case2: '<strong>#fancy span</strong> selects any <strong>&lt;span&gt;</strong> elements ' +
                'that are inside of the element with <strong>id="fancy"</strong>',
        },
        boardMarkup: '<bento />,<apple />,<plate>,<apple />,</plate>',
        correctAnswer: 'plate apple',
        status: false,
        isHintUsed: false,
        boardElement: {
            type: ['bento', 'apple', 'plate', 'apple-target-nested'],
            class: ['item-0', 'item-1', 'item-2', 'item-3'],
        },
        tableWidth: '40rem',
    },
    {
        doThis: 'Select the small apples',
        levelIndicator: 'Level 4',
        selectorType: 'Class Selector',
        selectorTitle: 'Select elements by their class',
        selectorSyntax: '.classname',
        hint: 'The class selector selects all elements with that class attribute. ' +
            'Elements can only have one ID, but many classes.',
        example: {
            title: 'Examples',
            case1: '<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>',
            case2: '',
        },
        boardMarkup: '<apple />,<apple class="small" />,<plate />,<plate>,<apple class="small" />,</plate>',
        correctAnswer: '.small',
        status: false,
        isHintUsed: false,
        boardElement: {
            type: ['apple', 'applesmall-target', 'plate', 'plate', 'applesmall-target-nested'],
            class: ['item-0', 'item-1', 'item-2', 'item-3', 'item-4'],
        },
        tableWidth: '40rem',
    },
    {
        doThis: 'Select the bento boxes',
        levelIndicator: 'Level 5',
        selectorType: 'Type Selector',
        selectorTitle: 'Select elements by their type',
        selectorSyntax: 'A',
        hint: 'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, ' +
            'so <strong>&lt;div&gt;</strong>, <strong>&lt;p&gt;</strong> and <strong>&lt;ul&gt;</strong> are all different element types.',
        example: {
            title: 'Examples',
            case1: '<strong>div</strong> selects all <strong>&lt;div&gt;</strong> elements.',
            case2: '<strong>p</strong> selects all <strong>&lt;p&gt;</strong> elements.',
        },
        boardMarkup: '<bento />,<plate />,<bento />',
        correctAnswer: 'bento',
        status: false,
        isHintUsed: false,
        boardElement: {
            type: ['bento-target', 'plate', 'bento-target'],
            class: ['item-0', 'item-1', 'item-2'],
        },
        tableWidth: '40rem',
    },
    {
        doThis: 'Select all the things!',
        levelIndicator: 'Level 6',
        selectorType: 'The Universal Selector',
        selectorTitle: 'You can select everything!',
        selectorSyntax: '*',
        hint: 'You can select all elements with the universal selector!',
        example: {
            title: 'Examples',
            case1: '<strong>p *</strong> selects any element inside all <strong>&lt;p&gt;</strong> elements.',
            case2: '',
        },
        boardMarkup: '<apple />,<plate />,<bento />,<plate id="fancy">,<orange class="small" />,</plate>',
        correctAnswer: '*',
        status: false,
        isHintUsed: false,
        boardElement: {
            type: ['apple-target', 'plate-target', 'bento-target', 'plate-target-fancy', 'orangesmall-target-nested'],
            class: ['item-0', 'item-1', 'item-2', 'item-3', 'item-4'],
        },
        tableWidth: '47rem',
    },
    {
        doThis: 'Select the pickles beside the bento',
        levelIndicator: 'Level 7',
        selectorType: 'General Sibling Selector',
        selectorTitle: 'Select elements that follows another element',
        selectorSyntax: 'A ~ B',
        hint: 'You can select all siblings of an element that follow it. ' +
            'This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.',
        example: {
            title: 'Examples',
            case1: '<strong>A ~ B</strong> selects all <strong>B</strong> that follow a <strong>A</strong>',
            case2: '',
        },
        boardMarkup: '<pickle />,<bento />,<pickle class="small" />,<pickle />,<plate>,<pickle class="small" />,</plate>',
        correctAnswer: 'bento ~ pickle',
        status: false,
        isHintUsed: false,
        boardElement: {
            type: ['pickle', 'bento', 'picklesmall-target', 'pickle-target', 'plate', 'pickle-a-nested'],
            class: ['item-0', 'item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
        },
        tableWidth: '40rem',
    },
    {
        doThis: 'Select the 3rd plate',
        levelIndicator: 'Level 8',
        selectorType: 'Nth Child Pseudo-selector',
        selectorTitle: 'Select an element by its order in another element',
        selectorSyntax: ':nth-child(A)',
        hint: 'Selects the <strong>nth</strong> (Ex: 1st, 3rd, 12th etc.) child element in another element.',
        example: {
            title: 'Examples',
            case1: '<strong>:nth-child(8)</strong> selects every element that is the 8th child of another element.',
            case2: '<strong>div p:nth-child(2)</strong> selects the second <strong>p</strong> ' +
                'in every <strong>div</strong>',
        },
        boardMarkup: '<plate />,<plate />,<plate />,<plate id="fancy" />',
        correctAnswer: 'plate:nth-child(3)',
        status: false,
        isHintUsed: false,
        boardElement: {
            type: ['plate', 'plate', 'plate-target', 'plate-fancy'],
            class: ['item-0', 'item-1', 'item-2', 'item-3'],
        },
        tableWidth: '50rem',
    },
    {
        doThis: 'Select the last apple and orange',
        levelIndicator: 'Level 9',
        selectorType: 'Last of Type Selector',
        selectorTitle: 'Select the last element of a specific type',
        selectorSyntax: ':last-of-type',
        hint: 'Selects each last element of that type within another element. Remember type refers the kind of tag, so <strong&lt;>p&gt;</strong> and <strong>&lt;span&gt;</strong> are different types.' +
            'I wonder if this is how the last dinosaur was selected before it went extinct.',
        example: {
            title: 'Examples',
            case1: '<strong>div:last-of-type</strong> selects the last <strong>&lt;div&gt;</strong> in every element.',
            case2: '<strong>p span:last-of-type</strong> selects the last <strong>&lt;span&gt;</strong> ' +
                'in every <strong>&lt;p&gt;</strong>.',
        },
        boardMarkup: '<orange class="small" />,<orange class="small" />,<pickle />,<pickle />,<apple class="small" />,<apple class="small" />',
        correctAnswer: '.small:last-of-type',
        status: false,
        isHintUsed: false,
        boardElement: {
            type: ['orangesmall', 'orangesmall-target', 'pickle', 'pickle', 'applesmall', 'applesmall-target'],
            class: ['item-0', 'item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
        },
        tableWidth: '35rem',
    },
    {
        doThis: 'Select the empty bentos',
        levelIndicator: 'Level 10',
        selectorType: 'Empty Selector',
        selectorTitle: "Select elements that don't have children",
        selectorSyntax: ':empty',
        hint: "Selects elements that don't have any other elements inside of them.",
        example: {
            title: 'Examples',
            case1: '<strong>div:empty</strong> selects all empty <strong>&lt;div&gt;</strong> elements.',
            case2: '',
        },
        boardMarkup: '<bento />,<plate />,<bento />,<bento>,<pickle class="small" />,</bento>',
        correctAnswer: 'bento:empty',
        status: false,
        isHintUsed: false,
        boardElement: {
            type: ['bento-target', 'plate', 'bento-target', 'bento', 'pickle-a-nested'],
            class: ['item-0', 'item-1', 'item-2', 'item-3', 'item-4'],
        },
        tableWidth: '52rem',
    },
];
exports["default"] = GAME_LEVELS;


/***/ }),

/***/ 827:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Singleton_1 = __importDefault(__webpack_require__(52));
const DOMHelpers_1 = __importDefault(__webpack_require__(255));
class CodeEditorElements {
    constructor() {
        this.codeEditorContainer = DOMHelpers_1.default.createElement('div', ['code-editor-container']);
        this.header = DOMHelpers_1.default.createElement('div', ['header']);
        this.headerTitle = DOMHelpers_1.default.createElement('div', ['header__title'], "Wilden's CSS Diner");
        this.socials = DOMHelpers_1.default.createElement('div', ['header__socials'], 'Share');
        this.emailLink = DOMHelpers_1.default.createElement('a', ['socials__email']);
        this.facebookLink = DOMHelpers_1.default.createElement('a', ['socials__facebook']);
        this.twitterLink = DOMHelpers_1.default.createElement('a', ['socials__twitter']);
        this.editor = DOMHelpers_1.default.createElement('div', ['editor']);
        this.editorHtmlView = DOMHelpers_1.default.createElement('div', ['editor__table', 'editor__view']);
        this.editorInput = DOMHelpers_1.default.createElement('div', ['editor__table', 'editor__input']);
        this.htmlViewHeader = DOMHelpers_1.default.createElement('div', ['table__input-header'], 'HTML Viewer');
        this.htmlFileName = DOMHelpers_1.default.createElement('div', ['view__file-name'], 'table.html');
        this.htmlFileWindow = DOMHelpers_1.default.createElement('div', ['view__file-window']);
        this.htmlLineNumbers = DOMHelpers_1.default.createElement('div', ['table__line-numbers']);
        this.htmlLineMarkup = DOMHelpers_1.default.createElement('div', ['view__markup']);
        this.markupCodeWrapper = DOMHelpers_1.default.createElement('div', ['view__markup-code-wrapper'], '<div class="table">');
        this.editorHeader = DOMHelpers_1.default.createElement('div', ['input__header'], 'CSS Editor');
        this.editorFileName = DOMHelpers_1.default.createElement('div', ['input__file-name'], 'style.css');
        this.inputFileWindow = DOMHelpers_1.default.createElement('div', ['input__file-window']);
        this.inputLineNumbers = DOMHelpers_1.default.createElement('div', ['input__line-numbers']);
        this.userInputField = DOMHelpers_1.default.createElement('input', ['input__user-input']);
        this.userInputHint = DOMHelpers_1.default.createElement('div', ['input__hint']);
        this.inputMarkup = DOMHelpers_1.default.createElement('div', ['input__markup']);
        this.userInputSkipLevel = DOMHelpers_1.default.createElement('div', ['input__skipLevel']);
        this.enterButton = DOMHelpers_1.default.createElement('div', ['input__enter-button'], 'enter');
        this.levelMarkup = DOMHelpers_1.default.createElement('pre', ['view_level-markup']);
        this.globalHeader = DOMHelpers_1.default.createElement('h2', ['global-header']);
        this.modalButton = DOMHelpers_1.default.createElement('button', ['modal-button'], "Help, I'm stuck!");
        this.helpSelectorButton = DOMHelpers_1.default.createElement('div', ['input__help-button'], 'help');
        this.userInputWrapper = DOMHelpers_1.default.createElement('div', ['user-input-wrapper']);
        this.codeEditorOverlay = DOMHelpers_1.default.createElement('div', ['overlay']);
    }
    static getInstance() {
        return Singleton_1.default.getInstance(CodeEditorElements);
    }
}
exports["default"] = CodeEditorElements;


/***/ }),

/***/ 621:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const DOMHelpers_1 = __importDefault(__webpack_require__(255));
const AppLevels_1 = __importDefault(__webpack_require__(314));
const LevelHelpers_1 = __webpack_require__(283);
const LocalStorage_1 = __webpack_require__(451);
class CodeEditorInput {
    constructor() {
        this.handleEnterButtonPress = (event) => {
            const enterButton = DOMHelpers_1.default.getElement('.input__enter-button');
            if (event.key === 'Enter') {
                enterButton.classList.add('active');
                this.checkUserAnswer(this.getInputValue());
                setTimeout(() => {
                    enterButton.classList.remove('active');
                }, 300);
            }
        };
    }
    getInputValue() {
        return DOMHelpers_1.default.getElement('.input__user-input').value.replace(/\s+/g, ' ').trim();
    }
    checkUserAnswer(value) {
        if (value === AppLevels_1.default[(0, LevelHelpers_1.getCurrentLevelIndex)()].correctAnswer) {
            (0, LevelHelpers_1.userCorrectSelector)();
            const userInput = DOMHelpers_1.default.getElement('.input__user-input');
            userInput.classList.remove('input-animation');
            userInput.disabled = false;
            setTimeout(() => {
                AppLevels_1.default[(0, LevelHelpers_1.getCurrentLevelIndex)()].status = true; // for localStorage
                DOMHelpers_1.default.getElement('.input__user-input').value = '';
                if ((0, LevelHelpers_1.getCurrentLevelIndex)() === AppLevels_1.default.length - 1) {
                    // eslint-disable-next-line no-alert
                    alert('GG BRO YOU DID IT!');
                }
                else {
                    (0, LevelHelpers_1.setCurrentLevelIndex)((0, LevelHelpers_1.getCurrentLevelIndex)() + 1);
                    (0, LocalStorage_1.setLocalStorageCurrentLevel)();
                }
                (0, LocalStorage_1.setLocalStorageLevelStatuses)();
                (0, LevelHelpers_1.setLevelStatus)();
                (0, LevelHelpers_1.updateLevelData)();
                (0, LevelHelpers_1.appendLevelMarkup)();
                (0, LevelHelpers_1.generateElementsOnTable)();
            }, 500);
        }
        else {
            (0, LevelHelpers_1.userIncorrectSelector)();
        }
    }
}
exports["default"] = CodeEditorInput;


/***/ }),

/***/ 184:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const CodeEditorElements_1 = __importDefault(__webpack_require__(827));
const DOMHelpers_1 = __importDefault(__webpack_require__(255));
const CodeEditorInput_1 = __importDefault(__webpack_require__(621));
const AppLevels_1 = __importDefault(__webpack_require__(314));
const LevelHelpers_1 = __webpack_require__(283);
class CodeEditorLayout {
    constructor() {
        this.codeEditorElements = new CodeEditorElements_1.default();
        this.codeEditorInput = new CodeEditorInput_1.default();
    }
    appendCodeEditorElements() {
        DOMHelpers_1.default.appendChildToElement(DOMHelpers_1.default.getElement('.wrapper'), this.codeEditorElements.codeEditorContainer);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.codeEditorContainer, this.codeEditorElements.header);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.codeEditorContainer, this.codeEditorElements.globalHeader);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.codeEditorContainer, this.codeEditorElements.modalButton);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.codeEditorContainer, this.codeEditorElements.codeEditorOverlay);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.codeEditorContainer, this.codeEditorElements.editor);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.header, this.codeEditorElements.headerTitle);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.header, this.codeEditorElements.socials);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.socials, this.codeEditorElements.emailLink);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.socials, this.codeEditorElements.facebookLink);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.socials, this.codeEditorElements.twitterLink);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.editor, this.codeEditorElements.editorInput);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.editor, this.codeEditorElements.editorHtmlView);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.editorHtmlView, this.codeEditorElements.htmlViewHeader);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.htmlViewHeader, this.codeEditorElements.htmlFileName);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.editorHtmlView, this.codeEditorElements.htmlFileWindow);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.htmlFileWindow, this.codeEditorElements.htmlLineNumbers);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.htmlFileWindow, this.codeEditorElements.htmlLineMarkup);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.htmlLineMarkup, this.codeEditorElements.markupCodeWrapper);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.htmlLineMarkup, this.codeEditorElements.levelMarkup);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.editorInput, this.codeEditorElements.editorHeader);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.editorHeader, this.codeEditorElements.editorFileName);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.editorInput, this.codeEditorElements.inputFileWindow);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.inputFileWindow, this.codeEditorElements.inputLineNumbers);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.inputFileWindow, this.codeEditorElements.inputMarkup);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.inputMarkup, this.codeEditorElements.userInputWrapper);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.userInputWrapper, this.codeEditorElements.userInputField);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.inputMarkup, this.codeEditorElements.enterButton);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.inputMarkup, this.codeEditorElements.helpSelectorButton);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.inputMarkup, this.codeEditorElements.userInputHint);
        DOMHelpers_1.default.appendChildToElement(this.codeEditorElements.inputMarkup, this.codeEditorElements.userInputSkipLevel);
    }
    appendImages() {
        DOMHelpers_1.default.appendImage(this.codeEditorElements.headerTitle, './assets/img/dish.png');
        DOMHelpers_1.default.appendImage(this.codeEditorElements.emailLink, './assets/img/email.png');
        DOMHelpers_1.default.appendImage(this.codeEditorElements.facebookLink, './assets/img/facebook.png');
        DOMHelpers_1.default.appendImage(this.codeEditorElements.twitterLink, './assets/img/twitter.png');
    }
    setUserInputProperties() {
        const userInput = DOMHelpers_1.default.getElement('.input__user-input');
        userInput.type = 'text';
        userInput.placeholder = 'Type in a CSS selector';
        this.generateInputHint();
    }
    generateLineNumbers(number, element, additionalDiv) {
        for (let i = 1; i <= number; i += 1) {
            DOMHelpers_1.default.getElement(element).innerHTML += `${i}<br>`;
        }
        if (additionalDiv) {
            DOMHelpers_1.default.getElement('.view__markup').appendChild(DOMHelpers_1.default.createElement('div', ['div'], '</div>'));
        }
    }
    generateInputHint() {
        this.codeEditorElements.userInputHint.innerHTML = '{<br>/* Styles would go here. */<br>}';
        this.codeEditorElements.userInputSkipLevel.innerHTML =
            '/* <br> Click on the HELP button to skip to a level.<br>HELP button disables input until the next level.<br>*/';
    }
    assignCodeEditorEventListeners() {
        this.codeEditorElements.modalButton.addEventListener('click', () => {
            DOMHelpers_1.default.getElement('.modal').classList.add('modal--opened');
            this.codeEditorElements.modalButton.classList.add('modal-button--hided');
        });
        this.codeEditorElements.emailLink.addEventListener('click', () => {
            window.location.href = 'mailto:your.email@example.com';
        });
        this.codeEditorElements.facebookLink.addEventListener('click', () => {
            window.open('https://www.facebook.com', '_blank');
        });
        this.codeEditorElements.twitterLink.addEventListener('click', () => {
            window.open('https://twitter.com', '_blank');
        });
        this.codeEditorElements.userInputField.addEventListener('keydown', this.codeEditorInput.handleEnterButtonPress);
        this.codeEditorElements.enterButton.addEventListener('click', () => {
            const value = this.codeEditorInput.getInputValue();
            this.codeEditorInput.checkUserAnswer(value);
        });
        this.codeEditorElements.helpSelectorButton.addEventListener('click', () => {
            this.codeEditorElements.userInputField.value =
                AppLevels_1.default[(0, LevelHelpers_1.getCurrentLevelIndex)()].correctAnswer;
            AppLevels_1.default[(0, LevelHelpers_1.getCurrentLevelIndex)()].isHintUsed = true;
            this.setUserInputState();
        });
    }
    setUserInputState(isLevelSelector) {
        if (isLevelSelector) {
            DOMHelpers_1.default.getElement('.input__user-input').classList.remove('input-animation');
            DOMHelpers_1.default.getElement('.input__user-input').disabled = false;
            DOMHelpers_1.default.getElement('.input__user-input').value = '';
        }
        if (this.codeEditorElements.userInputField.classList.contains('input-animation')) {
            this.codeEditorElements.userInputField.classList.remove('input-animation');
            this.codeEditorElements.userInputField.disabled = false;
        }
        else {
            this.codeEditorElements.userInputField.classList.add('input-animation');
            this.codeEditorElements.userInputField.disabled = true;
        }
    }
    init() {
        this.appendCodeEditorElements();
        this.appendImages();
        this.assignCodeEditorEventListeners();
        this.generateLineNumbers(20, '.table__line-numbers', true);
        this.generateLineNumbers(20, '.input__line-numbers', false);
        this.setUserInputProperties();
    }
}
exports["default"] = CodeEditorLayout;


/***/ }),

/***/ 836:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const DOMHelpers_1 = __importDefault(__webpack_require__(255));
const Singleton_1 = __importDefault(__webpack_require__(52));
class GameElements {
    constructor() {
        this.gameWrapper = DOMHelpers_1.default.createElement('div', ['game-wrapper']);
        this.tableWrapper = DOMHelpers_1.default.createElement('div', ['table-wrapper']);
        this.tableArea = DOMHelpers_1.default.createElement('div', ['table-area']);
        this.tableTop = DOMHelpers_1.default.createElement('div', ['table-top']);
    }
    static getInstance() {
        return Singleton_1.default.getInstance(GameElements);
    }
}
exports["default"] = GameElements;


/***/ }),

/***/ 386:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const GameElements_1 = __importDefault(__webpack_require__(836));
const DOMHelpers_1 = __importDefault(__webpack_require__(255));
const LevelHelpers_1 = __webpack_require__(283);
const CodeEditorLayout_1 = __importDefault(__webpack_require__(184));
class GameLayout {
    constructor() {
        this.gameElements = GameElements_1.default.getInstance();
        this.codeEditorLayout = new CodeEditorLayout_1.default();
    }
    appendGameLayoutElements() {
        DOMHelpers_1.default.appendChildToElement(DOMHelpers_1.default.getElement('.code-editor-container'), this.gameElements.gameWrapper);
        DOMHelpers_1.default.appendChildToElement(this.gameElements.gameWrapper, this.gameElements.tableWrapper);
        DOMHelpers_1.default.appendChildToElement(this.gameElements.tableWrapper, this.gameElements.tableArea);
        DOMHelpers_1.default.appendChildToElement(this.gameElements.tableArea, this.gameElements.tableTop);
    }
    init() {
        this.appendGameLayoutElements();
        (0, LevelHelpers_1.generateElementsOnTable)();
    }
}
exports["default"] = GameLayout;


/***/ }),

/***/ 630:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const modalWindowContent = {
    title: "No worries, you've got this!",
    greeting: "You're about to learn CSS Selectors! Selectors are how you pick which element to apply styles to.",
    codeTitle: 'Exhibit 1 - A CSS Rule',
    code: `p {
   margin-bottom: 12px;
}`,
    description: `Here, the "p" is the selector (selects all <p> elements) and applies the margin-bottom style. \n
To play, type in a CSS selector in the editor below to select the correct items on the table.If you get it right, you'll advance to the next level. \n
Hover over the items on the table to see their HTML markup. \n
Get help with selectors on the right! →`,
};
exports["default"] = modalWindowContent;


/***/ }),

/***/ 63:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Singleton_1 = __importDefault(__webpack_require__(52));
const DOMHelpers_1 = __importDefault(__webpack_require__(255));
class ModalWindowElements {
    constructor() {
        this.modalBody = DOMHelpers_1.default.createElement('div', ['modal']);
        this.modalTitle = DOMHelpers_1.default.createElement('h3', ['modal__title']);
        this.modalGreeting = DOMHelpers_1.default.createElement('p', ['modal__greeting']);
        this.modalCodeTitle = DOMHelpers_1.default.createElement('h4', ['modal__code-title']);
        this.modalCode = DOMHelpers_1.default.createElement('pre', ['modal__code']);
        this.modalDescription = DOMHelpers_1.default.createElement('p', ['modal__description']);
        this.modalCloseButton = DOMHelpers_1.default.createElement('button', ['modal__close-button'], 'Ok, got it!');
    }
    static getInstance() {
        return Singleton_1.default.getInstance(ModalWindowElements);
    }
}
exports["default"] = ModalWindowElements;


/***/ }),

/***/ 378:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const ModalWindowElements_1 = __importDefault(__webpack_require__(63));
const DOMHelpers_1 = __importDefault(__webpack_require__(255));
const ModalWindowContent_1 = __importDefault(__webpack_require__(630));
class ModalWindowLayout {
    constructor() {
        this.modalWindowElements = ModalWindowElements_1.default.getInstance();
    }
    appendModalWindowElements() {
        DOMHelpers_1.default.appendChildToElement(DOMHelpers_1.default.getElement('.code-editor-container'), this.modalWindowElements.modalBody);
        DOMHelpers_1.default.appendChildToElement(this.modalWindowElements.modalBody, this.modalWindowElements.modalTitle);
        DOMHelpers_1.default.appendChildToElement(this.modalWindowElements.modalBody, this.modalWindowElements.modalGreeting);
        DOMHelpers_1.default.appendChildToElement(this.modalWindowElements.modalBody, this.modalWindowElements.modalCodeTitle);
        DOMHelpers_1.default.appendChildToElement(this.modalWindowElements.modalBody, this.modalWindowElements.modalCode);
        DOMHelpers_1.default.appendChildToElement(this.modalWindowElements.modalBody, this.modalWindowElements.modalDescription);
        DOMHelpers_1.default.appendChildToElement(this.modalWindowElements.modalBody, this.modalWindowElements.modalCloseButton);
    }
    populateModalWindowData() {
        this.modalWindowElements.modalTitle.innerText = ModalWindowContent_1.default.title;
        this.modalWindowElements.modalGreeting.innerText = ModalWindowContent_1.default.greeting;
        this.modalWindowElements.modalCodeTitle.innerText = ModalWindowContent_1.default.codeTitle;
        this.modalWindowElements.modalCode.innerText = ModalWindowContent_1.default.code;
        this.modalWindowElements.modalDescription.innerText = ModalWindowContent_1.default.description;
    }
    assignModalWindowEventListeners() {
        this.modalWindowElements.modalCloseButton.addEventListener('click', () => {
            this.modalWindowElements.modalBody.classList.remove('modal--opened');
            DOMHelpers_1.default.getElement('.modal-button').classList.remove('modal-button--hided');
        });
    }
    init() {
        this.appendModalWindowElements();
        this.populateModalWindowData();
        this.assignModalWindowEventListeners();
    }
}
exports["default"] = ModalWindowLayout;


/***/ }),

/***/ 938:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const DOMHelpers_1 = __importDefault(__webpack_require__(255));
const Singleton_1 = __importDefault(__webpack_require__(52));
class FooterElements {
    constructor() {
        this.footerContainer = DOMHelpers_1.default.createElement('div', ['footer-container'], 'Made by');
        this.footerAuthor = DOMHelpers_1.default.createElement('a', ['footer__author'], '@Wilden5');
        this.footerYear = DOMHelpers_1.default.createElement('span', ['footer__year'], '2023');
        this.footerSchool = DOMHelpers_1.default.createElement('a', ['footer__school']);
    }
    static getInstance() {
        return Singleton_1.default.getInstance(FooterElements);
    }
}
exports["default"] = FooterElements;


/***/ }),

/***/ 77:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const FooterElements_1 = __importDefault(__webpack_require__(938));
const DOMHelpers_1 = __importDefault(__webpack_require__(255));
class FooterLayout {
    constructor() {
        this.footerElements = new FooterElements_1.default();
    }
    appendFooterElements() {
        DOMHelpers_1.default.appendChildToElement(document.body, this.footerElements.footerContainer);
        DOMHelpers_1.default.appendChildToElement(this.footerElements.footerContainer, this.footerElements.footerAuthor);
        DOMHelpers_1.default.appendChildToElement(this.footerElements.footerContainer, this.footerElements.footerYear);
        DOMHelpers_1.default.appendChildToElement(this.footerElements.footerContainer, this.footerElements.footerSchool);
        DOMHelpers_1.default.appendImage(this.footerElements.footerSchool, 'https://rs.school/images/rs_school_js.svg');
    }
    assignCodeEditorEventListeners() {
        this.footerElements.footerAuthor.addEventListener('click', () => {
            window.open('https://github.com/wilden5', '_blank');
        });
        this.footerElements.footerSchool.addEventListener('click', () => {
            window.open('https://rs.school/js/', '_blank');
        });
    }
    init() {
        this.appendFooterElements();
        this.assignCodeEditorEventListeners();
    }
}
exports["default"] = FooterLayout;


/***/ }),

/***/ 748:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const DOMHelpers_1 = __importDefault(__webpack_require__(255));
const Singleton_1 = __importDefault(__webpack_require__(52));
class LevelSelectorElements {
    constructor() {
        this.levelSelectorContainer = DOMHelpers_1.default.createElement('div', ['level-selector-container']);
        this.levelSelectorNav = DOMHelpers_1.default.createElement('div', ['level-selector__nav']);
        this.navNextLevel = DOMHelpers_1.default.createElement('button', ['nav__next-level'], '>');
        this.navPrevLevel = DOMHelpers_1.default.createElement('button', ['nav__prev-level'], '<');
        this.navLevelNumber = DOMHelpers_1.default.createElement('span', ['nav__level-number']);
        this.levelProgress = DOMHelpers_1.default.createElement('div', ['level-selector__state-progress']);
        this.levelProgressState = DOMHelpers_1.default.createElement('div', ['state-progress__completed']);
        this.levelInformationContainer = DOMHelpers_1.default.createElement('div', ['level-selector__level-information']);
        this.selectorType = DOMHelpers_1.default.createElement('h3', ['level-information__selector-type']);
        this.selectorTitle = DOMHelpers_1.default.createElement('h2', ['level-information__selector-title']);
        this.selectorSyntax = DOMHelpers_1.default.createElement('h2', ['level-information__selector-syntax']);
        this.selectorHint = DOMHelpers_1.default.createElement('div', ['level-information__selector-hint']);
        this.exampleTitle = DOMHelpers_1.default.createElement('h4', ['level-information__example-title']);
        this.exampleCase = DOMHelpers_1.default.createElement('div', ['level-information__example-case']);
        this.navCheckmark = DOMHelpers_1.default.createElement('span', ['nav__checkmark']);
        this.exampleCaseSecond = DOMHelpers_1.default.createElement('div', ['level-information__example-case-2']);
    }
    static getInstance() {
        return Singleton_1.default.getInstance(LevelSelectorElements);
    }
}
exports["default"] = LevelSelectorElements;


/***/ }),

/***/ 113:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const BurgerMenuLayout_1 = __importDefault(__webpack_require__(739));
const LevelSelectorElements_1 = __importDefault(__webpack_require__(748));
const DOMHelpers_1 = __importDefault(__webpack_require__(255));
const BurgerMenuElements_1 = __importDefault(__webpack_require__(239));
const CodeEditorLayout_1 = __importDefault(__webpack_require__(184));
const LevelHelpers_1 = __webpack_require__(283);
const CodeEditorInput_1 = __importDefault(__webpack_require__(621));
const GameLayout_1 = __importDefault(__webpack_require__(386));
const LocalStorage_1 = __webpack_require__(451);
class LevelSelectorLayout {
    constructor(levels) {
        this.handleNextLevel = () => {
            const currentLevelIndex = (0, LevelHelpers_1.getCurrentLevelIndex)();
            if ((0, LevelHelpers_1.getCurrentLevelIndex)() < this.levels.length - 1) {
                (0, LevelHelpers_1.setCurrentLevelIndex)(currentLevelIndex + 1);
                (0, LevelHelpers_1.updateLevelData)();
                (0, LevelHelpers_1.appendLevelMarkup)();
                this.codeEditorLayout.setUserInputState(true);
                (0, LevelHelpers_1.highlightElementsWithSameClass)();
                (0, LevelHelpers_1.syncLevelStatusCheckmark)();
                (0, LevelHelpers_1.generateElementsOnTable)();
                (0, LocalStorage_1.setLocalStorageCurrentLevel)();
            }
        };
        this.handlePrevLevel = () => {
            const currentLevelIndex = (0, LevelHelpers_1.getCurrentLevelIndex)();
            if ((0, LevelHelpers_1.getCurrentLevelIndex)() > 0) {
                (0, LevelHelpers_1.setCurrentLevelIndex)(currentLevelIndex - 1);
                (0, LevelHelpers_1.updateLevelData)();
                (0, LevelHelpers_1.appendLevelMarkup)();
                this.codeEditorLayout.setUserInputState(true);
                (0, LevelHelpers_1.highlightElementsWithSameClass)();
                (0, LevelHelpers_1.syncLevelStatusCheckmark)();
                (0, LevelHelpers_1.generateElementsOnTable)();
                (0, LocalStorage_1.setLocalStorageCurrentLevel)();
            }
        };
        this.levels = levels;
        (0, LevelHelpers_1.setCurrentLevelIndex)(0);
        this.levelElements = LevelSelectorElements_1.default.getInstance();
        this.burgerMenuLayout = new BurgerMenuLayout_1.default(levels);
        this.burgerMenuElements = BurgerMenuElements_1.default.getInstance();
        this.codeEditorLayout = new CodeEditorLayout_1.default();
        this.codeEditorInput = new CodeEditorInput_1.default();
        this.gameLayout = new GameLayout_1.default();
    }
    appendElements() {
        DOMHelpers_1.default.appendChildToElement(DOMHelpers_1.default.getElement('.wrapper'), this.levelElements.levelSelectorContainer);
        DOMHelpers_1.default.appendChildToElement(this.levelElements.levelSelectorContainer, this.levelElements.levelSelectorNav);
        DOMHelpers_1.default.appendChildToElement(this.levelElements.levelSelectorContainer, this.levelElements.levelProgress);
        DOMHelpers_1.default.appendChildToElement(this.levelElements.levelProgress, this.levelElements.levelProgressState);
        DOMHelpers_1.default.appendChildToElement(this.levelElements.levelSelectorContainer, this.levelElements.levelInformationContainer);
        DOMHelpers_1.default.appendChildToElement(this.levelElements.levelSelectorNav, this.levelElements.navLevelNumber);
        DOMHelpers_1.default.appendChildToElement(this.levelElements.levelSelectorNav, this.levelElements.navCheckmark);
        DOMHelpers_1.default.appendChildToElement(this.levelElements.levelSelectorNav, this.levelElements.navPrevLevel);
        DOMHelpers_1.default.appendChildToElement(this.levelElements.levelSelectorNav, this.levelElements.navNextLevel);
        DOMHelpers_1.default.appendChildToElement(this.levelElements.levelInformationContainer, this.levelElements.selectorType);
        DOMHelpers_1.default.appendChildToElement(this.levelElements.levelInformationContainer, this.levelElements.selectorTitle);
        DOMHelpers_1.default.appendChildToElement(this.levelElements.levelInformationContainer, this.levelElements.selectorSyntax);
        DOMHelpers_1.default.appendChildToElement(this.levelElements.levelInformationContainer, this.levelElements.selectorHint);
        DOMHelpers_1.default.appendChildToElement(this.levelElements.levelInformationContainer, this.levelElements.exampleTitle);
        DOMHelpers_1.default.appendChildToElement(this.levelElements.levelInformationContainer, this.levelElements.exampleCase);
        DOMHelpers_1.default.appendChildToElement(this.levelElements.levelInformationContainer, this.levelElements.exampleCaseSecond);
    }
    assignEventListeners() {
        this.levelElements.navNextLevel.addEventListener('click', this.handleNextLevel);
        this.levelElements.navPrevLevel.addEventListener('click', this.handlePrevLevel);
        this.burgerMenuElements.burgerResetLevelButton.addEventListener('click', () => {
            (0, LevelHelpers_1.setCurrentLevelIndex)(0);
            this.burgerMenuElements.navBurger.classList.remove('burger--open');
            this.burgerMenuElements.burgerMenu.classList.remove('burger-menu--open');
            localStorage.clear();
            window.location.reload();
        });
    }
    init() {
        this.appendElements();
        this.assignEventListeners();
        this.burgerMenuLayout.init((levelIndex) => {
            (0, LevelHelpers_1.setCurrentLevelIndex)(levelIndex); // updating the currentLevelIndex with index from clickBurgerMenuLevel
            (0, LevelHelpers_1.updateLevelData)(); // recall populateLevelData to update the level info
            (0, LevelHelpers_1.appendLevelMarkup)();
            (0, LevelHelpers_1.highlightElementsWithSameClass)();
            (0, LevelHelpers_1.syncLevelStatusCheckmark)();
            (0, LevelHelpers_1.generateElementsOnTable)();
            (0, LocalStorage_1.setLocalStorageCurrentLevel)();
        });
        (0, LevelHelpers_1.updateLevelData)();
        (0, LevelHelpers_1.appendLevelMarkup)();
    }
}
exports["default"] = LevelSelectorLayout;


/***/ }),

/***/ 239:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const DOMHelpers_1 = __importDefault(__webpack_require__(255));
const Singleton_1 = __importDefault(__webpack_require__(52));
class BurgerMenuElements {
    constructor() {
        this.navBurger = DOMHelpers_1.default.createElement('div', ['nav__burger']);
        this.burgerLine = DOMHelpers_1.default.createElement('span', ['burger__burger-line']);
        this.burgerMenu = DOMHelpers_1.default.createElement('div', ['level-selector__burger-menu']);
        this.burgerHeader = DOMHelpers_1.default.createElement('h2', ['burger-menu__burger-header'], 'Choose a level');
        this.burgerLevels = DOMHelpers_1.default.createElement('div', ['burger-menu__burger-content']);
        this.burgerLevelContent = DOMHelpers_1.default.createElement('div', ['burger-content__level']);
        this.burgerLevelNumber = DOMHelpers_1.default.createElement('span', ['level__number']);
        this.burgerLevelCheckmark = DOMHelpers_1.default.createElement('span', ['level__checkmark-s']);
        this.burgerLevelSyntax = DOMHelpers_1.default.createElement('span', ['level__syntax']);
        this.burgerResetLevelButton = DOMHelpers_1.default.createElement('button', ['burger-menu__reset-button'], 'Reset Progress');
    }
    static getInstance() {
        return Singleton_1.default.getInstance(BurgerMenuElements);
    }
}
exports["default"] = BurgerMenuElements;


/***/ }),

/***/ 739:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const BurgerMenuElements_1 = __importDefault(__webpack_require__(239));
const LevelSelectorElements_1 = __importDefault(__webpack_require__(748));
const DOMHelpers_1 = __importDefault(__webpack_require__(255));
class BurgerMenuLayout {
    constructor(levels) {
        this.levels = levels;
        this.burgerMenuElements = BurgerMenuElements_1.default.getInstance();
        this.levelSelectorElements = LevelSelectorElements_1.default.getInstance();
    }
    appendBurgerMenuElements() {
        DOMHelpers_1.default.appendChildToElement(this.levelSelectorElements.levelSelectorContainer, this.burgerMenuElements.burgerMenu);
        DOMHelpers_1.default.appendChildToElement(this.levelSelectorElements.levelSelectorNav, this.burgerMenuElements.navBurger);
        DOMHelpers_1.default.appendChildToElement(this.burgerMenuElements.navBurger, this.burgerMenuElements.burgerLine);
        DOMHelpers_1.default.appendChildToElement(this.burgerMenuElements.burgerMenu, this.burgerMenuElements.burgerHeader);
        DOMHelpers_1.default.appendChildToElement(this.burgerMenuElements.burgerMenu, this.burgerMenuElements.burgerLevels);
    }
    assignBurgerMenuEventListeners() {
        this.burgerMenuElements.navBurger.addEventListener('click', () => {
            this.burgerMenuElements.navBurger.classList.toggle('burger--open');
            this.burgerMenuElements.burgerMenu.classList.toggle('burger-menu--open');
        });
    }
    populateBurgerMenu() {
        this.levels.forEach((level) => {
            const [clonedContent, clonedCheckmark, clonedNumber, clonedSyntax] = [
                this.burgerMenuElements.burgerLevelContent,
                this.burgerMenuElements.burgerLevelCheckmark,
                this.burgerMenuElements.burgerLevelNumber,
                this.burgerMenuElements.burgerLevelSyntax,
            ].map((element) => element.cloneNode(true));
            this.burgerMenuElements.burgerLevels.appendChild(clonedContent);
            clonedContent.appendChild(clonedCheckmark);
            clonedContent.appendChild(clonedNumber);
            clonedContent.appendChild(clonedSyntax);
            clonedContent.classList.add(`level-${level.levelIndicator.split(' ')[1]}`);
            clonedNumber.innerText = `${level.levelIndicator.split(' ')[1]}`;
            clonedSyntax.classList.add(`level__syntax-${level.levelIndicator.split(' ')[1]}`);
            clonedSyntax.innerText = `${level.selectorSyntax}`;
            this.burgerMenuElements.burgerLevels.appendChild(this.burgerMenuElements.burgerResetLevelButton);
        });
    }
    clickBurgerMenuLevel(callback) {
        const burgerLevelContentAll = DOMHelpers_1.default.getElements('.burger-content__level');
        burgerLevelContentAll.forEach((item) => {
            item.addEventListener('click', () => {
                var _a;
                const secondClass = (_a = item.classList.item(1)) === null || _a === void 0 ? void 0 : _a.replace('-', ' ');
                this.levels.forEach((level, index) => {
                    if (level.levelIndicator.toLowerCase() === secondClass) {
                        this.burgerMenuElements.navBurger.classList.toggle('burger--open');
                        this.burgerMenuElements.burgerMenu.classList.toggle('burger-menu--open');
                        callback(index); // calling callback here that takes number and return nothing
                    }
                });
            });
        });
    }
    init(callback) {
        // adding callback here cuz we need to pass it to the clickBurgerMenuLevel
        this.appendBurgerMenuElements();
        this.assignBurgerMenuEventListeners();
        this.populateBurgerMenu();
        this.clickBurgerMenuLevel(callback);
    }
}
exports["default"] = BurgerMenuLayout;


/***/ }),

/***/ 255:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class DOMHelpers {
    static createElement(type, classes = [], text = '') {
        const element = document.createElement(type);
        classes.forEach((className) => element.classList.add(className));
        if (text) {
            element.innerText = text;
        }
        return element;
    }
    static getElement(selector) {
        const element = document.querySelector(selector);
        if (element === null) {
            throw new Error(`Element with selector '${selector}' not found.`);
        }
        return element;
    }
    static getElements(selector) {
        const elements = Array.from(document.querySelectorAll(selector));
        if (elements.length === 0) {
            throw new Error(`No elements found with selector '${selector}'.`);
        }
        return elements;
    }
    static appendImage(element, path) {
        const image = new Image();
        image.src = path;
        element.appendChild(image);
    }
    static appendChildToElement(parent, child) {
        parent.appendChild(child);
    }
}
exports["default"] = DOMHelpers;


/***/ }),

/***/ 283:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setLevelStatus = exports.syncLevelStatusCheckmark = exports.userCorrectSelector = exports.userIncorrectSelector = exports.updateLevelData = exports.appendLevelMarkup = exports.generateElementsOnTable = exports.populateOverlay = exports.highlightElementsWithSameClass = exports.getCurrentLevelIndex = exports.setCurrentLevelIndex = void 0;
const DOMHelpers_1 = __importDefault(__webpack_require__(255));
const AppLevels_1 = __importDefault(__webpack_require__(314));
const Types_1 = __webpack_require__(786);
let currentLevelIndex = 0;
const levels = AppLevels_1.default;
function setCurrentLevelIndex(index) {
    currentLevelIndex = index;
}
exports.setCurrentLevelIndex = setCurrentLevelIndex;
function getCurrentLevelIndex() {
    return currentLevelIndex;
}
exports.getCurrentLevelIndex = getCurrentLevelIndex;
function updateLevelProgressBar() {
    DOMHelpers_1.default.getElement('.state-progress__completed').style.setProperty('width', `${Types_1.barProgressStateMap[getCurrentLevelIndex()]}px`);
}
function highlightSelectedLevelInMenu() {
    DOMHelpers_1.default.getElements('.burger-content__level').forEach((item) => {
        const secondClass = Number(item.classList[1].split('-')[1]);
        if (getCurrentLevelIndex() === secondClass - 1) {
            item.classList.add('level--selected');
        }
        else {
            item.classList.remove('level--selected');
        }
    });
}
function highlightElementsWithSameClass() {
    const items = DOMHelpers_1.default.getElements('.item');
    items.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.classList.forEach((className) => {
                if (className.startsWith('item-')) {
                    const classNumber = className.replace('item-', '');
                    const itemsToHighlight = DOMHelpers_1.default.getElements(`.item-${classNumber}`);
                    itemsToHighlight.forEach((itemToHighlight) => {
                        itemToHighlight.classList.add('highlighted');
                    });
                }
            });
        });
        item.addEventListener('mouseout', () => {
            item.classList.forEach((className) => {
                if (className.startsWith('item-')) {
                    const classNumber = className.replace('item-', '');
                    const itemsToHighlight = DOMHelpers_1.default.getElements(`.item-${classNumber}`);
                    itemsToHighlight.forEach((itemToHighlight) => {
                        itemToHighlight.classList.remove('highlighted');
                    });
                }
            });
        });
    });
}
exports.highlightElementsWithSameClass = highlightElementsWithSameClass;
function populateOverlay() {
    const overlay = DOMHelpers_1.default.getElement('.overlay');
    const items = DOMHelpers_1.default.getElements('.item');
    items.forEach((item) => {
        item.addEventListener('mouseover', () => {
            if (item.innerText === '') {
                overlay.textContent = DOMHelpers_1.default.getElement(`.${item.classList[0]}`).innerText;
                overlay.classList.add('overlay--active');
            }
            else {
                overlay.textContent = item.innerText;
                overlay.classList.add('overlay--active');
            }
        });
        item.addEventListener('mouseout', () => {
            overlay.classList.remove('overlay--active');
        });
    });
}
exports.populateOverlay = populateOverlay;
function generateElementsOnTable() {
    const tableArea = DOMHelpers_1.default.getElement('.table-area');
    const tableTop = DOMHelpers_1.default.getElement('.table-top');
    tableTop.innerHTML = '';
    const boardElementArray = levels[getCurrentLevelIndex()].boardElement;
    if (boardElementArray) {
        tableArea.style.width = `${levels[getCurrentLevelIndex()].tableWidth}`;
        for (let i = 0; i < levels.length; i += 1) {
            let previousElem = null;
            if (getCurrentLevelIndex() === Number(levels[i].levelIndicator.split(' ')[1]) - 1) {
                boardElementArray.type.forEach((elem, index) => {
                    const createElem = DOMHelpers_1.default.createElement(`${elem.split('-')[0]}`, [
                        `${boardElementArray.class[index]}`,
                        'item',
                    ]);
                    if (elem.split('-')[1] === 'target') {
                        createElem.classList.add(`${elem.split('-')[1]}`, `${elem.split('-')[2]}`);
                    }
                    if (elem.split('-')[1] === 'fancy') {
                        createElem.classList.add('fancy');
                    }
                    if (elem.split('-')[2] === 'nested') {
                        if (previousElem) {
                            previousElem.appendChild(createElem);
                        }
                    }
                    else {
                        tableTop.appendChild(createElem);
                    }
                    previousElem = createElem;
                });
            }
        }
    }
    highlightElementsWithSameClass();
    populateOverlay();
}
exports.generateElementsOnTable = generateElementsOnTable;
function appendLevelMarkup() {
    const container = DOMHelpers_1.default.getElement('.view_level-markup');
    container.innerHTML = '';
    const arrayMarkup = levels[getCurrentLevelIndex()].boardMarkup.split(',');
    let previousElement = null;
    for (let index = 0; index < arrayMarkup.length; index += 1) {
        const item = arrayMarkup[index];
        const div = DOMHelpers_1.default.createElement('div', [`item-${index}`, 'item'], `${item}`);
        container.appendChild(div);
        if (item.includes('/') && !item.includes(' /') && previousElement) {
            previousElement.className += ` item-nested-${index}`;
            container.childNodes.forEach((childNode) => {
                if (childNode.textContent === item) {
                    const element = childNode;
                    element.className = '';
                    element.classList.add(`item-${index - 2}`, 'item');
                }
            });
        }
        previousElement = div;
    }
    container.childNodes.forEach((childNode) => {
        if (childNode instanceof HTMLElement && childNode.classList.length > 3) {
            const fourthClass = childNode.classList.item(3);
            childNode.classList.remove(fourthClass);
        }
    });
}
exports.appendLevelMarkup = appendLevelMarkup;
function updateLevelData() {
    const globalHeader = DOMHelpers_1.default.getElement('.global-header');
    DOMHelpers_1.default.getElement('.nav__level-number').innerText = `${levels[getCurrentLevelIndex()].levelIndicator} of ${levels.length}`;
    DOMHelpers_1.default.getElement('.level-information__selector-type').innerText = levels[getCurrentLevelIndex()].selectorType;
    DOMHelpers_1.default.getElement('.level-information__selector-title').innerText =
        levels[getCurrentLevelIndex()].selectorTitle;
    DOMHelpers_1.default.getElement('.level-information__selector-syntax').innerText =
        levels[getCurrentLevelIndex()].selectorSyntax;
    DOMHelpers_1.default.getElement('.level-information__selector-hint').innerHTML = levels[getCurrentLevelIndex()].hint;
    DOMHelpers_1.default.getElement('.level-information__example-title').innerText = levels[getCurrentLevelIndex()].example.title;
    DOMHelpers_1.default.getElement('.level-information__example-case').innerHTML = levels[getCurrentLevelIndex()].example.case1;
    DOMHelpers_1.default.getElement('.level-information__example-case-2').innerHTML =
        levels[getCurrentLevelIndex()].example.case2;
    globalHeader.innerText = levels[getCurrentLevelIndex()].doThis;
    updateLevelProgressBar();
    highlightSelectedLevelInMenu();
}
exports.updateLevelData = updateLevelData;
function userIncorrectSelector() {
    const editor = DOMHelpers_1.default.getElement('.editor');
    editor.classList.add('editor--blocked');
    setTimeout(() => {
        editor.classList.remove('editor--blocked');
    }, 300);
}
exports.userIncorrectSelector = userIncorrectSelector;
function userCorrectSelector() {
    const targets = DOMHelpers_1.default.getElements('.target');
    targets.forEach((element) => {
        element.classList.add('correct-answer');
    });
}
exports.userCorrectSelector = userCorrectSelector;
function syncLevelStatusCheckmark() {
    if (AppLevels_1.default[getCurrentLevelIndex()].status && !AppLevels_1.default[getCurrentLevelIndex()].isHintUsed) {
        DOMHelpers_1.default.getElement('.nav__checkmark').style.borderColor = '#35ff00';
    }
    if (AppLevels_1.default[getCurrentLevelIndex()].status && AppLevels_1.default[getCurrentLevelIndex()].isHintUsed) {
        DOMHelpers_1.default.getElement('.nav__checkmark').style.borderColor = '#faf102';
    }
    if (!AppLevels_1.default[getCurrentLevelIndex()].status && !AppLevels_1.default[getCurrentLevelIndex()].isHintUsed) {
        DOMHelpers_1.default.getElement('.nav__checkmark').style.borderColor = '#fff';
    }
}
exports.syncLevelStatusCheckmark = syncLevelStatusCheckmark;
function setLevelStatus() {
    AppLevels_1.default.forEach((level) => {
        if (level.status && level.isHintUsed) {
            DOMHelpers_1.default.getElement(`.${level.levelIndicator.replace(' ', '-').toLowerCase()}`).classList.add('level-passed-hint');
            syncLevelStatusCheckmark();
        }
        if (level.status && !level.isHintUsed) {
            DOMHelpers_1.default.getElement(`.${level.levelIndicator.replace(' ', '-').toLowerCase()}`).classList.add('level-passed');
            syncLevelStatusCheckmark();
        }
    });
}
exports.setLevelStatus = setLevelStatus;


/***/ }),

/***/ 451:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.synchronizeWithLocalStorage = exports.getLocalStorageLevelStatuses = exports.setLocalStorageLevelStatuses = exports.setLocalStorageCurrentLevel = void 0;
const LevelHelpers_1 = __webpack_require__(283);
const AppLevels_1 = __importDefault(__webpack_require__(314));
function setLocalStorageCurrentLevel() {
    localStorage.setItem('current-level', `${(0, LevelHelpers_1.getCurrentLevelIndex)()}`);
}
exports.setLocalStorageCurrentLevel = setLocalStorageCurrentLevel;
function setLocalStorageLevelStatuses() {
    const levelProgressObject = {
        status: [],
        isHint: [],
    };
    AppLevels_1.default.forEach((item) => {
        levelProgressObject.status.push(item.status);
        levelProgressObject.isHint.push(item.isHintUsed);
    });
    localStorage.setItem('levelProgressObject', JSON.stringify(levelProgressObject));
}
exports.setLocalStorageLevelStatuses = setLocalStorageLevelStatuses;
function getLocalStorageLevelStatuses() {
    const levelProgressString = localStorage.getItem('levelProgressObject');
    if (levelProgressString) {
        const levelProgressObject = JSON.parse(levelProgressString);
        AppLevels_1.default.forEach((item, index) => {
            const itemCopy = item;
            itemCopy.status = levelProgressObject.status[index];
            itemCopy.isHintUsed = levelProgressObject.isHint[index];
        });
    }
}
exports.getLocalStorageLevelStatuses = getLocalStorageLevelStatuses;
function synchronizeWithLocalStorage() {
    (0, LevelHelpers_1.setCurrentLevelIndex)(Number(`${localStorage.getItem('current-level')}`));
    getLocalStorageLevelStatuses();
    (0, LevelHelpers_1.setLevelStatus)();
    (0, LevelHelpers_1.updateLevelData)();
    (0, LevelHelpers_1.appendLevelMarkup)();
    (0, LevelHelpers_1.generateElementsOnTable)();
}
exports.synchronizeWithLocalStorage = synchronizeWithLocalStorage;


/***/ }),

/***/ 52:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Singleton {
    static getInstance(constructor) {
        const className = constructor.name;
        if (!Singleton.instance[className]) {
            Singleton.instance[className] = new constructor();
        }
        return Singleton.instance[className];
    }
}
Singleton.instance = {};
exports["default"] = Singleton;


/***/ }),

/***/ 607:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(766);
__webpack_require__(344);
const App_1 = __importDefault(__webpack_require__(265));
const app = new App_1.default();
app.start();


/***/ }),

/***/ 786:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.barProgressStateMap = void 0;
exports.barProgressStateMap = {
    0: 35,
    1: 35 * 2,
    2: 35 * 3,
    3: 35 * 4,
    4: 35 * 5,
    5: 35 * 6,
    6: 35 * 7,
    7: 35 * 8,
    8: 35 * 9,
    9: 35 * 10,
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(607);
/******/ 	
/******/ })()
;