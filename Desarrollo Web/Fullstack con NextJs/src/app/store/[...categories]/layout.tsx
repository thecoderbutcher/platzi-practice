
export default function layout({children} : {children: React.ReactNode}) {
    return (
        <main>
            <nav>
                Navegacion para categorias
            </nav> 
            {children}    
        </main>
    )
}
