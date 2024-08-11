import React, { useState } from "react"
import { AxiosError } from "axios"
import { useNavigate } from "react-router-dom"

import { useNewPassword } from "../../../query/auth"

export const ForgotPassword: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [isEmail, setIsEmail] = useState<boolean>(true)
  const [noMatchPass, setNoMatchPass] = useState<boolean>(false)

  const { mutate: addNewPassword, isLoading: isAdding } = useNewPassword({
    onSuccess: () => {
      navigate("/signin")
    },
    onError: (err: AxiosError) => {
      console.log(err.response?.status, "error")
      if (err.response?.status === 405) {
        setIsEmail(false)
      }
    },
  })

  const addUser = (event: React.FormEvent) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      setNoMatchPass(true)
    } else {
      setNoMatchPass(false)
      addNewPassword({
        email,
        password,
      })
    }
  }

  if (isAdding) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-lg relative group">
      <div className="bg-slate-900 bg-dark border border-slate-700 border-solid px-4 py-8 shadow sm:rounded-lg sm:px-10">
        {/* FORM START */}
        <form className="space-y-6 text-slate-300 bg-slate-900" onSubmit={addUser}>
          {/* TITLE */}
          <h5 className="text-2xl font-semibold text-slate-300">Set up new Password</h5>
          {/* TITLE */}

          {/* EMAIL INPUT */}
          <div className="relative">
            <input
              type="email"
              id="email-5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block px-2.5 pb-3 pt-4 w-full text-sm bg-transparent bg-dark rounded-lg border border-solid appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer transition-colors duration-500"
              placeholder="aaa@exam.com"
              required
            />
            <label
              htmlFor="email-5"
              className="mx-2 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 dark:bg-dark px-2 peer-focus:px-2 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Email Address
            </label>
          </div>
          {/* EMAIL INPUT */}

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
              New Password
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
            {noMatchPass && <p className="text-red-500">Password no match!</p>}
          </div>
          {/* PASSWORD INPUT */}
          {!isEmail && <p className="text-red-500">Email is not exist!</p>}

          {/* SUBMIT BUTTON */}
          <div>
            <button
              type="submit"
              className="flex justify-center rounded-md px-3 py-2 w-full text-lg bg-blue-600 hover:bg-blue-700 text-slate-50 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-95 transition-all duration-500"
            >
              Register
            </button>
          </div>
          {/* SUBMIT BUTTON */}
        </form>
        {/* FORM END */}
      </div>
    </div>
  )
}
