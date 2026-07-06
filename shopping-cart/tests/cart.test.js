const {
    addItem,
    removeItem,
    getTotalItems
} = require("../cart");

describe("Shopping Cart Tests", () => {

    // addItem Tests

    test("adds a valid item", () => {
        const cart = [];

        expect(addItem(cart, "Apple", 3)).toBe(true);
        expect(cart).toEqual([
            {
                item: "Apple",
                quantity: 3
            }
        ]);
    });

    test("does not add an item with negative quantity", () => {
        const cart = [];

        expect(addItem(cart, "Apple", -2)).toBe(false);
        expect(cart.length).toBe(0);
    });

    test("does not add an item with quantity of zero", () => {
        const cart = [];

        expect(addItem(cart, "Apple", 0)).toBe(false);
        expect(cart.length).toBe(0);
    });

    // removeItem Tests

    test("removes an existing item", () => {
        const cart = [
            { item: "Apple", quantity: 2 }
        ];

        expect(removeItem(cart, "Apple")).toBe(true);
        expect(cart.length).toBe(0);
    });

    test("returns false when removing an item that doesn't exist", () => {
        const cart = [
            { item: "Apple", quantity: 2 }
        ];

        expect(removeItem(cart, "Orange")).toBe(false);
        expect(cart.length).toBe(1);
    });

    test("removes the last remaining item", () => {
        const cart = [
            { item: "Milk", quantity: 1 }
        ];

        removeItem(cart, "Milk");

        expect(cart).toEqual([]);
    });

    // getTotalItems Tests

    test("calculates total items correctly", () => {
        const cart = [
            { item: "Apple", quantity: 2 },
            { item: "Orange", quantity: 3 }
        ];

        expect(getTotalItems(cart)).toBe(5);
    });

    test("returns 0 for an empty cart", () => {
        expect(getTotalItems([])).toBe(0);
    });

    test("handles large quantities", () => {
        const cart = [
            { item: "Laptop", quantity: 1000 },
            { item: "Phone", quantity: 500 }
        ];

        expect(getTotalItems(cart)).toBe(1500);
    });

});