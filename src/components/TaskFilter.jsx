"use client"

function TaskFilter({ currentFilter, onFilterChange }) {
  const filters = [
    { value: "all", label: "All Tasks" },
    { value: "to do", label: "To Do" },
    { value: "in progress", label: "In Progress" },
    { value: "done", label: "Done" },
  ]

  return (
    <div className="flex items-center">
      <div className="inline-flex rounded-md shadow-sm">
        {filters.map((filter, index) => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`
              px-4 py-2 text-sm font-medium border
              ${index === 0 ? "rounded-l-md" : ""}
              ${index === filters.length - 1 ? "rounded-r-md" : ""}
              ${
                currentFilter === filter.value
                  ? "bg-[#0052CC] text-white border-[#0052CC]"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
              }
              transition-colors duration-200
              focus:z-10 focus:outline-none focus:ring-1 focus:ring-[#0052CC]
            `}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TaskFilter

