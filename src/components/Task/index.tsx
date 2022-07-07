import { useTasks } from '../../store/store'
import { motion } from 'framer-motion'

export interface ItaskProps {
    id: string;
    task: string;
    state: boolean;
    index: number;
}

export default function Task ({ task, state, id, index } : ItaskProps) {
  const completedTask = useTasks((state: any) => state.completedTask)
  const deleteTask = useTasks((state: any) => state.removeTask)

  const variants = {
    hidden: {
      opacity: 0
    },
    visible: ({ delay }: any) => ({
      opacity: 1,
      transition: {
        delay,
        duration: 0.8,
        ease: 'easeInOut'
      }
    })
  }

  return (
      <motion.li className="task-list-item" variants={variants} initial='hidden' animate='visible' exit='hidden' layoutId={id} custom={{ delay: (index + 1) * 0.1 }}>
        <label className="task-list-item-label">
          <input type="checkbox" checked={state} onChange={() => completedTask(id)}/>
          <span>{task}</span>
        </label>
        <motion.span className="delete-btn" title="Delete Task" onClick={() => deleteTask(id)} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.7 }}></motion.span>
      </motion.li>
  )
}
