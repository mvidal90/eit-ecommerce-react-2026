
import { Suspense } from "react"
import Text from "../components/Text"
import ProductList from "../components/products/ProductList"
import { getProducts } from "../api/products"

function Home() {

    const productsPromise = getProducts()

    return (
        <>
            <Text as="h2">Bienvenidos a la juguetería cósmica</Text>
            <Suspense fallback={<Text>Cargando productos...</Text>}>
                <ProductList getProductsPromise={productsPromise} />
            </Suspense> 
        </>
    )
}

export default Home