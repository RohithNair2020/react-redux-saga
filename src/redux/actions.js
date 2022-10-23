export const addToCheckout = (productData) => {
    console.log(productData);
    return {
        type: 'ADD_TO_CHECKOUT',
        data: productData
    };
}