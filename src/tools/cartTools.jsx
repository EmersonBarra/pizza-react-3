export const increaseCount = (cart, id) => {
    return cart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    );
};

export const decreaseCount = (cart, id) => {
    return cart
        .map((pizza) =>
            pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0);
};

export const calculateTotal = (cart) => {
    return cart.reduce((sum, pizza) => sum + pizza.price * pizza.count, 0);
};
