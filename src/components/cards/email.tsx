import React, { useState } from "react"
import { useForm } from "../../context/FormContext"
import { UserType } from "../../type"
import { AxiosResponse } from "axios"
import { useEmailChecker } from "../../query/auth"

export const Email: React.FC = () => {
  const { addInfo, data } = useForm()
  const [email, setEmail] = useState<string | undefined>(data.email)
  const [error, setError] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    emailCheck()
  }

  const { mutate: newEmailChecker, isLoading } = useEmailChecker({
    onSuccess: (res: AxiosResponse) => {
      const newData: UserType = {
        email: email,
        display: 1,
      }
      addInfo(newData)
      console.log(res, "success")
    },
    onError: (err: any) => {
      console.log(err.response?.data, "err testing")
      // if (err.response?.status === 409) {
      setError(err.response?.data)
      // }
    },
  })

  const emailCheck = () => {
    newEmailChecker({
      email,
    })
  }

  const login = () => {
    window.open("https://app.leadpipe.com")
  }

  return (
    <form className="space-y-6 text-slate-300 mt-5" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="email"
          id="email-5"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block px-2.5 pb-3 pt-4 w-full text-sm bg-transparent bg-dark rounded-lg border border-solid appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer transition-colors duration-500"
          placeholder="john@leadpipe.com"
          required
        />
        <label
          htmlFor="email-5"
          className="mx-2 w-32 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 dark:bg-dark px-2 peer-focus:px-2 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Email Address
        </label>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <button
          disabled={isLoading}
          type="submit"
          className="w-full text-white font-semibold bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed disabled:opacity-50 active:scale-95 transition-all duration-500 ease-in-out rounded-lg shadow-md px-5 py-2.5 text-center"
        >
          Get Started
        </button>
      </div>
      <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-300">
        <div>Already have an account?</div>
        <p className="cursor-pointer text-indigo-600 hover:underline" onClick={login}>
          Login here
        </p>
      </div>
    </form>
  )
}
