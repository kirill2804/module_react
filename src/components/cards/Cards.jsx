import products from "../../data/data"
import Item from "../card-Item"

import './Cards.css'

function Cards(){
    return (
        <div className="container">
        <main className="products__list">
        {products.map((item) => (
            <section key={item.id} className="products__item">
                <Item 
                    id={item.id}
                    img={"./images/cards/" + item.img}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    weight={item.weight}
                    count={item.count}
                />
            </section>
        ))}

        </main>
        </div>
    )

}

export default Cards