import { AnimatePresence } from 'framer-motion'
import { Itask, useTasks } from '../../store/store'
import Task from '../Task'

export default function Tasks () {
  const tasksSelector = useTasks((state) => state.tasks)
  return (
   <ul className="task-list">
     <AnimatePresence>
      {tasksSelector.map((task: Itask, index: number) => <Task {...task} key={task.id} index={index}/>)}
     </AnimatePresence>
    </ul>
  )
}
