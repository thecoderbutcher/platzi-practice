import Link from "next/link"


export const Header = () => {
    return (
        <header className="flex justify-center">
            <nav className="fixed top-0 w-full">
                <ul className="flex gap-2 pt-4 justify-center">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href={"/store"}>Store</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header