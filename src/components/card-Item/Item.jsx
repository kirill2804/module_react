
import { useDispatch } from "react-redux"

import { initStateStore } from "../../store"

import "./Item.css"


function Item(props){

    const dispatch = useDispatch()

    function productHundler(e){
        initStateStore.priceItem = props.price
      
       const dataBasket = {
            id:props.id,
            img: props.img,
            name: props.name,
            price: props.price
       }

       dispatch({
            type:"ADD_PROD",
            data: dataBasket,
        })

        e.target.disabled = true;

    }


    
    return (
        <>
            <div className="product__image">
                <img src={props.img} alt={props.name} />
            </div>
            <h2 className="product__title">{props.name}</h2>
            <p className="product__text">{props.description}</p>

            <p className="product__features">
                <span className="product__price">{props.price} ₽</span>
                <span> / </span>
                <span className="product__weight">{props.weight}</span>
            </p>
            <button onClick={productHundler} className="product__btn-add" >
            </button>

        </>
    )
}

export default Item