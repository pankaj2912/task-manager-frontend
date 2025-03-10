"use client"

import { useState } from "react"
import { useTaskContext } from "../context/TaskContext"
import TaskCard from "./TaskCard"
import TaskModal from "./TaskModal"
import ConfirmDialog from "./ConfirmDialog"
import TaskFilter from "./TaskFilter"

function TaskList() {
  const { tasks, isLoading, deleteTask, isModalOpen } = useTaskContext()
  const [filter, setFilter] = useState("all")
  const [showConfirm, setShowConfirm] = useState(false)
  const [taskToDelete, setTaskToDelete] = useState(null)

  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((task) => task.status.toLowerCase() === filter.toLowerCase())

  const handleDeleteClick = (task) => {
    setTaskToDelete(task)
    setShowConfirm(true)
  }

  const confirmDelete = async () => {
    if (taskToDelete) {
      console.log('taskToDelete',taskToDelete)
      await deleteTask(taskToDelete._id)
      setShowConfirm(false)
      setTaskToDelete(null)
    }
  }

  const cancelDelete = () => {
    setShowConfirm(false)
    setTaskToDelete(null)
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0052CC]"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6 bg-slate-50 p-6 rounded-md">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Your Tasks</h2>
          <p className="text-sm text-slate-500">Manage and organize your work</p>
        </div>
        <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
      </div>

      {filteredTasks.length === 0 ? (
        <div className="bg-white rounded-md border border-slate-200 p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <p className="text-slate-600 font-medium">No tasks found</p>
          <p className="text-slate-500 text-sm mt-1">Create a new task to get started!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTasks.map((task) => (
            <TaskCard key={task._id} task={task} onDeleteClick={() => handleDeleteClick(task)} />
          ))}
        </div>
      )}

      {isModalOpen && <TaskModal />}

      {showConfirm && (
        <ConfirmDialog
          title="Delete Task"
          message={`Are you sure you want to delete "${taskToDelete?.title}"? This action cannot be undone.`}
          confirmLabel="Delete"
          cancelLabel="Cancel"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
          isDestructive={true}
        />
      )}
    </div>
  )
}

export default TaskList

