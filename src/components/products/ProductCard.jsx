import Box from "../Box"
import Text from "../Text"
import Col from "../../layout/components/Col"
import Button from "../Button"

function ProductCard({
    name,
    image,
    shortDescription,
    price
}) {
    return (
        <Col 
            size={{
                xs: 12,
                md: 6,
                lg: 4,
                xl: 3,
            }}
        >
            <Box className="card__product-container">
                <img src={image} alt={name} className="card__product-image" />
                <Box className="card__product-content">
                    <Text as="h3">{name}</Text>
                    <Text className="card__product-description">Descipción corta: {shortDescription}</Text>
                    <Text as="span" className="card__product-amount">$ {price},-</Text>
                    <Box className="card__product-content-button">
                        <Button text="Agregar al carrito" />
                    </Box>
                </Box>
            </Box>
        </Col>
    )
}

export default ProductCard