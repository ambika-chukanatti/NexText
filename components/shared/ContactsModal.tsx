import { X } from "lucide-react"

const ContactsModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-black">
          <X />
        </button>
        <h2 className="text-xl font-semibold mb-4">Contacts</h2>
        <div className="flex flex-col gap-3">
          {["El Gui", "Nazleen X", "A un..", "abdul", "Abhilash Kpl"].map((name, i) => (
            <div key={i} className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold">
                {name.charAt(0)}
              </div>
              <div>{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactsModal
