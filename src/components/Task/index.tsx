export default function Task () {
  return (
    <li className="task-list-item">
        <label className="task-list-item-label">
          <input type="checkbox"/>
          <span>HO</span>
        </label>
        <span className="delete-btn" title="Delete Task"></span>
    </li>
  )
}
