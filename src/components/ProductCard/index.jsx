
import BattonAdd from '../UI/ButtonAdd'

import './ProductCard.css'

function ProductCard(props){
    // console.log(data)
    return (

       
        <div className='product__item'>
            <img src={props.img} alt="" className="product__image"></img>
            <h2 className="product__title">{props.title}</h2>
            <p className="product__description">{props.desc}</p>

            <div className='product__parameter'>
                 <p>
                     <span>{props.price}&nbsp;₽&nbsp;</span>/&nbsp;
                     <span>{props.weight}&nbsp;г.</span>
                 </p>

                <BattonAdd />
            </div>
        </div>
    )
}

export default ProductCard