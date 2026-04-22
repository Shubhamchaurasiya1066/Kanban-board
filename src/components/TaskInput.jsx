function TaskInput({ text, setText, addTask, priority, setPriority }) {
  return (
    <div className="flex flex-col md:flex-row gap-3 justify-center items-center">

      <input
        className="border border-gray-300 p-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
      />

      <select
        className="border border-gray-300 p-2 rounded-lg"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow"
        onClick={addTask}
      >
        Add Task
      </button>

    </div>
  );
}

export default TaskInput;