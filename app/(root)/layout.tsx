import Sidebar from "@/components/shared/Sidebar"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='w-full h-screen flex flex-row'>
        <div className="w-4/12 border-r">
            <Sidebar/>
        </div>
        <div className="w-8/12">
            <div>
                {children}
            </div>
        </div>
    </main>
  )
}

export default layout