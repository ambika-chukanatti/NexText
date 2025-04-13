import { X } from "lucide-react"

const settingsOptions = [
  "Edit profile",
  "Notifications and Sounds",
  "Privacy and Security",
  "Chat Settings",
  "Folders",
  "Advanced",
  "Call Settings",
  "Language",
  "Telegram Premium",
  "Default interface scale"
]

const SettingsModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl relative max-h-[80vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-black">
          <X />
        </button>
        <h2 className="text-xl font-semibold mb-4">Settings</h2>
        <ul className="flex flex-col gap-3">
          {settingsOptions.map((option, i) => (
            <li key={i} className="hover:bg-gray-100 p-2 rounded-md text-sm">
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SettingsModal
