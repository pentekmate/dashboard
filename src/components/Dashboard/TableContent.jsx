import { FaSpotify } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import members1 from '../../imgs/Members.png';
import slack from '../../imgs/slack.png'
import { SiAdobexd } from "react-icons/si";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { FaAtlassian } from "react-icons/fa";
import { SiJirasoftware } from "react-icons/si";

function TableContent({name,completed}) {
    function iconCheck(name){
        if(name==="spoti")
        return <FaSpotify size={18} fill="green" />
        else if (name==="atlas")
        return <FaAtlassian size={18} fill="#2684FF" />
        else if (name ==="adobe")
        return  <SiAdobexd enableBackground={true} color="blue" size={18} fill="#470137" />
        else if (name==="linkedin")
        return  <PiLinkedinLogoFill size={18} fill="#DC395F" />
        else if(name==="slack")
        return  <img className="w-[20px]" src={slack}></img>
        else if (name==="jira")
        return  <SiJirasoftware size={18} fill="#2684FF" />
    }
    return (
        <div className="py-3 flex justify-between font-signin-p items-center">
            <div className="flex items-center gap-4 w-[300px]">
                {iconCheck(name)}
                <p className="text-sm font-medium text-slate-50">Company Name</p>
            </div>
            <div className="w-[74px]">
                <img src={members1}></img>
            </div>
            <div className="w-[57px]">
                <p className="font-singin-p text-sm font-semibold">$14,000</p>
            </div>
            <div className="w-[100px]">
                <p className="text-sm">{completed}%</p>
                <ProgressBar height="5px"  isLabelVisible={false} baseBgColor="#2D2E5F" bgColor="#0075FF" completed={completed}></ProgressBar>
            </div>
        </div>
    );
}
export default TableContent