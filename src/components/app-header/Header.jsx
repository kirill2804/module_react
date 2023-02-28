
import './Header.css'

function Header(){
    return (
        <header className="container header">
                <h1 className='header__title'>Наша продукция</h1>
                <div>
                    <p className='header__total'>
                        <span>3</span> товара<br></br>
                        на сумму <span>3 500</span> ₽
                    </p>

                    <span className='header__basket'>
                    <img src="./images/ui/icon-basket.svg" alt="Корзина" />
                    </span>
                </div>
        </header>
    )
}

export default Header