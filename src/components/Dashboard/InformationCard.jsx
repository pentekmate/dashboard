import { BsArrowRightShort } from "react-icons/bs";
function InformationCard(){
 return(
    <div className="bg-medusa rounded-3xl  bg-center bg-cover flex w-[652px] h-[344px] ">
        <div className="py-6 px-8 rounded-3xl card-container text-slate-400 font-signin-p">
            <p className="text-xs">Welcome back,</p>
            <p className="text-2xl py-2 text-slate-50 font-black">Mark Johnson</p>
            <p>Glad to see you again!</p>
            <p>Ask me anything.</p>
            <div style={{cursor:"pointer"}} className="mt-36 text-sm text-slate-50 font-black flex  items-center">
             <p>Tap to record</p>
             <BsArrowRightShort className="mt-1" size={25} />
            </div>
           
        </div>
    </div>
 )
}
export default InformationCard