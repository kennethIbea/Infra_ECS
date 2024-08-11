import React, { useState } from "react"

import { UserType } from "../../type"
import { useForm } from "../../context/FormContext"
import { AxiosResponse } from "axios"
import { useAddUser } from "../../query/auth"
import { useNavigate } from "react-router-dom"

export const Password: React.FC = () => {
  const navigate = useNavigate()
  const { goBack, data } = useForm()
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [noMatchPass, setNoMatchPass] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  const handleBack = (e: React.FormEvent) => {
    e.preventDefault()
    const newData: UserType = {
      display: 2,
    }

    goBack(newData)
  }

  const triggerGTMEvent = () => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "start_trial",
    })
  }

  const { mutate: addRegister, isLoading: isAdding } = useAddUser({
    onSuccess: (res: AxiosResponse) => {
      triggerGTMEvent()
      localStorage.setItem("installCode", res.data)
      navigate("/script")
    },
    onError: (err: any) => {
      console.log(err.response?.data?.error, "err testing")
      // if (err.response?.status === 409) {
      setError(err.response?.data?.error)
      // }
    },
  })

  const addUser = (event: React.FormEvent) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      setNoMatchPass(true)
    } else {
      setNoMatchPass(false)
      addRegister({
        ...data,
        password,
        confirmPassword,
      })
    }
  }

  return (
    <form className="space-y-6 text-slate-300 mt-5" onSubmit={addUser}>
      {/* PASSWORD INPUT */}
      <div className="relative">
        <input
          type="password"
          id="password-5"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent bg-dark rounded-lg border border-solid appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer transition-colors duration-500"
          placeholder="••••••••"
          required
        />
        <i
          className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 showPassword fa-regular fa-eye"
          data-target="password-5"
        ></i>
        <label
          htmlFor="password-5"
          className="mx-2 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 dark:bg-dark px-2 peer-focus:px-2 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Password
        </label>
      </div>
      {/* PASSWORD INPUT */}
      {/* PASSWORD INPUT */}
      <div className="relative">
        <input
          type="password"
          id="confirmPassword-5"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent bg-dark rounded-lg border border-solid appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer transition-colors duration-500"
          placeholder="••••••••"
          required
        />

        <label
          htmlFor="confirmPassword-5"
          className="mx-2 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 dark:bg-dark px-2 peer-focus:px-2 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Confirm Password
        </label>
        {noMatchPass && <p className="text-red-500 pt-3">Password no match!</p>}
        {error && <p className="text-red-500 pt-3">{error}</p>}
      </div>
      {/* PASSWORD INPUT */}
      <div className="flex justify-between">
        <div
          onClick={handleBack}
          className="flex items-center gap-2 cursor-pointer text-indigo-600 hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-2 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Back
        </div>
        <button
          disabled={isAdding}
          type="submit"
          className="w-40 text-white font-semibold bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed disabled:opacity-50 active:scale-95 transition-all duration-500 ease-in-out rounded-lg shadow-md px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
