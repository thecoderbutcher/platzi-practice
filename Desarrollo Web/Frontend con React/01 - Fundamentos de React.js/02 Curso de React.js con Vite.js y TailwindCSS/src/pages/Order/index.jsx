import { useContext } from "react"
import { AppContext } from "../../context"
const Order = () => {
    const {order} = useContext(AppContext)
    return (
        <div className="flex flex-col flex-1">  
            {order?.slice(-1).map((item) => (
                <div key={item.date} className="flex flex-col flex-1">
                    {item.products.map((product) => (
                        <figure key={product.item.title} className="flex justify-around items-center p-4 border">
                            <img className="w-24 h-24 object-contain" src={product.item.image} alt="Info"/> 
                            <figcaption className="flex relative flex-col px-8 text-end overflow-hidden whitespace-nowrap text-ellipsis max-w-md">
                                <div className="overflow-hidden whitespace-nowrap text-ellipsis max-w-xs">
                                    <h3 className="">{product.item.title}</h3>
                                    <span className="text-black/50">{product.item.category}</span>
                                    <p className="font-bold text-2xl py-2">${product.item.price} </p> 
                                </div> 
                            </figcaption>
                        </figure> 
                    ))}
                    <p className="p-2 text-end text-xl font-semibold">Total: ${item.totalPrice}</p> 
                </div>
            ))}
        </div>
    )
}

export default Order
/* 

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

*/