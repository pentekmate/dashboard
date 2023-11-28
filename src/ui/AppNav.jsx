import { useLocation } from "react-router-dom"
import { BsSearch,BsFillPersonFill  } from "react-icons/bs";
import { IoSettings,IoNotifications  } from "react-icons/io5";
import { useState } from "react";

function AppNav(){
    const location = useLocation()
    return(
        <div className="flex px-4  font-signin-p  text-slate-50 mt-6">
            <div className="flex-1">
                <p className="text-xs text-slate-400">Pages<span className="text-slate-50 mx-1 font-semibold"> {location.pathname}</span></p>
                <p className="text-sm font-semibold mt-1">{location.pathname.substring(1)}</p>
            </div>
            <div className="flex-1 justify-end  flex gap-7 text-slate-500">
                <div className="flex items-center border border-slate-700 transition-all rounded-xl px-3 group">
                    <BsSearch fill={"#64748b"} className="mr-2" /> 
                    <input placeholder="Type here.." className="bg-transparent placeholder:text-sm placeholder:text-slate-500 focus:outline-none" type="text"></input>
                </div>
                <div style={{cursor:"pointer"}} className="flex justify-center items-center gap-2">
                    <BsFillPersonFill  />
                    <p>Sign in</p>
                </div>
                <div style={{cursor:"pointer"}} className="flex justify-center items-center gap-2" >
                    <IoSettings />
                </div>
                <div style={{cursor:"pointer"}} className="flex justify-center items-center gap-2" >
                    <IoNotifications />
                </div>
                
            </div>
        </div>
    )
}
export default AppNav