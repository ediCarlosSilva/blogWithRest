import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Navbar from '../components/navbar'

export default function ApplicationRoutes() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post" element={<h1>Post</h1>} />
                <Route path="/sobre" element={<h1>Sobre</h1>} />
            </Routes>
        </BrowserRouter>
    )
}