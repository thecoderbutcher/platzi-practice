import { NavLink } from "react-router-dom"
import {  AppContext } from "../../context"
import { useContext } from "react"
import { GrCart } from "react-icons/gr";
const Navbar = () => {
    const {count, cartOpen, setCartOpen, setDetailOpen  } = useContext(AppContext)
    const activeLink = "color-green-50 font-bold"

    const handleCartClick = () => {
        setDetailOpen(false)
        setCartOpen(!cartOpen);
    }
    return (
        <nav className="flex top-0 w-full justify-between items-center p-4 bg-cyan-500 text-white text-md font-light fixed z-10">
            <ul className="flex gap-4 items-center">
                <li className="text-2xl font-semibold">
                    <NavLink to='/'>
                        MaxStore
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/'
                        className={({isActive}) => isActive ? activeLink : undefined}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        className={({isActive}) => isActive ? activeLink : undefined}
                    >
                        Clothes
                    </NavLink>
                </li>
            </ul>
            <ul className="flex gap-4">
                <li> 
                    fake@email.com  
                </li>
                <li>
                    <NavLink 
                        to='/account'
                        className={({isActive}) => isActive ? activeLink : undefined}
                    >
                        Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/orders'
                        className={({isActive}) => isActive ? activeLink : undefined}
                    >
                        Orders
                    </NavLink>
                </li>
                <li onClick={handleCartClick} className="flex gap-2 items-center"><GrCart/> {count}</li>
            </ul>
            
        </nav>
    )
}

export default Navbar;