import Sidebar from "./Sidebar";
import MenuBar from "./MenuBar";
import { Outlet } from "react-router-dom";

const Layout = ()=>{
     return(
          <>
          <div className="bg-[#FEF2CF]">
          <div className="flex h-screen">
               <Sidebar/>
               <div className="flex-1 flex-col w-screen">
                    <MenuBar/>
                    <div className="flex-1 overflow-y-auto p-6">
                         <Outlet/>
                    </div>
               </div>
          </div>
          </div>
          </>
     )
}

export default Layout;