
export default function ToDo () {
  return (
        <div className="inner-header flex">
          <div className="app-container">
            <h1 className="app-header">TO DO LIST</h1>
            <div className="add-task">
              <input type="text" placeholder="Add New Task" className="task-input"/>
              <input type="submit" className="submit-task" value=''/>
            </div>
            <ul className="task-list">
              <li className="task-list-item">
                <label className="task-list-item-label">
                  <input type="checkbox"/>
                  <span>HO</span>
                </label>
                <span className="delete-btn" title="Delete Task"></span>
              </li>
            </ul>
          </div>
        </div>
  )
}
