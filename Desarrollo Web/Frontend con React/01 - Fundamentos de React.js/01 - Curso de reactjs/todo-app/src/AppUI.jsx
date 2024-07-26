import { useContext } from 'react'
import Counter from './components/Counter' 
import Header from './components/Header'
import Loading from './components/Loading'
import Search from './components/Search'
import Task from './components/Task'
import TasksList from './components/TasksList'
import { TaskContext } from './context/TaskContext'
import Modal from './components/Modal'
import TaskForm from './components/TaskForm'
function AppUI () {
    const {searchResult, completeTaks, deleteTask, loading, error, openModal} = useContext(TaskContext)
    return (
        <main className="flex flex-col w-screen h-screen flex-1 justify-center items-center content-center">
            <Header/>
            <Counter/>
            <Search/>
            <TasksList>
                <div className='text-center'>
                    {loading && <Loading/> }
                    {error && <span className="text-red-400">Error loading tasks</span>}
                    {(!loading && searchResult.length === 0) && 'You have no tasks. Create one!'}
                </div>
                {searchResult.map((task) => (
                <Task
                    key={task.id}
                    text={task.title}
                    completed={task.completed}
                    onComplete={() => completeTaks(task.id)}
                    onDelete={() => deleteTask(task.id)}
                />
                ))}
            </TasksList>
            {openModal && <Modal><TaskForm/></Modal>}
        </main>
    )
}

export default AppUI;