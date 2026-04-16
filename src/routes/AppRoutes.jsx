import { BrowserRouter, Routes, Route } from 'react-router'

import Layout from '../layout/Layout'
import Text from '../components/Text'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Upload from '../pages/Upload'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='about-us' element={<Text>Sobre nosotros</Text>} />
                    <Route path='upload' element={<Upload />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </ BrowserRouter>
    )
}

export default AppRoutes