import { useTasks } from '../../store/store'
import { motion } from 'framer-motion'
import PencilIcon from '../../Images/components/icons/PencilIcon'
import Eraser from '../../Images/components/icons/Eraser'
import { useState } from 'react'

export interface ItaskProps {
  id: string;
  task: string;
  state: boolean;
  index: number;
}

export default function Task ({ task, state, id, index }: ItaskProps) {
  const completedTask = useTasks((state) => state.completedTask)
  const deleteTask = useTasks((state) => state.removeTask)
  const [cancelCompletedTask, setCancelCompletedTask] = useState(false)
  const variants = {
    hidden: {
      opacity: 0
    },
    visible: ({ delay }: any) => ({
      opacity: 1,
      transition: {
        delay
      }
    })
  }

  const handleClick = () => {
    state ? setCancelCompletedTask(true) : setCancelCompletedTask(false)
    completedTask(id)
  }

  return (
    <motion.div
      className="task-list-item"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      layoutId={id}
      custom={{ delay: (index + 1) * 0.1 }}
    >
      <label className="task-list-item-label">
        <input
          type="checkbox"
          checked={state}
          onChange={handleClick}
        />
        <span>{task}</span>
        <motion.div className="container-pencil" animate={state ? { opacity: 1 } : { opacity: 0 }} transition={{ ease: 'easeOut', duration: 2 }}>
          <motion.div
          animate={state ? { width: '80%' } : { width: '0px' }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          ></motion.div>
          {state && <PencilIcon fill="#ffffff" width='13' height='13' />}
          {cancelCompletedTask && <Eraser fill="#ffffff" width='13' height='13' /> }
        </motion.div>
      </label>
      <motion.span
        className="delete-btn"
        title="Delete Task"
        onClick={() => deleteTask(id)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.7 }}
      ></motion.span>
    </motion.div>
  )
}
