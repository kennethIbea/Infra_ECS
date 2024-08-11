import React from "react"
import { BrowserRouter } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"
import Logo from "./assets/icons/logo.svg"

// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

import { getQueryClient } from "./modules/queryClient"
import { Body } from "./Body"
import { GoogleOAuthProvider } from "@react-oauth/google"

function App() {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="container bg-gray-900">
          <img className="absolute top-10 left-10 w-40 hidden md:block" src={Logo} alt="logo" />
          <img className="absolute top-8 left-5 w-32 block md:hidden" src={Logo} alt="logo" />
          <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID || ""}>
            <Body />
          </GoogleOAuthProvider>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
