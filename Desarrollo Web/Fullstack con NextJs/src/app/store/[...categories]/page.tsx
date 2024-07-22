interface CategorProps{
    params:{
        categories: string[],
        searchParams?: string
    }
}

export default function page(props:CategorProps){
    const {categories} = props.params
    return (
        <div>{categories}</div>
    )
}