import { useState } from 'react'
import { useTasks } from '../../store/store'

export default function Header () {
  const [newTask, setNewTask] = useState<string>('')
  const addTask = useTasks((state: any) => state.addTask)
  const handleClick = () => {
    addTask(newTask)
    setNewTask('')
  }
  return (
    <>
        <h1 className="app-header">TO DO LIST</h1>
        <div className="add-task">
          <input type="text" placeholder="Add New Task" className="task-input" onChange={(event) => setNewTask(event.target.value)} value={newTask}/>
          <button className="submit-task" onClick={handleClick}/>
        </div>
    </>
  )
}
