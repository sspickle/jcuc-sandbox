Feature: Working with the recipes
 
    Scenario: Adding a single ingredient to a recipe
        Given I have previously created a recipe
        When I add a single ingredient to the recipe:
        | name  | amount | units |
        | milk  | 0.5    | cups  |
        Then I should see the number of ingredients increase by 1

