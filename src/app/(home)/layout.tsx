"use client";


import { Footer } from "./footer";
import { Navbar } from "./navbar"

interface props {
  children: React.ReactNode
}
// This is a layout component for the home page

const layout = ({ children }: props) => {
  return (
    <div className="flex flex-col min-h-screen" >
        <Navbar />
        <div className="flex-1 bg-[#f4f4f0]">
        {children}
        </div>
        <Footer />
    </div>
  )
}

export default layout