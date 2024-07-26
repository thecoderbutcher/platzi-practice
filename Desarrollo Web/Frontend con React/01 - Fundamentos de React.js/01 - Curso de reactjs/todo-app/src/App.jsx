import './index.css' 
import AppUI from './AppUI';
import { TaskProvider } from './context/TaskContext';
function App() {  
  return (
    <TaskProvider>
      <AppUI />
    </TaskProvider>
  )
}

export default App
