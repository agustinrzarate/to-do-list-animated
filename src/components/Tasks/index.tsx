import { Reorder } from 'framer-motion'
import { Itask, useTasks } from '../../store/store'
import Task from '../Task'

export default function Tasks () {
  const tasksSelector = useTasks((state) => state.tasks)
  const reorderTasks = useTasks((state) => state.reorderTasks)
  return (
    <div className="task-list">
      <Reorder.Group as='ul' axis="y" values={tasksSelector} onReorder={reorderTasks}>
      {tasksSelector.map((task: Itask, index: any) =>
      <Reorder.Item key={task.id} value={task} id={index}>
        <Task {...task} index={index}/>
      </Reorder.Item>
      )}
      </Reorder.Group>
    </div>
  )
}
