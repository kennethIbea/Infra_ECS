import React from "react"
import { Company, Email, Name, Password } from "../../../components"
import { useForm } from "../../../context/FormContext"

export const MobileResponsive: React.FC = () => {
  const { data } = useForm()

  return (
    <div className="w-full px-3">
      <div className="relative group flex justify-center">
        <div className="bg-gray-900 w-full border border-slate-700 border-solid px-4 py-16 shadow rounded-lg sm:px-10">
          <div className="flex flex-col">
            <div className="flex gap-3">
              <div className="flex gap-3 mb-8">
                <div
                  className={`rounded-full ${data.display === 0 ? "bg-sky-200 text-slate-900" : ""} text-sky-200 hover:text-slate-900 border-2 border-sky-200 flex items-center justify-center hover:bg-sky-200 w-4 h-4`}
                ></div>
              </div>
              <div className="flex gap-3 mb-8">
                <div
                  className={`rounded-full ${data.display === 1 ? "bg-sky-200 text-slate-900" : ""} text-sky-200 hover:text-slate-900 border-2 border-sky-200 flex items-center justify-center hover:bg-sky-200 w-4 h-4`}
                ></div>
              </div>
              <div className="flex gap-3 mb-8">
                <div
                  className={`rounded-full ${data.display === 2 ? "bg-sky-200 text-slate-900" : ""} text-sky-200 hover:text-slate-900 border-2 border-sky-200 flex items-center justify-center hover:bg-sky-200 w-4 h-4`}
                ></div>
              </div>
              <div className="flex gap-3 mb-8">
                <div
                  className={`rounded-full ${data.display === 3 ? "bg-sky-200 text-slate-900" : ""} text-sky-200 hover:text-slate-900 border-2 border-sky-200 flex items-center justify-center hover:bg-sky-200 w-4 h-4`}
                ></div>
              </div>
            </div>
            <div className="w-full">
              {data.display === 0 && (
                <div className="space-y-4">
                  <h1 className="mb-2 text-2xl font-semibold text-white">Start Your Free Trial</h1>
                  <p className="text-lg font-medium text-slate-300">7-day free trial.</p>
                  <p className="text-md font-medium text-slate-400">No credit card required.</p>
                </div>
              )}
              {data.display === 1 && (
                <div className="space-y-4">
                  <h1 className="mb-2 text-2xl font-semibold text-white">Welcome to Leadpipe!</h1>
                  <p className="text-lg font-medium text-slate-300">
                    You are seconds away from your leads!
                  </p>
                  <p className="text-md font-medium text-slate-400">
                    Finish your profile to get started. Please enter your company details.
                  </p>
                </div>
              )}
              {data.display === 2 && (
                <div className="space-y-4">
                  <h1 className="mb-2 text-2xl font-semibold text-white">Welcome to Leadpipe!</h1>
                  <p className="text-lg font-medium text-slate-300">Identify anonymous visitors</p>
                  <p className="text-md font-medium text-slate-400">
                    Let&apos;s get to know each other!
                  </p>
                </div>
              )}
              {data.display === 3 && (
                <div className="space-y-4">
                  <h1 className="mb-2 text-2xl font-semibold text-white">Welcome to Leadpipe!</h1>
                  <p className="text-md font-medium text-slate-400">
                    Please enter your password and submit your information.
                  </p>
                </div>
              )}
            </div>
            <div className="w-full">
              {data.display === 0 && <Email />}
              {data.display === 1 && <Company />}
              {data.display === 2 && <Name />}
              {data.display === 3 && <Password />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
