import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
function BillingInfoCard({name,companyName,email,vat}){
    return (
        <div className="bg-gradient-to-br  justify-between text-slate-50 from-1% to-50% to-balance-black from-bill-card-black font-signin-p gap-5 bg-center flex w-[855px] h-[132px] rounded-2xl py-7 px-6">
            <div>
                <p className="font-bold text-sm py-1">{name}</p>
                <p className="text-xs text-slate-500">Company Name:{companyName}</p>
                <p className="text-xs text-slate-500">Email Address: {email}</p>
                <p className="text-xs text-slate-500">VAT Number:{vat}</p>
            </div>
            <div className="flex gap-4 uppercase text-xs py-3 ">
               <div className="flex gap-1 cursor-pointer">
                    <MdDelete fill="#F53C2B" size={15} />
                    <p className="text-[#F53C2B] font-bold">delete</p>
               </div>
                <div className="flex gap-1 cursor-pointer">
                    <MdEdit />
                    <p>edit </p>
                </div>
            </div>
        </div>
    )
}

export default BillingInfoCard