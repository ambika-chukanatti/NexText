import React, { useState } from "react"
import { X } from "lucide-react"

interface CreateGroupModalProps {
  onClose: () => void
  onCreate: (groupName: string) => void
}

const CreateGroupModal: React.FC<CreateGroupModalProps> = ({ onClose, onCreate }) => {
  const [groupName, setGroupName] = useState("")

  const handleCreate = () => {
    if (groupName.trim()) {
      onCreate(groupName)
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-[#1F1F1F] text-white p-6 rounded-xl w-[350px] relative shadow-lg">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-white">
          <X />
        </button>
        <div className="flex flex-col items-center">
          <div className="bg-blue-700 w-20 h-20 rounded-full flex items-center justify-center text-2xl mb-4">
            📷
          </div>
          <input
            type="text"
            placeholder="Group name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="w-full p-2 mb-4 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between w-full mt-2">
            <button onClick={onClose} className="text-blue-400 hover:underline">
              Cancel
            </button>
            <button
              onClick={handleCreate}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateGroupModal
