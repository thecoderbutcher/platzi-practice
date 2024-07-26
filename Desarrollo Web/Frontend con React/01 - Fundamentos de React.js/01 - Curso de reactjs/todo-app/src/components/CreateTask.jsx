import { useContext } from "react";
import { GrAdd } from "react-icons/gr";
import { TaskContext } from "../context/TaskContext";
const CreateTask = () => {
    const { openModal,setOpenModal } = useContext(TaskContext)
    const handleClick = () => {
        setOpenModal(!openModal)
    }
    return (
        <button onClick={handleClick} className="absolute bottom-5 right-5 text-xl p-4 bg-blue-500 hover:bg-blue-700 text-white rounded-full">
            <GrAdd />
        </button>
    )
}

export default CreateTask