import { createContext } from "react";

const ProductCartContext = createContext({
    productsCart: [],
    productsCartQuantity: 0,
    addProductToCart: () => {},
    removeProductToCart: () => {},
})

export default ProductCartContext;