import { LevelInfo } from '../../types';

const gameLevels: LevelInfo[] = [
    {
        levelIndicator: 'Level 1',
        selectorType: 'Type Selector',
        selectorSyntax: 'A',
        hint:
            'Selects all elements of type A. ' +
            'Type refers to the type of tag, so div, p and ul are all different element types.',
        example: {
            title: 'Example 1',
            case: 'div selects all div elements.',
        },
    },
    {
        levelIndicator: 'Level 2',
        selectorType: 'ID Selector',
        selectorSyntax: '#id',
        hint: 'Selects the element with a specific id. You can also combine the ID selector with the type selector.',
        example: {
            title: 'Example 1',
            case: '#cool selects any element with id="cool"',
        },
    },
];

export default gameLevels;
