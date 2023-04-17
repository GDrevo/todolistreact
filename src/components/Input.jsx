import { useState } from "react"

export default function Input({ addTask }) {
  const [inputValue, setInputValue] = useState("")

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = () => {
    addTask(inputValue);
    setInputValue("");
  }

  return (
    <div className="input">
      <input
        type="text"
        className="input-input"
        placeholder="Name of the task"
        onChange={handleChange}
        value={inputValue}
      />
      <input
        type="submit"
        className="input-submit"
        value="Add Task"
        onClick={handleSubmit}
      />
    </div>
  )
}
