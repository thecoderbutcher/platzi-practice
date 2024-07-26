import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

const Search = () => {
    const {searchValue, setsearchValue} = useContext(TaskContext);
    const handleSearch = (e) => {
        setsearchValue(e.target.value)
    }
    return (
        <div className="w-full md:w-3/4 lg:w-2/4 xl:w-1/4 py-4">
            <input 
                className="w-full p-2 rounded-lg placeholder:text-center focus:bg-zinc-800 focus:shadow-md focus:shadow-blue-400 focus:outline-none" 
                type="text" 
                placeholder="Search tasks" 
                value={searchValue}
                onChange={handleSearch}/>
        </div>
    )
}

export default Search