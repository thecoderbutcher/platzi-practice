import { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { AppContext } from "../../context";
const ProductDetail = () => {
    const { setDetailOpen, productDetail} = useContext(AppContext) 
    return (
        <aside className="w-[360px] flex flex-col fixed right-0 top-16 border border-black bg-white/90 h-[calc(100vh-65px)]">
            <div className="flex justify-between items-center p-4">
                <h3 className="text-xl">Product Detail</h3>
                <div className="cursor-pointer" onClick={() => setDetailOpen(false)}><GrClose/></div>
            </div> 
            <figure className="flex flex-col p-4">
                <img className="" src={productDetail.item.image} alt="Info"/> 
                <figcaption className="flex flex-col">
                    <span className="text-black/50">{productDetail.item.category}</span>
                    <h3 className="">{productDetail.item.title}</h3>
                    <p className="text-black/50 text-sm">{productDetail.item.description}</p>
                    <p className="font-bold text-2xl py-2">${productDetail.item.price}</p>
                </figcaption>
            </figure> 
        </aside>
    )
}

export default ProductDetail