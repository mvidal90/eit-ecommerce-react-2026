import { useState } from "react"
import { Link } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import Box from "../../components/Box"
import Button from "../../components/Button"
import Cart from "../../components/cart/Cart"
import Container from "./Container"
import Text from "../../components/Text"

function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <Box
                as="header"
                className="header__container"
            >
                <Container className="d-flex justify-between align-center">
                    <Box className="d-flex">
                        <Button 
                            aria-label="Abrir menú"
                            variant="solid"
                            color="primary"
                            className="header__button-burger-menu"
                            onClick={() => setMenuOpen(!menuOpen)}
                            text={<FontAwesomeIcon icon={faBars} size="lg" />}
                        />
                        <Text
                            as="h1"
                        >
                            Juguetería cósmica
                        </Text>
                    </Box>
                    <Box className="header__content">
                        <Box className="header__navigation">
                            <Box as="ul">
                                <Box as="li"><Link className="header__navigation-link" to="/">Home</Link></Box>
                                <Box as="li"><Link className="header__navigation-link" to="/about-us">Sobre Nosotros</Link></Box>
                                <Box as="li"><Link className="header__navigation-link" to="/upload">Alta</Link></Box>
                                <Box as="li"><Link className="header__navigation-link" to="/contact">Contacto</Link></Box>
                            </Box>
                        </Box>
                        <Cart />
                    </Box>
                </Container>
            </Box>
            {
                menuOpen && (
                    <Box as="aside" className="header__menu">
                        <Box className="header__content">
                                <Box as="nav" className="header__navigation">
                                    <Box as="ul">
                                        <Box as="li">
                                            <Link className="header__navigation-link" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                                        </Box>
                                        <Box as="li">
                                            <Link className="header__navigation-link" to="/about-us" onClick={() => setMenuOpen(false)}>Sobre Nosotros</Link>
                                        </Box>
                                        <Box as="li">
                                            <Link className="header__navigation-link" to="/upload" onClick={() => setMenuOpen(false)}>Alta</Link>
                                        </Box>
                                        <Box as="li">
                                            <Link className="header__navigation-link" to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link>
                                        </Box>
                                    </Box>
                                </Box>
                        </Box>
                    </Box>
                )
            }
        </>
    )
}

export default Header