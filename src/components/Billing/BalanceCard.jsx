import { IoIosMore } from "react-icons/io";
import graph from '../../imgs/Graph.svg'
import { MdDomain } from "react-icons/md";
function BalanceCard(){
    return(
        <div className="bg-gradient-to-br from-1%  from-balance-black to-balance-blue font-signin-p gap-6 flex-col bg-center flex w-[460px] h-[239px] rounded-2xl py-5 px-6">
            <div className='flex flex-col bg-gradient-to-br gap-2 px-5 h-[103px] py-5 from-55% to-10% rounded-3xl from-doc-bg-blue to-bill-card-blue w-full'>
                <div className="flex items-center justify-between">
                    <p className="text-slate-200 text-xs font-medium">Credit Balance</p>
                    <IoIosMore fill="white" size={20} />
                </div>
                <div className="flex justify-between">
                    <p className="text-slate-50 text-3xl font-bold">$25,215</p>
                    <img src={graph}  />
                </div>
            </div>
            <div className="font-signin-p justify-between flex gap-2">
                <div className="flex flex-col gap-3">
                <p className="uppercase text-slate-500 text-xs ">newest</p>
                 <div className="flex gap-3">
                 <div className="bg-balance-icon-bg w-[42px] h-[42px] rounded-full flex items-center justify-center">
                    <MdDomain size={20} fill="green" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-50">Bill & Taxes</p>
                        <p className="text-xs text-slate-500">Today, 16:36</p>
                    </div>
                 </div>
                </div>
                <div className="items-center flex font-signin-p text-sm font-bold text-slate-50">
                    <p>-$154.50</p>
                </div>
            </div>
            
         
       
        </div>
    )
}
export default BalanceCard