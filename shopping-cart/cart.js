function addItem(cart, item, quantity) {
    if (!Array.isArray(cart)) return false;
    if (typeof item !== "string" || item.trim() === "") return false;
    if (typeof quantity !== "number" || quantity <= 0) return false;

    const existingItem = cart.find(cartItem => cartItem.item === item);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            item,
            quantity
        });
    }

    return true;
}

function removeItem(cart, item) {
    if (!Array.isArray(cart)) return false;

    const index = cart.findIndex(cartItem => cartItem.item === item);

    if (index === -1) {
        return false;
    }

    cart.splice(index, 1);
    return true;
}

function getTotalItems(cart) {
    if (!Array.isArray(cart) || cart.length === 0) {
        return 0;
    }

    return cart.reduce((total, item) => total + item.quantity, 0);
}

module.exports = {
    addItem,
    removeItem,
    getTotalItems
};