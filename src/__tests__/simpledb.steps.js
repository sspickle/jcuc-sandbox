import { defineFeature, loadFeature } from 'jest-cucumber';
import { SimpleDB } from '../simpledb';
 
const feature = loadFeature('./features/simpleDB.feature');

defineFeature(feature, test => {
    test('Adding a single item to the DB', ({ given, when, then }) => {

        let aDB        // define in test scope
        let count = 0;

        given('I have previously created a database', () => {
            aDB = new SimpleDB([]);
            count = aDB.Count();
        });
    
        when('I add a single item to the DB', () => {
            aDB.Add({name:"joe", height:72});
        });
    
        then('I should see its size increase', () => {
            expect(aDB.Count()).toBe(count + 1);
        });
    });

    test('Find an item in the DB', ({ given, when, then }) => {

        let aDB
        let found = null;

        given('my DB has the following items:', (table) => {
            aDB = new SimpleDB([]);
            table.forEach(row => {
                aDB.Add({name: row.name, height: row.height});
            });
        });

        when(/^I search for someone over (\d+) inches$/, (minHeight) => {
            found = aDB.Search(item => item.height > minHeight)
            if (found === null) {
                throw new Error("Search failed");
            }
        });

        then('I should see the following result:', (table) => {
            expect(found.name).toBe(table[0].name);
        });
    });
});
