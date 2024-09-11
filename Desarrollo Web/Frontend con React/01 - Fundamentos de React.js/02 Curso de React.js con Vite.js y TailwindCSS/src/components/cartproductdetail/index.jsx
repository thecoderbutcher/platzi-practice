import { useContext } from "react"
import { AppContext } from "../../context"
import { GrClose } from "react-icons/gr"; 
import { Link } from "react-router-dom";
const CartProductDetail = () => {
    const {shoppingCart, setCartShopping, setCount, count, cartTotal, setCartTotal, order, setOrder} = useContext(AppContext)
    const handleDeleteProduct = (id, price) => {
        const newCart = shoppingCart.filter((item) => item.item.id !== id);
        setCartShopping(newCart)
        setCount(count - 1)
        setCartTotal(cartTotal - price)
    }
    
    const handleCheckout = () => {
        const orderToAdd = {
            date: Date.now(),
            products: shoppingCart,
            total: shoppingCart.length,
            totalPrice: cartTotal
        }
        setOrder([...order, orderToAdd])
        setCartShopping([])
        setCount(0)
        setCartTotal(0)
    }

    return (
        <div className="flex flex-col flex-1">
            <div className="flex flex-col flex-1">  
                {shoppingCart.map((item) => (
                    <figure key={item.item.title} className="flex justify-around items-center p-4 border">
                        <img className="w-24 h-24 object-contain" src={item.item.image} alt="Info"/> 
                        <figcaption className="flex relative flex-col px-8 text-end overflow-hidden whitespace-nowrap text-ellipsis max-w-md">
                            <div className="overflow-hidden whitespace-nowrap text-ellipsis max-w-xs">
                                <h3 className="">{item.item.title}</h3>
                                <span className="text-black/50">{item.item.category}</span>
                                <p className="font-bold text-2xl py-2">${item.item.price} </p>
                                
                            </div>
                            <div className="absolute top-0 -right-0 flex justify-center items-center rounded-full bg-gray-400 text-white w-6 h-6 mt-1 mr-1 cursor-pointer" onClick={() => handleDeleteProduct(item.item.id, item.item.price)}><GrClose/></div>
                        </figcaption>
                    </figure> 
                ))}
            </div>
            <p className="p-2 text-end text-xl font-semibold">Total: ${Math.round(cartTotal)}</p>
            <Link to={'/order'}>
                <button onClick={() => handleCheckout()} className="p-2 bg-black text-white rounded-lg mx-20">Checkout</button>
            </Link>
        </div>
    )
}

export default CartProductDetail