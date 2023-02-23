
import "./Item.css"

function Item(props){
    return (
        <>
            
            <img src={props.img} alt={props.name} className="product__image" />
            <h2 className="product__title">{props.name}</h2>
            <p className="product__text">{props.description}</p>

            <p className="product__features">
                <span className="product__price">{props.price}</span> / <span className="product__weight">{props.weight}</span>
            </p>
            <button className="product__btn-add">
                <img src="./images/ui/icon-add.svg" alt="добавить продукт" />
            </button>
        </>
    )
}

export default Item