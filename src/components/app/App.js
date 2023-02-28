
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Showcase from "../../pages/showcase"
import ShoppingСart from "../../pages/shoppingcart.jsx"

import './App.css'

function App(){
    return (
        <Router>
            <Routes>
                <Route path = "/" element = {<Showcase />} />
                <Route path = "/basket" element = {<ShoppingСart/>} />
            </Routes>
        </Router>
    )
}


export default App