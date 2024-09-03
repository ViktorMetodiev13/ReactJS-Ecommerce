import { Navigation } from './components/Navigation/Navigation'
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';

function App() {

    return (
        <>
            <Navigation />

            <Routes>
                <Route path='/' element={<Home />} ></Route>
                <Route path='/gaming-pcs' element></Route>
                <Route path='/gaming-laptops' element></Route>
                <Route path='/support' element></Route>
                <Route path='/about-us' element></Route>
            </Routes>

            <Footer />
        </>
    )
}

export default App
