import { BsBoxFill,BsPersonFill,BsPersonCircle,BsFillKeyFill   } from "react-icons/bs";
function logNav(){
return(
    <div className="px-6 uppercase justify-center items-center  bg-gradient-to-r text-slate-50 font-signin-p z-10 border-2 border-lognav-second-white flex backdrop-blur-2xl rounded-[20px] mt-5 from-lognav-white to-lognav-second-white py-5  w-[987px] ">
    <p className="font-semibold text-sm tracking-widest mr-44">Vision ui free</p>

    <div className="flex gap-8 text-[10px] font-bold">
        <div style={{cursor:"pointer"}} className="flex justify-center items-center gap-2">
            <BsBoxFill /> 
            <p>Dashboard</p>
        </div>
        <div style={{cursor:"pointer"}} className="flex justify-center items-center gap-2">
            <BsPersonFill/>
            <p>profile</p>
        </div>
        <div style={{cursor:"pointer"}} className="flex justify-center items-center gap-2">
            <BsPersonCircle />
            <p>sign up</p>
        </div>
        <div style={{cursor:"pointer"}} className="flex justify-center items-center gap-2">
            <BsFillKeyFill />
            <p>sign in</p>
        </div>
        <div style={{cursor:"pointer"}} className="flex justify-center items-center gap-2 ml-20 w-[150px]">
            <button className="bg-button-bg w-[150px] h-[35px] rounded-xl">
                Free Download
            </button>
        </div>
        
    </div>
    </div>
)
}
export default logNav