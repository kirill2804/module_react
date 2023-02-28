
import Item from '../card-Item'

import {Link} from 'react-router-dom'

import './Basket.css'


function Basket(props){

    return (
        <div className='basket'>
            <div className='container basket__wrapper'>
                <header className="basket__header">
                    <Link to="/" className="basket__link-back">
                        <img srcSet="./images/ui/icon-back.svg" alt="назад" />
                    </Link>
                    <h1 className='basket__title'>Корзина с выбранными товарами</h1>
                </header>

                <main className='basket__list'>
                        <div className='basket__item'>
                            <Item  
                                img="./images/cards/1.png"
                                name="Устрицы по рокфеллеровски" 
                                price="2 700"
                            />
                        </div>

                        <div className='basket__item'>
                        <Item  
                            img="./images/cards/2.png"
                            name="Креветки по-королевски в лимонном соке" 
                            price="1 820"
                        />
                        </div>

                        <div className='basket__item'>
                        <Item  
                            img="./images/cards/3.png"
                            name="Свиные ребрышки на гриле с зеленью" 
                            price="1 600"
                        />
                        </div>
                </main>
            </div>

            <footer className='basket__footer footer'>
                <div className='container footer__wrapper'>
                    <p className='footer__total'>
                         Заказ на сумму:<span className='footer__amount'>6 220 ₽</span> 
                    </p>
                    <button className='button-place-order'>Оформить заказ</button> 
                </div>
            </footer>
        </div>
    )
}


export default Basket