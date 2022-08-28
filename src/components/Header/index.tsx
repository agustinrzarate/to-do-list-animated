import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useTasks } from '../../store/store'

export default function Header () {
  const [newTask, setNewTask] = useState<string>('')
  const addTask = useTasks((state: any) => state.addTask)
  const handleClick = () => {
    newTask && addTask(newTask)
    setNewTask('')
  }
  const keyEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      handleClick()
    }
  }
  return (
    <>
        <motion.h1
          className="app-header"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
            delay: 0.2
          }}
        >TO DO LIST</motion.h1>
        <div className="add-task">
          <input type="text" placeholder="Add New Task" className="task-input" onChange={(event) => setNewTask(event.target.value)} value={newTask} onKeyPress={keyEnterPress}/>
          <button className="submit-task" onClick={handleClick}/>
        </div>
    </>
  )
}
