import React, { useState } from "react"
import { AxiosError, AxiosResponse } from "axios"
import { useNavigate } from "react-router-dom"

import { useLoginUser } from "../../../query/auth"

export const SignIn: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [noEmailPass, setNoEmailPass] = useState<boolean>(false)
  // const [token, setToken] = useState<string>("")
  const registerWord = "Don't have an account?"

  const { mutate: getLoginUser, isLoading: isAdding } = useLoginUser({
    onSuccess: (res: AxiosResponse) => {
      // Redirect to the new URL
      window.location.replace(res.data)
      // localStorage.setItem("vv-token-v3", res.data)
      // setToken(res.data)

      console.log(res, "success")
    },
    onError: (err: AxiosError) => {
      if (err.response?.status === 401) {
        setNoEmailPass(true)
      }
    },
  })

  const getUser = (event: React.FormEvent) => {
    event.preventDefault()

    getLoginUser({
      email,
      password,
    })
  }

  // useEffect(() => {
  //   // Correctly check both URLs
  //   if (
  //     window.location.href === "https://app.leadpipe.com" ||
  //     window.location.href === "https://app.leadpipe.com/pages/login"
  //   ) {
  //     console.log("data testing")
  //     localStorage.setItem("vv-token-v3", token)
  //   }
  // }, [token])

  if (isAdding) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <div className="w-full max-w-md sm:mx-auto sm:w-full p-4 bg-gray-900 bg-dark border border-slate-700 border-solid rounded-lg shadow sm:p-6 md:p-10">
      <form className="space-y-6 text-slate-500 dark:text-slate-30" onSubmit={getUser}>
        <h5 className="text-2xl font-semibold text-slate-300">Log In to Your Account</h5>

        <div className="w-full">
          <label htmlFor="email-4" className="block mb-2 text-sm font-medium">
            Email Address
          </label>
          <div className="bg-slate-900 border border-slate-700 border-solid shadow-sm text-sm rounded-lg flex items-center">
            <input
              type="email"
              id="email-4"
              name="email-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block px-2.5 pb-2.5 pt-2.5 w-full text-sm bg-transparent bg-dark rounded-lg border border-solid appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer transition-colors duration-500"
              placeholder="john@leadpipe.com"
              required
            />
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="password-4" className="block mb-2 text-sm font-medium">
            Password
          </label>
          <div className="bg-slate-900 border border-slate-700 border-solid shadow-sm text-sm rounded-lg flex items-center relative">
            <input
              type="password"
              id="password-4"
              name="password-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block px-2.5 pb-2.5 pt-2.5 w-full text-sm bg-transparent bg-dark rounded-lg border border-solid appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer transition-colors duration-500"
              placeholder="••••••••"
              required
            />
            <i
              className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 showPassword text-lg fa-regular fa-eye"
              data-target="password-4"
            ></i>
          </div>
        </div>
        {noEmailPass && <p className="text-red-500">Incorrect email or password!</p>}

        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember-4"
                type="checkbox"
                className="w-4 h-4 border-slate-700 border border-solid rounded bg-slate-900 accent-blue-600"
              />
            </div>
            <label htmlFor="remember-4" className="ml-2 text-sm font-medium">
              Remember me
            </label>
          </div>
          <p
            className="ml-auto text-sm hover:underline text-blue-400 cursor-pointer"
            onClick={() => navigate("/forgot-pass")}
          >
            Forgot Password?
          </p>
        </div>

        <button
          type="submit"
          className="w-full text-white font-semibold bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-500 ease-in-out rounded-lg shadow-md px-5 py-2.5 text-center"
        >
          Login
        </button>

        <div className="flex cursor-pointer text-sm font-medium text-gray-300 gap-2">
          {registerWord}
          <p
            className="cursor-pointer text-indigo-600 hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign up now
          </p>
        </div>
      </form>
    </div>
  )
}
