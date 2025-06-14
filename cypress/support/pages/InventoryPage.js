class InventoryPage {
    // Selectors
    elements = {
        sortDropdown: () => cy.get('.product_sort_container'),
        inventoryItems: () => cy.get('.inventory_item'),
        itemName: () => cy.get('.inventory_item_name'),
        itemPrice: () => cy.get('.inventory_item_price')
    }

    // Actions
    selectSortOption(option) {
        this.elements.sortDropdown().select(option);
    }

    getItemNames() {
        return this.elements.itemName().then($elements => {
            return Array.from($elements).map(el => el.textContent);
        });
    }

    getItemPrices() {
        return this.elements.itemPrice().then($elements => {
            return Array.from($elements).map(el => {
                // Remove $ and convert to number
                return parseFloat(el.textContent.replace('$', ''));
            });
        });
    }

    verifyPriceSort(ascending = true) {
        this.getItemPrices().then(prices => {
            const sortedPrices = [...prices].sort((a, b) => ascending ? a - b : b - a);
            expect(prices).to.deep.equal(sortedPrices);
        });
    }

    verifyNameSort(ascending = true) {
        this.getItemNames().then(names => {
            const sortedNames = [...names].sort((a, b) => {
                return ascending ? a.localeCompare(b) : b.localeCompare(a);
            });
            expect(names).to.deep.equal(sortedNames);
        });
    }
}

module.exports = new InventoryPage(); 