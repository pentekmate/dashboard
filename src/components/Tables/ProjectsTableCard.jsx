import { FaSpotify } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import slack from '../../imgs/slack.png'
import { SiAdobexd } from "react-icons/si";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { FaAtlassian } from "react-icons/fa";
import { SiJirasoftware } from "react-icons/si";
function ProjectsTableCard({status,name,budget,completed}){
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
        <div className="py-5 flex justify-between font-signin-p items-center">
            <div className="flex items-center gap-4 w-[500px]">
                {iconCheck(name)}
                <p className="text-sm font-medium text-slate-50">Company Name</p>
            </div>
            <div className="w-[85px]">
               <p className="text-sm">{budget}</p>
            </div>
            <div className="w-[65px]">
                <p className="font-singin-p text-sm font-semibold">{status}</p>
            </div>
            <div className="w-[100px]">
                <p className="text-sm">{completed} %</p>
                <ProgressBar height="5px"  isLabelVisible={false} baseBgColor="#2D2E5F" bgColor="#0075FF" completed={completed}></ProgressBar>
            </div>
            <div className="w-[100px]">
                
            </div>
        </div>
    );
}
export default ProjectsTableCard