import { use } from "react"

import Grid from "../../layout/components/Grid"
import ProductCard from "./ProductCard"

function ProductList({ getProductsPromise }) {

    const products = use(getProductsPromise)

    return (
        <Grid>
            {
                products.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))
            }
        </Grid>
    )
}

export default ProductList