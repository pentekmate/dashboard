import { FaCheckCircle } from "react-icons/fa";
import OrderCards from "./OrderCards";
function Orders() {
    return (
        <div className="w-[519px] flex flex-col bg-gradient-to-br gap-2 px-5 py-7 from-70% rounded-3xl from-doc-bg-blue to-doc-bg-black">
            <p className="text-slate-50 font-bold font-signin-p text-lg">Orders overview</p>
            <div className="flex gap-2 items-center">
                <FaCheckCircle fill="#01B574" size={15} />
                <p className="text-slate-500 font-signin-p text-xs">+30% this month</p>
            </div>
            <div className="mt-5 flex flex-col gap-4">
                <OrderCards name={"bell"} title={"$2400, Design changes"} date={"22 DEC 7:20 PM"}></OrderCards>
                <OrderCards name={"css"} title={"New order #4219423"} date={"21 DEC 11:21 PM"}></OrderCards>
                <OrderCards name={"cart"} title={"Server Payments for April"} date={"21 DEC 9:28 PM"}></OrderCards>
                <OrderCards name={"card"} title={"New card added for order #3210145"} date={"20 DEC 3:52 PM"}></OrderCards>
                <OrderCards name={""} title={"Unlock packages for Development"} date={"19 DEC 11:35 PM"}></OrderCards>
                <OrderCards name={"adobe"} title={"New order #9851258"} date={"18 DEC 4:41 PM"}></OrderCards>
            </div>
        </div>
    )
}
export default Orders
