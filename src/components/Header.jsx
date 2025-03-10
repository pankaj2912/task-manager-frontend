"use client"

import { useTaskContext } from "../context/TaskContext"

function Header() {
  const { openAddModal } = useTaskContext()

  return (
    <header className="bg-[#0052CC] text-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div>
              <h1 className="text-2xl font-bold">Task Board</h1>
              <p className="text-sm text-blue-100 mt-1">Manage your tasks efficiently</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={openAddModal} 
              className="bg-[#ffffff] hover:text-[#969494] text-black font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Create Task
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
