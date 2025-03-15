import React from "react"

const NotFound = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="p-8 rounded-lg shadow-md bg-white">
        <h1 className="text-gray-800 text-2xl font-bold">404 Not Found</h1>
        <p className="text-gray-600">The page does not exist.</p>
      </div>
    </div>
  )
}

export default NotFound