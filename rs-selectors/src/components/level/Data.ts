import { LevelInfo } from '../../types/Interfaces';

const gameLevels: LevelInfo[] = [
    {
        levelIndicator: 'Level 1',
        selectorType: 'Type Selector',
        selectorTitle: 'Select elements by their type',
        selectorSyntax: 'A',
        hint:
            'Selects all elements of type A. ' +
            'Type refers to the type of tag, so div, p and ul are all different element types.',
        example: {
            title: 'Examples',
            case1: 'div selects all div elements.',
            case2: 'p selects all p elements.',
        },
    },
    {
        levelIndicator: 'Level 3',
        selectorType: 'Descendant Selector',
        selectorTitle: 'Select an element inside another element',
        selectorSyntax: 'A B',
        hint: 'Selects all B inside of A. B is called a descendant because it is inside of another element.',
        example: {
            title: 'Examples',
            case1: 'p strong selects all strong elements that are inside of any p',
            case2: '#fancy span selects any span elements that are inside of the element with id="fancy"',
        },
    },
    {
        levelIndicator: 'Level 4',
        selectorType: 'Class Selector',
        selectorTitle: 'Select elements by their class',
        selectorSyntax: '.classname',
        hint:
            'The class selector selects all elements with that class attribute. ' +
            'Elements can only have one ID, but many classes.',
        example: {
            title: 'Examples',
            case1: '.neato selects all elements with class="neato"',
            case2: '',
        },
    },
    {
        levelIndicator: 'Level 5',
        selectorType: 'Comma Combinator',
        selectorTitle: 'Combine, selectors, with... commas!',
        selectorSyntax: 'A, B',
        hint:
            'Thanks to Shatner technology, this selects all A and B elements. ' +
            'You can combine any selectors this way, and you can specify more than two.',
        example: {
            title: 'Examples',
            case1: 'p, .fun selects all p elements as well as all elements with class="fun"',
            case2: 'a, p, div selects all a, p and div elements',
        },
    },
    {
        levelIndicator: 'Level 6',
        selectorType: 'The Universal Selector',
        selectorTitle: 'You can select everything!',
        selectorSyntax: '*',
        hint: 'You can select all elements with the universal selector!',
        example: {
            title: 'Examples',
            case1: 'p * selects any element inside all p elements.',
            case2: '',
        },
    },
    {
        levelIndicator: 'Level 7',
        selectorType: 'General Sibling Selector',
        selectorTitle: 'Select elements that follows another element',
        selectorSyntax: 'A ~ B',
        hint:
            'You can select all siblings of an element that follow it. ' +
            'This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.',
        example: {
            title: 'Examples',
            case1: 'A ~ B selects all B that follow a A',
            case2: '',
        },
    },
    {
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
            case1: 'A > B selects all B that are a direct children A',
            case2: '',
        },
    },
    {
        levelIndicator: 'Level 9',
        selectorType: 'First Child Pseudo-selector',
        selectorTitle: 'Select a first child element inside of another element',
        selectorSyntax: ':first-child',
        hint:
            'You can select the first child element. A child element is any element that is directly nested in another element. ' +
            'You can combine this pseudo-selector with other selectors.',
        example: {
            title: 'Examples',
            case1: 'p:first-child selects all first child p elements.',
            case2: 'div p:first-child selects all first child p elements that are in a div.',
        },
    },
    {
        levelIndicator: 'Level 10',
        selectorType: 'Last Child Pseudo-selector',
        selectorTitle: 'Select the last element inside of another element',
        selectorSyntax: ':last-child',
        hint:
            'You can use this selector to select an element that is ' +
            'the last child element inside of another element.',
        example: {
            title: 'Examples',
            case1: 'span:last-child selects all last-child span elements.',
            case2: 'ul li:last-child selects the last li elements inside of any ul',
        },
    },
];

export default gameLevels;
