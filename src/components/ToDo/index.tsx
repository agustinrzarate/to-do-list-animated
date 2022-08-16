import Header from '../Header'
import Tasks from '../Tasks'

export default function ToDo () {
  return (
    <div className="inner-header flex">
      <div className="app-container">
        <Header />
        <Tasks />
      </div>
    </div>
  )
}
