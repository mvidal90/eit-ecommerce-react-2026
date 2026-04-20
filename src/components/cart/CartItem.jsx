import Box from '../Box'
import Col from '../../layout/components/Col'
import Grid from '../../layout/components/Grid'
import Text from '../Text'

function CartItem({
    name,
    image,
    price,
    quantity
}) {
    return (
        <Box className="cart-item__card-container">
            <Grid>
                <Col size={{xs: 6, md: 3}}>
                    <img src={image} alt={name} className="cart-item__card-image" />
                </Col>
                <Col size={{xs: 12, md: 3}} className="cart-item__name-container">
                    <Text as="h3">{name}</Text>
                </Col>
                <Col size={{xs: 6, md: 3}} className="cart-item__name-container">
                    <Text as="span">Cantidad: {quantity}</Text>
                </Col>
                <Col size={{xs: 6, md: 3}} className="cart-item__amount-container">
                    <Text as="span" className="cart-item__card-amount">$ {price * quantity},-</Text>
                </Col>
            </Grid>
        </Box>
    )
}

export default CartItem