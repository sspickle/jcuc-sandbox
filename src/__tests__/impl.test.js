/*
** Student written tests.
*/

import { SimpleDB } from '../simpledb';

describe('The SimpleDB Class Tests', () => {

    test('Should throw an error if a non-array is passed to the constructor', () => {
        let f = () => {
            new SimpleDB(0);
        };

        expect(f).toThrow(TypeError)
    });

    test('Should get count of zero from empty list', () => {

        let theDB = new SimpleDB([]);
	
        expect(theDB.Count()).toBe(0);
    });

    test('A list of three', () => {
        let theDB = new SimpleDB([
            {a: 1, b: 2},
            {a: 3, b: 4},
            {a: -4, b: 9}
        ]);
        expect(theDB.Count()).toBe(3);
    });

    test('Check for keys', () => {
        let theDB = new SimpleDB([
            {a: 1, b: 2},
            {a: 3, b: 4}
        ]);

        expect(theDB.Keys().indexOf('a')).not.toEqual(-1);
        expect(theDB.Keys().indexOf('b')).not.toEqual(-1);
    });

    test('Try a filter', () => {
        let theDB = new SimpleDB([
            {a: 1, b: 2},
            {a: 3, b: 4}
        ]);
        let theResult = theDB.Filter(o => o.b == 2);

        expect(theResult).toStrictEqual([{a: 1, b: 2}]);
    });

    test('How about a Map', () => {
        let theDB = new SimpleDB([
            {a: 1, b: 2},
            {a: 3, b: 4}
        ]);
        let theResult = theDB.Map(o => o.b);

        expect(theResult).toStrictEqual([2,4]);
    });

    test("Let's search for something that's not there",() => {
        let theDB = new SimpleDB([
            {a: 1, b: 2},
            {a: 3, b: 4}
        ]);
        let theResult = theDB.Search(o => o.b == 3);
        expect(theResult).toBe(null);
    });

    test("Search for something that is there.", () => {
        let theDB = new SimpleDB([
            {a: 1, b: 2},
            {a: 3, b: 4}
        ]);
        let theResult = theDB.Search(o => o.b == 2);
        expect(theResult.a).toBe(1);
    });
})

