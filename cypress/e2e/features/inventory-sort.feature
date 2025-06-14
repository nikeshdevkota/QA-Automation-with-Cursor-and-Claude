Feature: Inventory Sorting
  As a logged-in user
  I want to sort the inventory items
  So that I can view products in my preferred order

  Background:
    Given I am on the login page
    When I enter valid credentials
    Then I should be logged in successfully

  Scenario: Sort inventory by price low to high
    When I select sort option "Price (low to high)"
    Then the inventory should be sorted by price in ascending order

  Scenario: Sort inventory by price high to low
    When I select sort option "Price (high to low)"
    Then the inventory should be sorted by price in descending order

  Scenario: Sort inventory by name A to Z
    When I select sort option "Name (A to Z)"
    Then the inventory should be sorted by name in ascending order

  Scenario: Sort inventory by name Z to A
    When I select sort option "Name (Z to A)"
    Then the inventory should be sorted by name in descending order 