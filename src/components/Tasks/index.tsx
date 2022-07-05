import { useTasks } from '../../store/store'
import Task from '../Task'

export default function Tasks () {
  const tasksSelector = useTasks((state) => state.tasks)
  return (
   <ul className="task-list">
     {tasksSelector.map((task: any) => <Task {...task} key={task.id}/>)}
    </ul>
  )
}
