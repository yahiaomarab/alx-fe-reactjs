import { useState } from "react";
import useTaskStore from "../stores/useTaskStore";

const TaskForm = () => {
  const addTask = useTaskStore((state) => state.addTask);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ id: Date.now(), title, completed: false });
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task..."
        className="p-2 mr-2 w-60 border rounded-md border-gray-300"
      />
      <button type="submit" className="p-2 rounded-md bg-green-500 text-white">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
