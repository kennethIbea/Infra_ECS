import React from "react"
import { useNavigate } from "react-router-dom"

export const Home: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div>
      <button
        onClick={() => navigate("/signin")}
        className="w-full text-white font-semibold bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-500 ease-in-out rounded-lg shadow-md px-5 py-2.5 text-center"
      >
        Login
      </button>
    </div>
  )
}
