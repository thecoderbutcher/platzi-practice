import { useContext } from "react"
import { AppContext } from "../../context"
import CartProductDetail from "../cartproductdetail"
const index = () => {
    const {shoppingCart} = useContext(AppContext) 
    return (
        <aside className="w-[360px] flex flex-col fixed right-0 top-16 border border-black bg-white/90 h-[calc(100vh-65px)] overflow-y-scroll">
            <div className="flex justify-between items-center p-4">
                <h3 className="text-xl font-semibold">Products Detail</h3> 
            </div> 
            {shoppingCart.length === 0 && <p className="px-4">No hay productos en el carrito</p>}
            {shoppingCart && <CartProductDetail/>}
        </aside>
    )
}

export default index