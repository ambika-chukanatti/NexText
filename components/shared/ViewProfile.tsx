import { X } from "lucide-react"

interface ViewProfileProps {
  onClose: () => void;
}

const ViewProfile: React.FC<ViewProfileProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-gray-900 text-white w-[350px] rounded-lg shadow-lg p-4 relative">
            <div className="flex flex-row px-2 mb-6 items-center justify-between">
                <h3 className="font-medium text-lg">User Info</h3>
                <X onClick={onClose} className="text-white hover:text-gray-400 text-xl"/>
            </div>
            <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-xl font-bold">
                    A
                </div>
                <div>
                    <h2 className="text-xl font-semibold">Anushhhh</h2>
                    <p className="text-sm text-gray-400">last seen recently</p>
                </div>
            </div>
            <hr className="border-gray-300 my-2" />
            <div className="px-6">
                <div>
                    <h3 className="font-semibold text-lg">Bio</h3>
                    <p>Can&apos;t talk, loopchat only</p>
                </div>
            </div>
                <hr className="border-gray-300 my-2" />

            <div className="px-6">
                {/* Username */}
                <div className="mb-4 mt-2">
                <p>+91 9876543210</p>
                <p className="text-sm text-gray-400">Mobile</p>
                </div>

                {/* Add to Contacts */}
                <div className="text-blue-400 cursor-pointer mb-4 hover:underline">ADD TO CONTACTS</div>

                {/* Notifications */}
                <div className="flex justify-between items-center mb-4">
                <span className="text-lg">Notifications</span>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                </label>
                </div>
            </div>

                <hr className="border-gray-300 my-2" />
            <div className="px-6">
                <div className="cursor-pointer hover:underline py-2">Edit Contact</div>
                <div className="cursor-pointer hover:underline py-2">Delete Contact</div>
                {/* Block User */}
                <div className="text-red-500 cursor-pointer hover:underline py-2">Block user</div>
            </div>
        </div>
    </div>
  )
}

export default ViewProfile
