import { FaCalendarDays } from "react-icons/fa6";
import TransactionsCard from "./TransactionsCard";
function Transactions(){
    return (
        <div className="bg-gradient-to-br gap-1 text-slate-50 to-90% from-balance-black to-balance-blue font-signin-p  flex-col bg-center flex w-[650px] h-[538px] rounded-2xl py-7 px-6">
            <div className="flex w-full justify-between">
                <p>Your Transactions</p>
                <p className="flex gap-2 text-slate-500  py-2 rounded-xl text-[10px]">
                <FaCalendarDays size={13} />
                23-30 March 2020
                </p>
            </div>
            <div className=" flex flex-col gap-8">
                <p className="uppercase text-[10px] text-slate-500">newest</p>
            </div>
            <div className="flex flex-col gap-3">
                <TransactionsCard amount={"-2500"} date={"27 March 2020, at 12:30 PM"} name={"Netflix"}></TransactionsCard>
                <TransactionsCard amount={"+2500"} date={"27 March 2020, at 12:30 PM"} name={"Netflix"}></TransactionsCard>
                <p className="text-slate-500 font-signin-p uppercase text-[10px]">yesterday</p>
                <TransactionsCard amount={"+800"} date={"27 March 2020, at 12:30 PM"} name={"Netflix"}></TransactionsCard>
                <TransactionsCard amount={"+1700"} date={"27 March 2020, at 12:30 PM"} name={"Netflix"}></TransactionsCard>
                <TransactionsCard amount={"Pending"} date={"27 March 2020, at 12:30 PM"} name={"Netflix"}></TransactionsCard>
                <TransactionsCard amount={"-987"} date={"27 March 2020, at 12:30 PM"} name={"Netflix"}></TransactionsCard>
            </div>
        </div>
    )
}

export default Transactions