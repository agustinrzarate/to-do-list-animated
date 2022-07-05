import { Itask, useTasks } from '../../store/store'

export default function Task ({ task, state, id } : Itask) {
  const completedTask = useTasks((state: any) => state.completedTask)
  const deleteTask = useTasks((state: any) => state.removeTask)
  return (
    <li className="task-list-item">
        <label className="task-list-item-label">
          <input type="checkbox" checked={state} onChange={() => completedTask(id)}/>
          <span>{task}</span>
        </label>
        <span className="delete-btn" title="Delete Task" onClick={() => deleteTask(id)}></span>
    </li>
  )
}
