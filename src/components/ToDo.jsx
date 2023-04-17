import { useState } from "react"

export default function ToDo({id, title, done, deleteTask}) {
  const [isDone, setIsDone] = useState(done)

  const doneTask = <h3 className="bold">[√]</h3>
  const toDoTask = <h3>[X]</h3>

  const handleDone = () => {
    setIsDone(prevIsDone => !prevIsDone)
  }

  const handleDelete = () => {
    deleteTask(id)
  }

  const undoButton =  <input
                        type="submit"
                        value="Undo"
                        onClick={handleDone}
                      />

  const doneButton =  <input
                        type="submit"
                        value="Done"
                        onClick={handleDone}
                      />

  return(
    <div className="task">
      {isDone ? doneTask : toDoTask}
      <h5>{title}</h5>
      {isDone ? undoButton : doneButton}
      <input
        type="submit"
        value="Delete"
        onClick={handleDelete}
      />
    </div>
  )
}
