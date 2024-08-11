import React from "react"
import { useForm } from "../../context/FormContext"
import CopyToClipboard from "react-copy-to-clipboard"
// import { useNavigate } from "react-router-dom"

export const MobileScript: React.FC = () => {
  const { data } = useForm()
  // const navigate = useNavigate()
  const installCode = localStorage.getItem("installCode") || ""

  const goPortal = () => {
    window.location.replace("https://app.leadpipe.com")
  }

  return (
    <div className="w-full p-4 bg-slate-900 bg-dark border border-slate-700 border-solid rounded-lg shadow">
      <div className="flex flex-col justify-center items-center shadow-md rounded-lg">
        <h1 className="text-white text-lg font-bold mb-4">
          Last step: Install the Leadpipe Pixel on your website
        </h1>
        <div className="flex items-center mb-4">
          <div>
            <p className="text-slate-400">
              The pixel is essential for Leadpipe to identify the visitors. Setup takes only 2
              minutes.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="w-full">
            <iframe
              className="w-full h-2/3"
              src="https://www.youtube.com/embed/OFfY8OUgk3U"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            ></iframe>
          </div>
          <div className="w-full">
            <h2 className="text-white font-semibold">Install pixel with HTML code</h2>
            <div className="mt-4 text-slate-400">
              <p>1. Copy the Website Tracker script</p>
              <div className="p-2 mt-3 bg-slate-800 rounded overflow-x-auto relative">
                <textarea
                  readOnly
                  value={installCode}
                  className="w-full h-full bg-slate-800 focus:outline-none"
                ></textarea>
                <div
                  className="flex pt-5 gap-2 justify-end cursor-pointer hover:text-slate-500"
                  onClick={() => navigator.clipboard.writeText(installCode)}
                >
                  <CopyToClipboard text={installCode}>
                    <button className="flex flex-row gap-2 items-center cursor-pointer">
                      <svg
                        className="h-6 w-6 hover:text-slate-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />{" "}
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      Copy Text
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
            <div className="mt-4 text-slate-400">
              <p className="mb-3">2. Paste it into the header or footer of your website</p>
              <p>{data.website}</p>
            </div>
            <div className="flex justify-center mt-7">
              <button
                onClick={goPortal}
                className="text-white w-36 font-semibold bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-500 ease-in-out rounded-lg shadow-md px-5 py-2.5 text-center"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
