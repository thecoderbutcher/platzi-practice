import { useState, useEffect } from "react";
function useLocalStorage(itemName, initialValue){
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            try {
                const itemLocal = localStorage.getItem(itemName);
                let tasksParsed
                
                if(!itemLocal) tasksParsed = initialValue;
                tasksParsed = JSON.parse(localStorage.getItem(itemName));
                localStorage.setItem(itemName, JSON.stringify(tasksParsed));
                
                setLoading(false);
                setItem(tasksParsed);
    
            } catch (error) {
                setError(true);
            }
        }, 1000)
        
    }, []);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    } 
    return {item, saveItem, loading, error};
}

export {useLocalStorage}

/* const defaultTasks = [
    { id: 1, title:'Tarea 1' ,completed: true},
    { id: 2, title:'Comer 2' ,completed: false},
    { id: 3, title:'Cocinar 3' ,completed: false},
    { id: 4, title:'Limpliar 4' ,completed: true},
    { id: 5, title:'Pasear 5' ,completed: false},
    { id: 6, title:'Estudiar 6' ,completed: true},
    { id: 7, title:'Caminar 7' ,completed: false},
    { id: 8, title:'Correr 8' ,completed: false},
    ]
    localStorage.setItem('TASK_DB', JSON.stringify(defaultTasks)); */ 