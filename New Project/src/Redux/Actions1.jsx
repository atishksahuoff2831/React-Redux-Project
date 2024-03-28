export const increment = () => ({ type: "INCREMENT" });
export const decrement = () => ({ type: "DECREMENT" });
export const incrementByValue = (value) => ({ type: "INCREMENT_VALUE", payload: value });
