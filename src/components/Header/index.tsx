export default function Header () {
  return (
    <>
        <h1 className="app-header">TO DO LIST</h1>
        <div className="add-task">
          <input type="text" placeholder="Add New Task" className="task-input"/>
          <input type="submit" className="submit-task" value=''/>
        </div>
    </>
  )
}
