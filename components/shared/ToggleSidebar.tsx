"use client"

import { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignLeft } from "lucide-react"
import Image from "next/image"
import CreateGroupModal from "./CreateGroupModal"
import SettingsModal from "./SettingsModal"
import ContactsModal from "./ContactsModal"
import { User } from "@/constants"

type SidebarProps = {
  user: User
}

const ToggleSidebar = ({ user }: SidebarProps) => {
  const [modalType, setModalType] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const handleCreateGroup = () => {
  }

  const closeModal = () => {
    setModalType("")
  }

  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <AlignLeft
            className="w-7 h-7 cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
        <div className='w-full flex flex-row items-center border py-4 px-6 gap-8'>
            <Image src="/globe.svg" alt="logo" width={58} height={58}/>
            <h3 className="text-2xl text-gray-600 font-bold">{user.username}</h3>
        </div>
            <ul className='flex flex-col gap-4 px-5 mt-8 text-gray-600 text-[18px] font-medium'>
                <li onClick={
                  () => {
                    setModalType("new-group")
                    setIsOpen(false)
                  }
                } className="p-2 pl-8 rounded-lg hover:bg-zinc-600 hover:text-white">New Group</li>
                <li onClick={ 
                  () => {
                    setModalType("contacts")
                    setIsOpen(false)
                  }
                } className="p-2 pl-8 rounded-lg hover:bg-zinc-600 hover:text-white">Contacts</li>
                <li onClick={
                  () => {
                    setModalType("settings")
                    setIsOpen(false)
                  }
                } className="p-2 pl-8 rounded-lg hover:bg-zinc-600 hover:text-white">Settings</li>
                <li className="p-2 pl-8 rounded-lg hover:bg-zinc-600 hover:text-white">Night Mode</li>
                <li className="p-2 pl-8 rounded-lg hover:bg-zinc-600 hover:text-white">Logout</li>
            </ul>
        </SheetContent>
    </Sheet>
    {modalType=="new-group" && <CreateGroupModal onClose={closeModal} onCreate={handleCreateGroup}/>}
    {modalType=="settings" && <SettingsModal onClose={closeModal}/>}
    {modalType=="contacts" && <ContactsModal onClose={closeModal}/>}
  </div>
  )
}

export default ToggleSidebar;