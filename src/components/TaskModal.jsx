"use client"

import { useTaskContext } from "../context/TaskContext"
import TaskForm from "./TaskForm"

function TaskModal() {
  const { isModalOpen, currentTask, closeModal, addTask, updateTask } = useTaskContext()

  if (!isModalOpen) return null

  const handleSubmit = async (formData) => {
    try {
      if (currentTask) {
        await updateTask(currentTask._id, formData)
      } else {
        await addTask(formData)
      }
      closeModal()
    } catch (error) {
      console.error("Error saving task:", error)
      // Handle error (could show an error message)
    }
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="text-slate-400 hover:text-slate-500 focus:outline-none"
              onClick={closeModal}
            >
              <span className="sr-only">Close</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 className="text-lg leading-6 font-medium text-slate-900" id="modal-headline">
                  {currentTask ? "Edit Task" : "Create New Task"}
                </h3>
                <div className="mt-4">
                  <TaskForm task={currentTask} onSubmit={handleSubmit} onCancel={closeModal} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskModal

