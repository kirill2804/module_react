import products from "../../data/data"
import Item from "../card-Item"

import './Cards.css'

function Cards(){
    return (
        <main className="container products products__list">
        {products.map((item) => (
            <section key={item.id} className="products__item">
                <Item 
                    img={"./images/cards/" + item.img}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    weight={item.weight}
                />
            </section>
        ))}

        </main>
    )

}

export default Cards