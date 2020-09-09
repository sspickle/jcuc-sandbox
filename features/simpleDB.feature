Feature: Working with the SimpleDB
 
    Scenario: Adding a single item to the DB
        Given I have previously created a database
        When I add a single item to the DB
        Then I should see its size increase

    Scenario: Find an item in the DB
        Given my DB has the following items:
        | name    | height   |
        | Joe     | 69.1     |
        | Sarah   | 64.2     |
        | Shaq    | 86.0     |
        When I search for someone over 80 inches
        Then I should see the following result:
        | name    | height   |
        | Shaq    | 86.0     |
