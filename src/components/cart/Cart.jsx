import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

import ProductCartContext from "../../context/ProductCartContext"

import Box from "../Box"
import Button from "../Button"
import Badge from "../Badge"
import Modal from "../Modal"
import Text from "../Text"
import CartItem from "./CartItem"

function Cart() {
    const { productsCartQuantity, productsCart } = useContext(ProductCartContext)
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const totalAmount = productsCart
        .reduce(
            (acc, { quantity, product }) => acc + quantity * product.price,
            0
        )

    return (
        <>
            <Box role="button" onClick={() => setOpen(!open)}>
                <Badge value={productsCartQuantity}>
                    <FontAwesomeIcon icon={faShoppingCart} size="xl" />
                </Badge>
            </Box>
            <Modal isOpen={open} handleClose={() => setOpen(false)}>
                <Text as="h2">Tus productos seleccionados</Text>
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
                    <Button text="Ir a pagar" onClick={() => {
                        setOpen(false)
                        navigate("/checkout")
                    }} disabled={!productsCartQuantity}/>
                </Box>
            </Modal>
        </>
    )
}

export default Cart