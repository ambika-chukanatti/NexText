"use client"

import { EllipsisVertical, Search, Phone } from "lucide-react"
import { useState } from "react"
import ChatDropDown from "./ChatDropDown"
import ViewProfile from "./ViewProfile"

const ChatHeader = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [modalType, setModalType] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev)
  }

  const openModal = () => {
    setModalType(true)
    setShowDropdown(false)
  }

  const closeModal = () => {
    setModalType(false)
  }

  const handleCreateGroup = () => {
  }

  return (
    <div className='w-full flex flex-row items-center justify-between border-2 py-2 px-6 relative'>
      <div className='flex flex-col'>
        <h3 className='font-semibold text-lg'>Grey</h3>
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
