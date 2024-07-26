import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage"; 

export const TaskContext = createContext();

export function TaskProvider({children}) {
    const {
        item: tasks,
        saveItem: setTasks,
        loading,
        error,
    } = useLocalStorage("TASK_DB", []);
    const [searchValue, setsearchValue] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const completedTask = tasks.filter((task) => !!task.completed).length;
    const totalTask = tasks.length;

    const searchResult = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    const addTask = (title) => {
        const newTasks = [...tasks];
        newTasks.push({ 
            title,
            completed: false,
        });
        setTasks(newTasks);
    }
    const completeTaks = (id) => {
        const newTasks = [...tasks];

        const taskIndex = newTasks.findIndex((task) => task.id === id);
        newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
        setTasks(newTasks);
    };

    const deleteTask = (id) => {
        const newTasks = [...tasks];

        const taskIndex = newTasks.findIndex((task) => task.id === id);
        newTasks.splice(taskIndex, 1);
        setTasks(newTasks);
    };

    return (
        <TaskContext.Provider
            value={{
                addTask,
                totalTask,
                completedTask,
                searchValue,
                setsearchValue,
                searchResult,
                completeTaks,
                deleteTask,
                loading,
                error,
                openModal,
                setOpenModal
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}
