const { When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const InventoryPage = require('../pages/InventoryPage');

When('I select sort option {string}', (option) => {
    InventoryPage.selectSortOption(option);
});

Then('the inventory should be sorted by price in ascending order', () => {
    InventoryPage.verifyPriceSort(true);
});

Then('the inventory should be sorted by price in descending order', () => {
    InventoryPage.verifyPriceSort(false);
});

Then('the inventory should be sorted by name in ascending order', () => {
    InventoryPage.verifyNameSort(true);
});

Then('the inventory should be sorted by name in descending order', () => {
    InventoryPage.verifyNameSort(false);
}); 