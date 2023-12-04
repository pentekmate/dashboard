import { FaFilePdf } from "react-icons/fa";
function InvoicesCard({date,code,amount}){
    return (
        <div className="flex w-full justify-between font-signin-p">
           <div className="flex flex-col">
            <p className="text-sm text-slate-50">{date}</p>
            <p className="text-xs text-slate-500">{code}</p>
           </div>
           <div className="flex gap-4 font-bold ">
                <p className="text-sm  text-slate-500">{amount}</p>
                <div className="flex  gap-1">
                <FaFilePdf size={12} className="mt-1" />
                <p className="text-sm text-slate-500 uppercase">pdf</p>
                </div>
           </div>
        </div>
    )
}

export default InvoicesCard