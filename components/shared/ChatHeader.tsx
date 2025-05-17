"use client"

import { EllipsisVertical, Search, Phone } from "lucide-react"
import { useState } from "react"
import ChatDropDown from "./ChatDropDown"

const ChatHeader = ({label}: {label:string}) => {
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev)
  }

  const openModal = () => {
    setShowDropdown(false)
  }

  return (
    <div className='w-full flex flex-row items-center justify-between border-2 py-2 px-6 relative'>
      <div className='flex flex-col'>
        <h3 className='font-semibold text-lg'>{label}</h3>
        <p className='text-sm'>last seen recently</p>
      </div>

      <div className="flex flex-row gap-6 relative">
        <Search />
        <Phone />
        <EllipsisVertical className="cursor-pointer" onClick={toggleDropdown} />

        {showDropdown && <ChatDropDown onOptionClick={openModal} />}
      </div>

    </div>
  )
}

export default ChatHeader
