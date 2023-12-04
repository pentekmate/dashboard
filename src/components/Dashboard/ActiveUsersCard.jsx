import { IoIosWallet } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { BsRocketTakeoffFill   } from "react-icons/bs";
import { FaWrench } from "react-icons/fa6";
import ProgressBar from "@ramonak/react-progress-bar";
function ActiveUsersCard({title,amount}){
    function iconCheck(title){
        if(title==="Users"){
            return <IoIosWallet size={15} fill={"white"}></IoIosWallet>
        }
        else if(title==="Clicks"){
            return <BsRocketTakeoffFill size={15} fill={"white"}></BsRocketTakeoffFill>
        }
        else if(title==="Sales"){
            return <FaShoppingCart size={15} fill={"white"}></FaShoppingCart>
        }
        else if(title==="Items"){
            return <FaWrench size={15} fill={"white"}></FaWrench>
        }
   
   
    }
    function progBar(title){
        if(title==="Users")
        {
            return <ProgressBar height="5px" customLabel=" " baseBgColor="#2D2E5F" bgColor="#0075FF" completed="60"></ProgressBar>
        }
        else if(title==="Clicks")
        {
            return <ProgressBar height="5px" customLabel=" " baseBgColor="#2D2E5F" bgColor="#0075FF" completed="90"></ProgressBar>
        }
        else if(title==="Sales")
        {
            return <ProgressBar height="5px" customLabel=" " baseBgColor="#2D2E5F" bgColor="#0075FF" completed="30"></ProgressBar>
        }
        else if(title==="Items")
        {
            return <ProgressBar height="5px" customLabel=" " baseBgColor="#2D2E5F" bgColor="#0075FF" completed="55"></ProgressBar>
        }
    }
    return(
        <div className="w-[100px] h-[65.5px] flex flex-col gap-1" >
            <div className="flex gap-1 items-center">
                <div className="w-[30px] rounded-lg h-[30px] items-center flex justify-center bg-singin-button">
                    <div>{iconCheck(title)}</div>
                </div>
                <p className="text-slate-500 text-sm">{title}</p>
            </div>
            <p className="text-slate-50 text-lg font-bold">{amount}</p>
            <div>{progBar(title)}</div>
        </div>
    )
}

export default ActiveUsersCard