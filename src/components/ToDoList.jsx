import { useState } from "react";
import Input from './Input'
import ToDo from './ToDo'

export default function ToDoList() {
  const [tasks, setTasks] = useState([])
  const [isDone] = useState(false)

  const addTask = (taskName) => {
    const newTasks = [...tasks, taskName]
    setTasks(newTasks)
  }

  const deleteTask = (id) => {
    const tasksCopy = [...tasks]
    tasksCopy.splice(id, 1)
    setTasks(tasksCopy)
  }

  return (
    <div className="todo-list">
      <Input addTask={addTask} />
      <div className="tasks-list">
        {tasks.map((task, index) => (
          <ToDo
            key={index}
            id={index}
            title={task}
            done={isDone}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  )
}
