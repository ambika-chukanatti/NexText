import Sidebar from "@/components/shared/Sidebar"
import ToasterProvider from "@/components/shared/ToasterProvider"
import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";
import { getUserById } from "@/lib/actions/user.actions"; 

const layout = async({ children }: { children: React.ReactNode }) => {

  const cookiePromise = await cookies()
  const cookie = cookiePromise.get("session")?.value;
  const session = await decrypt(cookie);
  const user = session?.userId ? await getUserById(session.userId) : null;

  return (
    <main className='w-full h-screen flex flex-row'>
        <ToasterProvider/>
        <div className="w-4/12 border-r">
            <Sidebar
              user={user}
            />
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