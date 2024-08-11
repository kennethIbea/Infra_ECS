import React from "react"
import { DesktopResponsive } from "./desktopResponsive"
import { MobileResponsive } from "./mobileResponsive"

export const SignUp: React.FC = () => {
  return (
    <>
      <div className="w-full hidden md:block">
        <DesktopResponsive />
      </div>
      <div className="w-full block md:hidden">
        <MobileResponsive />
      </div>
    </>
  )
}
