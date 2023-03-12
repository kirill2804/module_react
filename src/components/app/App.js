
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Showcase from "../../pages/showcase"
import ShoppingСart from "../../pages/shoppingcart.jsx"

import './App.css'

import { reduser } from "../../store"

const store = createStore(reduser)

const router = createBrowserRouter([
    {
        path: "/",
        element: <Showcase />
    },
    {
        path: "/basket",
        element: <ShoppingСart/>
    }
])


function App(){
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}


export default App