
import "./Item.css"

function Item(props){
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
            <button className="product__btn-add">
            </button>
        </>
    )
}

export default Item