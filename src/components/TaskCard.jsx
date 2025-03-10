"use client"

import { useTaskContext } from "../context/TaskContext"

function TaskCard({ task, onDeleteClick }) {
  const { openEditModal } = useTaskContext()

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "to do":
        return "bg-slate-100 text-slate-700 border-slate-200"
      case "in progress":
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "done":
        return "bg-green-50 text-green-700 border-green-200"
      default:
        return "bg-slate-100 text-slate-700 border-slate-200"
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date)
  }

  return (
    <div className="bg-white rounded-md border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-[15px] font-semibold text-slate-800">{task.title}</h3>
          <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded-2xl border ${getStatusColor(task.status)}`}>
            {task.status}
          </span>
        </div>

        <p className="text-slate-600 mb-4 text-sm line-clamp-3">{task.description}</p>

        <div className="flex justify-between items-center text-xs text-slate-500">
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formatDate(task.updatedAt)}
          </span>
        </div>
      </div>

      <div className="border-t border-slate-100 px-5 py-3 flex justify-end space-x-2">
        <button 
          onClick={() => openEditModal(task)} 
          className="text-[#0052CC] hover:text-[#0747A6] font-medium text-sm transition-colors duration-200"
        >
          Edit
        </button>
        <button 
          onClick={() => onDeleteClick(task)} 
          className="text-[#DE350B] hover:text-red-700 font-medium text-sm transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskCard
