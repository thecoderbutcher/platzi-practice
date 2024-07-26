import { GrClose, GrCheckbox, GrCheckboxSelected} from "react-icons/gr";
const Task = ({text, completed, onComplete, onDelete}) => {
    return (
        <li className="flex bg-gray-600 rounded-md justify-between place-items-center py-2 px-3 mt-2 border-gray-500">
            <div onClick={onComplete}>
                {completed ? <GrCheckboxSelected className="text-green-500"/> : <GrCheckbox />}
            </div>
            <span className={`${completed ? 'line-through' : ''}`}>{text}</span> 
            <GrClose className="text-red-500" onClick={onDelete}/>
        </li>
    )
}

export default Task