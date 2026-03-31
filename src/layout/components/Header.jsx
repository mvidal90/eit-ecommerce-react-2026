import { Link } from "react-router"

import Container from "./Container"
import Box from "../../components/Box"
import Text from "../../components/Text"

function Header() {
    return (
        <Box
            as="header"
            className="header__container"
        >
            <Container className="d-flex justify-between">
                <Text
                    as="h1"
                >
                    Juguetería cósmica
                </Text>
                <Box className="header__content">
                    <Box className="header__navigation">
                        <Box as="ul">
                            <Box as="li"><Link className="header__navigation-link" to="/">Home</Link></Box>
                            <Box as="li"><Link className="header__navigation-link" to="/about-us">Sobre Nosotros</Link></Box>
                            <Box as="li"><Link className="header__navigation-link" to="/upload">Alta</Link></Box>
                            <Box as="li"><Link className="header__navigation-link" to="/contact">Contacto</Link></Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Header