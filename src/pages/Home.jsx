
import { Suspense, useState } from "react"
import Text from "../components/Text"
import ProductList from "../components/products/ProductList"
import { getProducts } from "../api/products"

function Home() {

    const [pageNumber, setPageNumber] = useState(1)
    const productsPromise = getProducts(pageNumber)

    return (
        <>
            <Text as="h2">Bienvenidos a la juguetería cósmica</Text>
            <Suspense fallback={<Text>Cargando productos...</Text>}>
                <ProductList
                    getProductsPromise={productsPromise}
                    setPageNumber={setPageNumber} />
            </Suspense> 
        </>
    )
}

export default Home