
import Item from '../card-Item'

import {Link} from 'react-router-dom'

import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux"

import './Basket.css'


function Basket(props){
    const dispatch = useDispatch()
    const totalPrice = useSelector(state => state.total)
    const productBasked = useSelector(state => state.productBasked)

    function productRemove(e){
        dispatch({
            type:"REMOVE_PROD",
            id: parseInt(e.target.id)
        })
    }

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

                        {productBasked.map((item, index) => (
                            <div key={index} className='basket__item'>

                                <Item 
                                    id={item.id}
                                    img={item.img}
                                    name={item.name}
                                    price={item.price}
                                />

                                <button id={item.id}  onClick={productRemove} className="product__btn-remove"></button>
                            </div>
                        ))}
                </main>
            </div>

            <footer className='basket__footer footer'>
                <div className='container footer__wrapper'>
                    <p className='footer__total'>
                         Заказ на сумму:<span className='footer__amount'>{totalPrice} ₽</span> 
                    </p>
                    <button className='button-place-order'>Оформить заказ</button> 
                </div>
            </footer>
        </div>
    )
}


export default Basket