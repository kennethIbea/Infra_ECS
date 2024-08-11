import React, { useState } from "react"
import { UserType } from "../../type"
import { useForm } from "../../context/FormContext"

export const Company: React.FC = () => {
  const { goBack, addInfo, data } = useForm()
  const [companyName, setCompanyName] = useState<string | undefined>(data.companyName)
  const [domain, setDomain] = useState<string | undefined>(data.website)

  const handleBack = (e: React.FormEvent) => {
    e.preventDefault()
    const data: UserType = {
      display: 0,
    }
    goBack(data)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newData: UserType = {
      companyName: companyName,
      website: domain,
      display: 2,
    }
    addInfo(newData)
  }

  return (
    <form className="space-y-6 text-slate-300 mt-5" onSubmit={handleSubmit}>
      {/* FULLNAME INPUT */}
      <div className="relative">
        <input
          type="text"
          id="fullName-5"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="block px-2.5 pb-3 pt-4 w-full text-sm bg-transparent bg-dark rounded-lg border border-solid appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer transition-colors duration-500"
          placeholder="Leadpipe"
          required
        />
        <label
          htmlFor="fullName-5"
          className="mx-2 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 dark:bg-dark px-2 peer-focus:px-2 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Company Name
        </label>
      </div>
      <div className="relative">
        <input
          type="text"
          id="fullName-5"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="block px-2.5 pb-3 pt-4 w-full text-sm bg-transparent bg-dark rounded-lg border border-solid appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer transition-colors duration-500"
          placeholder="leadpipe.com"
          required
        />
        <label
          htmlFor="fullName-5"
          className="mx-2 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 dark:bg-dark px-2 peer-focus:px-2 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Website Domain
        </label>
      </div>
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
          <p>Back</p>
        </div>
        <button
          type="submit"
          className="flex justify-center gap-3 text-white w-48 font-semibold bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-500 ease-in-out rounded-lg shadow-md px-5 py-2.5 text-center"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-6 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </form>
  )
}
