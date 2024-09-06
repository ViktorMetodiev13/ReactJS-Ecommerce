import { Navigation } from './components/Navigation/Navigation'
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Register } from './components/Auth/Register/Register';
import { Login } from './components/Auth/Login/Login';
import { ResetPassword } from './components/Auth/ResetPassword/ResetPassword';
import { NotFound } from './components/NotFound/NotFound';
import { GamingLaptops } from './components/Products/GamingLaptops/GamingLaptops';

function App() {

    return (
        <>
            <Navigation />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products/gaming-pcs' element />
                <Route path='/products/gaming-pcs/:id' element />
                <Route path='/products/gaming-laptops' element={<GamingLaptops />} />
                <Route path='/products/gaming-laptops/:id' element />
                <Route path='/support' element />
                <Route path='/about-us' element />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login/reset-password' element={<ResetPassword />} />
                <Route path='/cart' element />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
