import TaskCard from "./TaskCard";

function Column({ title, status, tasks, deleteTask, moveTask, editTask }) {

  const getHeaderColor = () => {
    if (status === "todo") return "bg-blue-500";
    if (status === "inprogress") return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 min-h-[400px]">
      
      <h2 className={`text-white text-lg font-semibold p-2 rounded mb-4 text-center ${getHeaderColor()}`}>
        {title}
      </h2>

      <div className="space-y-3">
        {tasks
          .filter((t) => t.status === status)
          .map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              moveTask={moveTask}
              editTask={editTask}
            />
          ))}
      </div>

    </div>
  );
}

export default Column;