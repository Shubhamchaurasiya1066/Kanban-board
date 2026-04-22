import { useState } from "react";

function TaskCard({ task, deleteTask, moveTask, editTask }) {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const getColor = () => {
    if (task.priority === "High") return "border-red-500";
    if (task.priority === "Medium") return "border-yellow-400";
    return "border-green-500";
  };

  return (
    <div className={`bg-white border-l-4 ${getColor()} p-3 rounded-lg shadow hover:shadow-md transition`}>

      {editing ? (
        <input
          className="border p-1 w-full rounded"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={() => {
            editTask(task.id, newText);
            setEditing(false);
          }}
        />
      ) : (
        <p className="cursor-pointer text-gray-800 font-medium" onClick={() => setEditing(true)}>
          {task.text}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mt-3">
        
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
          onClick={() => deleteTask(task.id)}
        >
          ✕
        </button>

        {task.status !== "todo" && (
          <button className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded text-sm" onClick={() => moveTask(task.id, "todo")}>
            To Do
          </button>
        )}

        {task.status !== "inprogress" && (
          <button className="bg-yellow-400 hover:bg-yellow-500 px-2 py-1 rounded text-sm" onClick={() => moveTask(task.id, "inprogress")}>
            Progress
          </button>
        )}

        {task.status !== "done" && (
          <button className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-sm" onClick={() => moveTask(task.id, "done")}>
            Done
          </button>
        )}

      </div>

    </div>
  );
}

export default TaskCard;