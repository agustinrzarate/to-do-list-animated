import { AnimatePresence, Reorder } from 'framer-motion'
import { Itask, useTasks } from '../../store/store'
import Task from '../Task'

export default function Tasks () {
  const tasksSelector = useTasks((state) => state.tasks)
  const reorderTasks = useTasks((state: any) => state.reorderTasks)
  return (
   <Reorder.Group as='ul'className="task-list" axis="y" values={tasksSelector} onReorder={(e) => { reorderTasks(tasksSelector); console.log(e) }}>
     <AnimatePresence>
      {tasksSelector.map((task: Itask, index: number) => <Task {...task} key={task.id} index={index}/>)}
     </AnimatePresence>
    </Reorder.Group>
  )
}
