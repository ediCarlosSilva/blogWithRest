import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Navbar from '../components/navbar';
import Comments from '../pages/Comments';
import AboutWritter from '../pages/AboutWritter';
import Escritores from '../pages/Escritores';

export default function ApplicationRoutes() {
    return (
        // utilizado basename para publicar no github pages
        // basename={process.env.PUBLIC_URL}
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/escritores" element={<Escritores />} />
                <Route path="/comments/:postId?/:userId?" element={<Comments />} />
                <Route path="/aboutWritter" element={<AboutWritter />} />
            </Routes>
        </BrowserRouter>
    )
}