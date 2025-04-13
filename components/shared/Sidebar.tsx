"use client"

import ToggleSidebar from "./ToggleSidebar"
import Search from "./Search"
import ChatboxListItem from "./ChatboxListItem"

const Sidebar = () => {
  return (
    <div className="w-full p-4">
        <section className="w-full flex flex-row gap-6 items-center">
            <ToggleSidebar/>
            <Search/>
        </section>
        <section className="mt-6 flex flex-col">
            <ChatboxListItem
                icon="/globe.svg"
                label="Grey"
            />
            <ChatboxListItem
                icon="/globe.svg"
                label="Grey"
            />
        </section>
    </div>
  )
}

export default Sidebar