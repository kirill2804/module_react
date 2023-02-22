import productsData from '../../../data/data.jsx'

// import img1 from '../../../data/images/1.png'

import ProductCard from '../../ProductCard'

import './OurProducts.css'

function OurProducts(props){

    return (
       <div className="container">

            <header className='header'>
                <h1 className='header__title'>Наша продукция</h1>
                <div className="header__basket">basket</div>
            </header>

            <main className="products__list">
                {productsData.map((item, i) => (
                    <ProductCard 
                        key={i} 
                        title={item.titleCardProduct}
                        desc={item.descCardProduct}
                        price={item.priceProduct}
                        weight={item.weightProduct}
                        img={item.imagesProduct}  />
                    ))}
            </main>
       </div>
    )
}


export default OurProducts