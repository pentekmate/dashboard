import { IoIosWallet } from "react-icons/io";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { RiFileListFill } from "react-icons/ri";

function DashboardCard({icon,percentage,title,content}){

    function iconcheck(){
        if(icon==="money")
        return <IoIosWallet fill="white" size={22.5} />
        else if(icon ==="user")
        return <FaEarthAfrica fill="white" size={22.5} />
        else if(icon ==="client")
        return <RiFileListFill  fill="white" size={22.5} />
        else if(icon==="sales")
        return <FaShoppingCart fill="white" size={22.5} />
    }


    const style={defstyle:"bg-gradient-to-b flex w-[382px] h-[80px] rounded-[20px] font-signin-p  from-card-black to-card-blue"};
    return (
    <div className={style.defstyle}>
        <div className="flex-1 flex flex-col gap-1 justify-center px-3">
            <p className="text-slate-400 font-bold tracking-wide text-xs">{title}</p>
            <p className="text-slate-50 text-lg font-black">{content} <span className={`text-xs ml-1 ${percentage<0?" text-red-800" :"text-green-600"} text-bold`}> {percentage>0?"+"+percentage:percentage} %</span></p>
        </div>
        <div className="flex-1 flex items-center justify-end px-5">
            <div className="w-[45px] h-[45px] rounded-lg flex justify-center items-center bg-singin-button">
                {iconcheck()}
            </div>
        </div>
    </div>
    )
}
export default DashboardCard