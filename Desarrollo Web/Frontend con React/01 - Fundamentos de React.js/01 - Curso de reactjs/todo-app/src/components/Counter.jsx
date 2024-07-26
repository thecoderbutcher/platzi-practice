import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

const Counter = () => {
    const {totalTask, completedTask} = useContext(TaskContext)
    return (
        <section className="flex justify-between text-center gap-8 p-4 mt-4 bg-gray-600/50 rounded-lg w-full md:w-3/4 lg:w-2/4 xl:w-1/4">
            <article className="">
                <p>{completedTask}</p>
                <p>Task completed</p>
            </article>
            <article>
                <p>{totalTask - completedTask}</p>
                <p>Task left</p>
            </article>
            <article>
                <p>{totalTask}</p>
                <p>Task Total</p>
            </article>
        </section>
    )
}

export default Counter