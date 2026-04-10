"use client";

export default function TaskCard({ task }) {
  return (
    <div className="relative group bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-5 shadow-lg shadow-purple-900/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-700/40">
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-lg font-semibold text-white">{task.title}</h2>

        <span
          className={`text-xs px-2 py-1 rounded-full font-medium ${
            task.priority === "High"
              ? "bg-red-500/20 text-red-400"
              : task.priority === "Medium"
                ? "bg-yellow-500/20 text-yellow-400"
                : "bg-green-500/20 text-green-400"
          }`}
        >
          {task.priority}
        </span>
      </div>

      <p className="text-gray-400 text-sm mb-4">{task.description}</p>

      <div className="flex items-center justify-between">
        <span
          className={`text-xs px-3 py-1 rounded-full ${
            task.status === "Completed"
              ? "bg-green-500/20 text-green-400"
              : task.status === "In Progress"
                ? "bg-blue-500/20 text-blue-400"
                : "bg-gray-500/20 text-gray-300"
          }`}
        >
          {task.status}
        </span>

        <div className="flex gap-2">
          <button className="px-3 py-1 text-xs rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition">
            Edit
          </button>

          <button className="px-3 py-1 text-xs rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
