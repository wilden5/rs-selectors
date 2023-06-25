import { LevelInfo } from '../../types/Interfaces';

const GAME_LEVELS: LevelInfo[] = [
    {
        doThis: 'Select the plates',
        levelIndicator: 'Level 1',
        selectorType: 'Type Selector',
        selectorTitle: 'Select elements by their type',
        selectorSyntax: 'A',
        hint:
            `Selects all elements of type <strong>A</strong>. ` +
            'Type refers to the type of tag, so <strong>&lt;div&gt;</strong>, <strong>&lt;p&gt;</strong> and <strong>&lt;ul&gt;</strong> are all different element types.',
        example: {
            title: 'Examples',
            case1: `<strong>div</strong> selects all <strong>&lt;div&gt;</strong> elements.`,
            case2: `<strong>p</strong> selects all <strong>&lt;p&gt;</strong> elements.`,
        },
        boardMarkup: `<plate />
<plate />`,
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
        boardMarkup: `<plate id="fancy" />
<plate />
<bento />`,
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
        boardMarkup: `<bento />
<plate>
    <apple />
</plate>
<apple />`,
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
        boardMarkup: `<apple />
<apple class="small" />
<plate>
    <apple class="small" />
</plate>
<plate />`,
    },
    {
        doThis: 'Select all the plates and bentos',
        levelIndicator: 'Level 5',
        selectorType: 'Comma Combinator',
        selectorTitle: 'Combine, selectors, with... commas!',
        selectorSyntax: 'A, B',
        hint:
            'Thanks to Shatner technology, this selects all <strong>A</strong> and <strong>B</strong> elements. ' +
            'You can combine any selectors this way, and you can specify more than two.',
        example: {
            title: 'Examples',
            case1:
                '<strong>p, .fun</strong> selects all <strong>&lt;p&gt;</strong> elements as ' +
                'well as all elements with <strong>class="fun"</strong>',
            case2:
                '<strong>a, p, div</strong> selects all <strong>&lt;a&gt;</strong>, <strong>&lt;p&gt;</strong> ' +
                'and <strong>&lt;div&gt;</strong> elements',
        },
        boardMarkup: `<pickle class="small" />
<pickle />
<plate>
    <pickle />
</plate>
<bento>
    <pickle />
</bento>
<plate>
    <pickle />
</plate>
<pickle />
<pickle class="small" />`,
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
        boardMarkup: `<apple />
<plate>
    <orange class="small" />
</plate>
<bento />
<bento>
    <orange />
</bento>
<plate id="fancy" />`,
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
        boardMarkup: `<pickle />
<bento>
    <orange class="small" />
</bento>
<pickle class="small" />
<pickle />
<plate>
    <pickle />
</plate>
<plate>
    <pickle class="small" />
</plate>`,
    },
    {
        doThis: 'Select the apple directly on a plate',
        levelIndicator: 'Level 8',
        selectorType: 'Child Selector',
        selectorTitle: 'Select direct children of an element',
        selectorSyntax: 'A > B',
        hint:
            'You can select elements that are direct children of other elements. ' +
            'A child element is any element that is nested directly in another element.' +
            'Elements that are nested deeper than that are called descendant elements.',
        example: {
            title: 'Examples',
            case1:
                '<strong>A > B</strong> selects all <strong>B</strong> that are ' +
                'a direct children <strong>A</strong>',
            case2: '',
        },
        boardMarkup: `<plate>
    <bento>
        <apple />
    </bento>
</plate>
<plate>
    <apple />
</plate>
<plate />
<apple />
<apple class="small" />`,
    },
    {
        doThis: 'Select the top orange',
        levelIndicator: 'Level 9',
        selectorType: 'First Child Pseudo-selector',
        selectorTitle: 'Select a first child element inside of another element',
        selectorSyntax: ':first-child',
        hint:
            'You can select the first child element. A child element is any element that is directly nested in another element. ' +
            'You can combine this pseudo-selector with other selectors.',
        example: {
            title: 'Examples',
            case1: '<strong>p:first-child</strong> selects all first child <strong>&lt;p&gt;</strong> elements.',
            case2:
                '<strong>div p:first-child</strong> selects all first child <strong>&lt;p&gt;</strong> elements ' +
                'that are in a <strong>&lt;div&gt;</strong>.',
        },
        boardMarkup: `<bento />
<plate />
<plate>
    <orange />
    <orange />
    <orange />
</plate>
<pickle class="small" />`,
    },
    {
        doThis: 'Select the small apple and the pickle',
        levelIndicator: 'Level 10',
        selectorType: 'Last Child Pseudo-selector',
        selectorTitle: 'Select the last element inside of another element',
        selectorSyntax: ':last-child',
        hint:
            'You can use this selector to select an element that is ' +
            'the last child element inside of another element.',
        example: {
            title: 'Examples',
            case1: '<strong>span:last-child</strong> selects all last-child <strong>&lt;span&gt;</strong> elements.',
            case2:
                '<strong>ul li:last-child</strong> selects the last <strong>&lt;li&gt;</strong> elements inside ' +
                'of any <strong>&lt;ul&gt;</strong>',
        },
        boardMarkup: `<plate id="fancy">
    <apple class="small" />
</plate>
<plate />
<plate>
    <orange class="small" />
    <orange>
</plate>
<pickle class="small" />`,
    },
];

export default GAME_LEVELS;
