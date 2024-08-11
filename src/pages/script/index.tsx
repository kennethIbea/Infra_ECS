import React from "react"
import { DesktopScript } from "./desktopResponsive"
import { MobileScript } from "./mobileResponsive"

export const Script: React.FC = () => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopScript />
      </div>
      <div className="block md:hidden">
        <MobileScript />
      </div>
    </>
  )
}
