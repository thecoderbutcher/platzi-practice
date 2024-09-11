import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Account from '../Account'
import Orders from '../Orders'
import Order from '../Order'
import SignIn from '../SignIn'
import NotFound from '../NotFound'

import './App.css' 
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import { AppProvider } from '../../context'

const AppRoutes = () => {
    let routes = useRoutes([
        {path: '/', element: <Home/>},
        {path: '/account', element: <Account/>},
        {path: '/orders', element: <Orders/>},
        {path: '/order', element: <Order/>},
        {path: '/signin', element: <SignIn/>},
        {path: '*', element: <NotFound/>},
    ]);
    return routes;
}
const App = () => { 
    return (
        <AppProvider>
            <BrowserRouter> 
                <Navbar/>
                <Layout>    
                    <AppRoutes/>
                </Layout>
            </BrowserRouter> 
        </AppProvider>
    )
}

export default App
