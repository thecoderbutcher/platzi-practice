/* eslint-disable react/prop-types */

const TasksList = (props) => {
    return (
        <div className="w-full md:w-3/4 lg:w-2/4 xl:w-1/4 h-full overflow-auto bg-slate-500/50 rounded-lg p-2">
            <ul className="w-full mt-2">
                {props.children}
            </ul>
        </div>
    )
}

export default TasksList