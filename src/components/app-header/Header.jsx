
import {Link} from 'react-router-dom'

import './Header.css'



function Header(){
    return (
        <header className="container">
                <div class="header">
                    <h1 className='header__title'>Наша продукция</h1>
                    <div>
                        <p className='header__total'>
                            <span>3</span> товара<br></br>
                            на сумму <span>3 500</span> ₽
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