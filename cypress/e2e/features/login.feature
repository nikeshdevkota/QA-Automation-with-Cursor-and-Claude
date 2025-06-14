Feature: Login Functionality
  As a user
  I want to be able to log in to the Sauce Demo website
  So that I can access the inventory

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid credentials
    Then I should be logged in successfully
    And I should see the inventory page

  Scenario: Failed login with invalid credentials
    Given I am on the login page
    When I enter invalid credentials
    Then I should see an error message
    And I should remain on the login page

  Scenario: Failed login with locked out user
    Given I am on the login page
    When I enter locked out user credentials
    Then I should see the locked out error message
    And I should remain on the login page 