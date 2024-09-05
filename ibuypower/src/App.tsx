import { Navigation } from './components/Navigation/Navigation'
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Register } from './components/Auth/Register/Register';
import { Login } from './components/Auth/Login/Login';

function App() {

    return (
        <>
            <Navigation />

            <Routes>
                <Route path='/' element={<Home />} ></Route>
                <Route path='/gaming-pcs' element></Route>
                <Route path='/gaming-pcs/:id' element></Route>
                <Route path='/gaming-laptops' element></Route>
                <Route path='/gaming-laptops/:id' element></Route>
                <Route path='/support' element></Route>
                <Route path='/about-us' element></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
            </Routes>

            <Footer />
        </>
    )
}

export default App
