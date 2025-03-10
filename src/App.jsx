import { TaskProvider } from "./context/TaskContext"
import Header from "./components/Header"
import TaskList from "./components/TaskList"
import "./App.css"

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-6">
          <TaskList />
        </main>
      </div>
    </TaskProvider>
  )
}

export default App

