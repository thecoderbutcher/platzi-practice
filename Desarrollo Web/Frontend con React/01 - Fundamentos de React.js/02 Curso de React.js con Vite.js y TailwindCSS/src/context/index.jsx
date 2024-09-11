import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const [detailsOpen, setDetailOpen] = useState(false);
    const [productDetail, setProductDetail] = useState({});
    const [shoppingCart, setCartShopping] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartTotal, setCartTotal] = useState(0)
    const [order, setOrder] = useState([])
    return (
        <AppContext.Provider 
            value={{
                count, setCount,
                detailsOpen, setDetailOpen,
                productDetail, setProductDetail,
                shoppingCart, setCartShopping,
                cartOpen, setCartOpen,
                cartTotal, setCartTotal,
                order, setOrder
            }}
        >
            {children}
        </AppContext.Provider>
    )
}