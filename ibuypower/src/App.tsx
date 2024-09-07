import { useRoutes } from 'react-router-dom';

import { routes } from './routes'

import { Navigation } from './components/Navigation/Navigation'
import { Footer } from './components/Footer/Footer';


function App() {
    const routing = useRoutes(routes)

    return (
        <>
            <Navigation />

            {routing}

            <Footer />
        </>
    )
}

export default App
