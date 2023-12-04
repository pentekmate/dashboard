import { SiAdobexd } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
function OrderCards({ name, date, title }) {
    function iconCheck(name){
        if(name==="bell")
        return <FaBell fill={"#0075FF"} size={18}></FaBell>
        else if(name==="cart")
        return <FaShoppingCart fill={"#0075FF"} size={18}></FaShoppingCart>
        else if(name==="card")
        return <BsCreditCardFill  fill={"#F6AD55"} size={18}></BsCreditCardFill>
        else if(name==="css")
        return <FaCss3Alt  fill={"#E31A1A"} size={18}></FaCss3Alt>
        else if(name==="adobe")
        return <SiAdobexd  fill={"#470137"} size={18}></SiAdobexd>
        else if(name==="")
        return <div className="w-[20px]"></div>
    }
    return (
        <div className="flex gap-5">
            <div className="flex py-1">
                {iconCheck(name)}
            </div>
            <div className="flex flex-col">
                <p className="text-slate-50 font-signin-p font-medium text-sm">{title}</p>
                <p className="text-slate-500 font-signin-p text-sm">{date}</p>
            </div>
        </div>
    );
}
export default OrderCards
