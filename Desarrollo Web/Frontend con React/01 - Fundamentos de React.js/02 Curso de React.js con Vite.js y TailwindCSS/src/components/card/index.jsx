'use client'
import { useContext } from "react"
import { AppContext } from "../../context"
import { GrAdd, GrCheckmark } from "react-icons/gr";
const index = (item) => {
    const {count, setCount, setDetailOpen, setProductDetail, shoppingCart, setCartShopping, setCartOpen, cartTotal, setCartTotal} = useContext(AppContext)
    const handleCount = (price) => {
        const newCart = shoppingCart;
        newCart.push(item); 
        setCartShopping(newCart)
        setCount(count + 1)
        setCartTotal(cartTotal + price)
    }
    const handleDetail  = () => {
        setProductDetail(item)
        setDetailOpen(true)
        setCartOpen(false)

    } 
    const renderIcon = (id) => {
        const inCart = shoppingCart.some((item) => item.item.id === id);
        if(inCart) {
            return (<div className="absolute top-0 right-0 flex justify-center items-center rounded-full bg-white w-6 h-6 mt-1 mr-1 cursor-pointer"><GrCheckmark/></div>)
        }else{
            return (<div className="absolute top-0 right-0 flex justify-center items-center rounded-full bg-white w-6 h-6 mt-1 mr-1 cursor-pointer" onClick={() => handleCount(item.item.price)}><GrAdd/></div>)
        }
    }    

    return (
        <div className="bg-white rounded-lg cursor-pointer w-56 h-60" onClick={handleDetail}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-2 left-2 bg-white/60 rounded-lg p-1 text-sm text-black">{item.item.category}</span>
                <img className="w-full h-full object-cover rounded-lg" src={item.item.image} alt="Info"/>
                {renderIcon(item.item.id)} 
                <figcaption className="flex p-1 justify-between items-center">
                    <h3 className="overflow-hidden whitespace-nowrap text-ellipsis max-w-md">{item.item.title}</h3>
                    <p className="font-bold text-xl px-1">${item.item.price}</p>
                </figcaption>
            </figure>
        </div>
    )
}

export default index