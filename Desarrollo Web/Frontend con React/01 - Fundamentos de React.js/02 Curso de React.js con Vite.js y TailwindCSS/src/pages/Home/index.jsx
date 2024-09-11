import { useEffect, useState, useContext } from "react";
import Card from "../../components/card"
import ProductDetail from "../../components/productdetail";
import { AppContext } from "../../context"
import CartProducts from "../../components/cartproducts";

const Home = () => {
    const [items, setItems] = useState([]);
    const {detailsOpen, cartOpen} = useContext(AppContext)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(response =>  response.json())
        .then(data => setItems(data))
    },[])
    
    return (
        <div>
            Home
            <section className="grid grid-cols-5 gap-8">
                { items && items.map((item) => <Card key={item.id} item={item} />) }
            </section>
            {detailsOpen && <ProductDetail/>}
            {cartOpen && <CartProducts/>}
        </div>
    )
}

export default Home