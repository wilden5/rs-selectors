export interface LevelInfo {
    doThis: string;
    levelIndicator: string;
    selectorType: string;
    selectorTitle: string;
    selectorSyntax: string;
    hint: string;
    example: {
        title: string;
        case1: string;
        case2: string;
    };
    boardMarkup: string;
}

export interface ModalWindowContent {
    title: string;
    greeting: string;
    codeTitle: string;
    code: string;
    description: string;
}
