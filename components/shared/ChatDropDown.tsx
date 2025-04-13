import React from 'react'

interface Props {
  onOptionClick: (option: string) => void;
}

const ChatDropDown: React.FC<Props> = ({ onOptionClick }) => {
  return (
    <div className="absolute top-10 right-0 bg-white border shadow-md rounded-md w-50 z-50">
        <ul className="flex flex-col gap-3 py-2">
            <li onClick={() => onOptionClick('View Profile')} className="px-6 py-2 hover:bg-gray-800 cursor-pointer">View Profile</li>
            <li onClick={() => onOptionClick('Mute Notifications')} className="px-6 py-2 hover:bg-gray-800 cursor-pointer">Mute Notifications</li>
            <li onClick={() => onOptionClick('Block')} className="px-6 py-2 hover:bg-gray-800 cursor-pointer">Block</li>
            <li onClick={() => onOptionClick('Delete Chat')} className="px-6 py-2 hover:bg-gray-800 cursor-pointer">Delete Chat</li>
        </ul>
    </div>
  )
}

export default ChatDropDown
