"use client"

import { useParams } from "next/navigation"
import ChatHeader from "@/components/shared/ChatHeader"

const ChatPage = () => {
  const params = useParams()
  const label = typeof params.id === "string" ? params.id : "unknown"

  console.log("label",label)

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <ChatHeader 
        label = {label}
      />
    </div>
  )
}

export default ChatPage
