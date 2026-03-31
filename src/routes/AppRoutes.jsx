import { BrowserRouter, Routes, Route } from 'react-router'

import Layout from '../layout/Layout'
import Text from '../components/Text'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Text>Home Page</Text>} />
                    <Route path='about-us' element={<Text>Sobre nosotros</Text>} />
                    <Route path='upload' element={<Text>Alta de productos</Text>} />
                    <Route path="contact" element={<Text>Contacto</Text>} />
                </Route>
            </Routes>
        </ BrowserRouter>
    )
}

export default AppRoutes