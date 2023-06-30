import { LevelInfo } from '../../types/Interfaces';

const GAME_LEVELS: LevelInfo[] = [
    {
        doThis: 'Select the plates',
        levelIndicator: 'Level 1',
        selectorType: 'Type Selector',
        selectorTitle: 'Select elements by their type',
        selectorSyntax: 'A',
        hint:
            'Selects all elements of type <strong>A</strong>.' +
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
        hint:
            'Selects the element with a specific <strong>id</strong>. ' +
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
        hint:
            'Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called ' +
            'a descendant because it is inside of another element.',
        example: {
            title: 'Examples',
            case1:
                '<strong>p strong</strong> selects all <strong>&lt;strong&gt;</strong> elements that ' +
                'are inside of any <strong>&lt;p&gt;</strong>',
            case2:
                '<strong>#fancy span</strong> selects any <strong>&lt;span&gt;</strong> elements ' +
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
        hint:
            'The class selector selects all elements with that class attribute. ' +
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
        hint:
            'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, ' +
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
        hint:
            'You can select all siblings of an element that follow it. ' +
            'This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.',
        example: {
            title: 'Examples',
            case1: '<strong>A ~ B</strong> selects all <strong>B</strong> that follow a <strong>A</strong>',
            case2: '',
        },
        boardMarkup:
            '<pickle />,<bento />,<pickle class="small" />,<pickle />,<plate>,<pickle class="small" />,</plate>',
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
            case2:
                '<strong>div p:nth-child(2)</strong> selects the second <strong>p</strong> ' +
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
        hint:
            'Selects each last element of that type within another element. Remember type refers the kind of tag, so <strong&lt;>p&gt;</strong> and <strong>&lt;span&gt;</strong> are different types.' +
            'I wonder if this is how the last dinosaur was selected before it went extinct.',
        example: {
            title: 'Examples',
            case1: '<strong>div:last-of-type</strong> selects the last <strong>&lt;div&gt;</strong> in every element.',
            case2:
                '<strong>p span:last-of-type</strong> selects the last <strong>&lt;span&gt;</strong> ' +
                'in every <strong>&lt;p&gt;</strong>.',
        },
        boardMarkup:
            '<orange class="small" />,<orange class="small" />,<pickle />,<pickle />,<apple class="small" />,<apple class="small" />',
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

export default GAME_LEVELS;
