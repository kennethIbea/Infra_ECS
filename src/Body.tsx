import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"

import { SignUp } from "./pages/auth/signup"
import { SignIn } from "./pages/auth/signin"
// import { Onboarding } from "./pages/onboard"
import { Script } from "./pages/script"
import { ForgotPassword } from "./pages/auth/forgot"
import { FormContextProvider } from "./context/FormContext"

export function Body() {
  return (
    <Routes>
      <Route
        element={
          <FormContextProvider>
            <Outlet />
          </FormContextProvider>
        }
      >
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/script" element={<Script />} />
      </Route>
      <Route path="/forgot-pass" element={<ForgotPassword />} />
    </Routes>
  )
}
