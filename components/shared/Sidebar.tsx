"use client"

import ToggleSidebar from "./ToggleSidebar"
import Search from "./Search"
import ChatboxListItem from "./ChatboxListItem"
import { User } from "@/constants"

type SidebarProps = {
  user: User
}

const Sidebar = ({ user }: SidebarProps) => {
  return (
    <div className="w-full p-4">
        <section className="w-full flex flex-row gap-6 items-center">
            <ToggleSidebar
                user={user}
            />
            <Search/>
        </section>
        <section className="mt-6 flex flex-col">
            <ChatboxListItem
                icon="/globe.svg"
                label="Grey"
            />
            <ChatboxListItem
                icon="/globe.svg"
                label="Jade"
            />
        </section>
    </div>
  )
}

export default Sidebar