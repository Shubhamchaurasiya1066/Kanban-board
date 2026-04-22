import { useState, useEffect } from "react";
import Column from "./components/Column";
import TaskInput from "./components/TaskInput";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Low");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!text.trim()) return;

    const newTask = {
      id: Date.now(),
      text,
      status: "todo",
      priority,
    };

    setTasks([...tasks, newTask]);
    setText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const moveTask = (id, newStatus) => {
    setTasks(tasks.map((t) =>
      t.id === id ? { ...t, status: newStatus } : t
    ));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map((t) =>
      t.id === id ? { ...t, text: newText } : t
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        🚀 Kanban Board
      </h1>

      <TaskInput
        text={text}
        setText={setText}
        addTask={addTask}
        priority={priority}
        setPriority={setPriority}
      />

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <Column title="To Do" status="todo" tasks={tasks} deleteTask={deleteTask} moveTask={moveTask} editTask={editTask} />
        <Column title="In Progress" status="inprogress" tasks={tasks} deleteTask={deleteTask} moveTask={moveTask} editTask={editTask} />
        <Column title="Done" status="done" tasks={tasks} deleteTask={deleteTask} moveTask={moveTask} editTask={editTask} />
      </div>

    </div>
  );
}

export default App;