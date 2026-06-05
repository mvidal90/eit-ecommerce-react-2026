import { useContext, useEffect, useState } from 'react'
import { Wallet } from '@mercadopago/sdk-react'

import Text from '../components/Text'
import Box from '../components/Box'
import CartItem from '../components/cart/CartItem'

import ProductCartContext from '../context/ProductCartContext'
import { postPreferenceMP } from '../api/checkout'

function Checkout() {
    const { productsCartQuantity, productsCart } = useContext(ProductCartContext)
    const [preferenceId, setPreferenceId] = useState(null)

    useEffect(() => {
        const itemsList = productsCart.map(({ product, quantity }) => ({
            id: product.id,
            title: product.name,
            picture_url: product.image,
            quantity,
            unit_price: product.price,
        }))
        postPreferenceMP({ items: itemsList })
            .then(({ preferenceId }) => setPreferenceId(preferenceId))
    }, [])

    const totalAmount = productsCart
        .reduce(
            (acc, { quantity, product }) => acc + quantity * product.price,
            0
        )


    return (
        <>
            <Text as="h2">Completá tu compra</Text>
            <Text as="h3">Tus productos seleccionados</Text>
            <Box className="cart-item__grid">
                {
                    productsCartQuantity > 0 ? (
                        productsCart.map(({ product, quantity }) => (
                            <CartItem key={product.id} quantity={quantity} {...product} />
                        ))
                    ) : (
                        <Text as="p">No tienes productos seleccionados</Text>
                    )
                }
                <Text as="h3">Total a pagar: $ {totalAmount},-</Text>
            </Box>
            <Box className="cart__actions">
                {
                    preferenceId &&
                        <Wallet 
                            initialization={{ preferenceId: preferenceId }}
                            customization={{ texts: {valueProp: "smart_option"} }}
                        />
                }
            </Box>
        </>
    )
}  

export default Checkout