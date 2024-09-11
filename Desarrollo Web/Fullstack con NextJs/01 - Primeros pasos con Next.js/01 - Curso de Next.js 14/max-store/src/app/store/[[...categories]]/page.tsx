interface CategoryProps{
    params:{
        categories:string[]
        searchParam?: string
    }
}

const page = (props: CategoryProps) => {
    const {categories} = props.params 
    return (
        <div>
            <h1>Super Store</h1>
            <p>Categoria: {categories}</p>
            <p>Search param: { }</p>
        </div>
    )
}

export default page