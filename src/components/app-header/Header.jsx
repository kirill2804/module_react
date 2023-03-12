
import {Link} from 'react-router-dom'

import { useSelector } from 'react-redux'

import './Header.css'



function Header(){

    const counterProd = useSelector(state => state.counterProd);
    const totalPrice = useSelector(state => state.total)

    return (
        <header className="container">
                <div className="header">
                    <h1 className='header__title'>Наша продукция</h1>
                    <div>
                        <p className='header__total'>
                            <span>{counterProd}</span> товара<br></br>
                            на сумму <span>{totalPrice}</span> ₽
                        </p>

                        <Link to="/basket" className='header__basket'>
                        <img srcSet="./images/ui/icon-basket.svg" alt="Корзина" />
                        </Link>
                    </div>
                </div>
        </header>
    )
}

export default Header