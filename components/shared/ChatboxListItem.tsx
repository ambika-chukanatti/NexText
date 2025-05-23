"use client"

import { useRouter } from "next/navigation"

interface ChatboxListItemProps {
  icon: React.ReactNode
  label: string
}

const ChatboxListItem: React.FC<ChatboxListItemProps> = ({ label }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/chat/${label.toLowerCase()}`) // adjust as needed
  }

  return (
    <div 
      className="flex items-center border-b space-x-4 px-4 py-3 rounded-md cursor-pointer hover:bg-[#2a2b2e] transition-colors"
      onClick={handleClick}
    >
      {/* <img src={icon} alt="logo" width={52} height={52} className="rounded-full" /> */}
      <div className="flex flex-col gap-1">
        <span className="text-white text-lg font-medium">{label}</span>
        <p>How are you?</p>
      </div>
    </div>
  )
}

export default ChatboxListItem
