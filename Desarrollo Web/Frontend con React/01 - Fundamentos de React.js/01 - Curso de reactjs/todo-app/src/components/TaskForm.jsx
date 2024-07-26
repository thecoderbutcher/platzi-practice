import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext"

const TaskForm = () => {
    const {addTask, openModal, setOpenModal} = useContext(TaskContext)
    const [newTask, setNewTask] = useState('')
    const handleCancelButton = () => {
        setOpenModal(!openModal)
    }
    const handleInputChange = (e) => {
        setNewTask(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(newTask)
        setOpenModal(!openModal)
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
            <h1 className="text-2xl mb-8">Create Task</h1> 
            <input onChange={handleInputChange} type="text" placeholder="Write a task" className="p-2 rounded-lg"/>
            <div className="flex gap-8 mt-6">
                <button type="submit">Create</button>
                <button onClick={handleCancelButton}>Cancel</button>
            </div>
        </form>
    )
}

export default TaskForm