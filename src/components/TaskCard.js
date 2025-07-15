import { useState } from 'react'

function TaskCard({ title, description, image }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`group bg-[#111] text-white rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 w-full sm:w-[300px] flex flex-col cursor-pointer`}
      onClick={() => setExpanded(!expanded)}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p
          className={`text-sm text-gray-300 transition-all duration-300 ease-in-out ${
            expanded ? '' : 'line-clamp-3 group-hover:line-clamp-none'
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export default TaskCard



