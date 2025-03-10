"use client"

import { createContext, useState, useEffect, useContext } from "react"
import { taskService } from "../services/taskService"

const TaskContext = createContext()

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentTask, setCurrentTask] = useState(null)

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await taskService.getAllTasks()
        setTasks(data)
      } catch (error) {
        console.error("Failed to load tasks:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadTasks()
  }, [])

  const addTask = async (task) => {
    try {
      const newTask = await taskService.createTask(task)
      setTasks([...tasks, newTask])
      return newTask
    } catch (error) {
      console.error("Failed to add task:", error)
      throw error
    }
  }

  const updateTask = async (id, updatedTask) => {
    try {
      const task = await taskService.updateTask(id, updatedTask)
      setTasks(tasks.map((t) => (t._id === id ? task : t)))
      return task
    } catch (error) {
      console.error("Failed to update task:", error)
      throw error
    }
  }

  const deleteTask = async (id) => {
    try {
      await taskService.deleteTask(id)
      setTasks(tasks.filter((task) => task._id !== id))
    } catch (error) {
      console.error("Failed to delete task:", error)
      throw error
    }
  }

  const openAddModal = () => {
    setCurrentTask(null)
    setIsModalOpen(true)
  }

  const openEditModal = (task) => {
    setCurrentTask(task)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentTask(null)
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        isLoading,
        addTask,
        updateTask,
        deleteTask,
        isModalOpen,
        currentTask,
        openAddModal,
        openEditModal,
        closeModal,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export function useTaskContext() {
  return useContext(TaskContext)
}

