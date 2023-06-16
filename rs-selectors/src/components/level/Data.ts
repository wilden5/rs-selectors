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
        levelIndicator: 'Level 2',
        selectorType: 'ID Selector',
        selectorTitle: 'Select elements with an ID',
        selectorSyntax: '#id',
        hint: 'Selects the element with a specific id. You can also combine the ID selector with the type selector.',
        example: {
            title: 'Examples',
            case1: '#cool selects any element with id="cool"',
            case2: 'ul#long selects ul id="long"',
        },
    },
];

export default gameLevels;
