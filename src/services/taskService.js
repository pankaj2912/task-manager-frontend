const API_URL = `${import.meta.env.BaseUrl || 'http://localhost:8000'}/api/tasks`; 

// Fetch all tasks from the backend
const getAllTasks = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch tasks");
    return await response.json();
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};

// Fetch a single task by ID
const getTaskById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error("Task not found");
    return await response.json();
  } catch (error) {
    console.error(`Error fetching task with ID ${id}:`, error);
    return null;
  }
};

// Create a new task
const createTask = async (taskData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskData),
    });
    if (!response.ok) throw new Error("Failed to create task");
    return await response.json();
  } catch (error) {
    console.error("Error creating task:", error);
    return null;
  }
};

// Update an existing task
const updateTask = async (id, taskData) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskData),
    });
    if (!response.ok) throw new Error("Failed to update task");
    return await response.json();
  } catch (error) {
    console.error(`Error updating task with ID ${id}:`, error);
    return null;
  }
};

// Delete a task
const deleteTask = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete task");
    return true;
  } catch (error) {
    console.error(`Error deleting task with ID ${id}:`, error);
    return false;
  }
};

export const taskService = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
