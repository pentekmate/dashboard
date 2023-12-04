import masterCard from '../../imgs/MastercardIcon.svg'
import visa from '../../imgs/VisaIcon.png'
import { MdEdit } from "react-icons/md";
function Payment(){
    return(
    <div className="bg-gradient-to-br to-90% from-balance-black to-balance-blue font-signin-p gap-5 flex-col bg-center flex w-[900px] h-[172px] rounded-2xl py-5 px-6">
        <div className="flex  items-center font-signin-p text-slate-50 px-3 justify-between">
            <p className="font-semibold">Payment Method</p>
            <div className="tracking-tight uppercase text-[10px] flex items-center py-3 px-4 rounded-xl bg-singin-button">Add a new card</div>
        </div>
       <div className='flex gap-4'>
       <div className="w-[412px] px-6 h-[65px] items-center justify-between flex border-2 border-lognav-second-white rounded-2xl">
            <div className='flex gap-4'>
            <img src={masterCard} alt="" />
            <p className='text-slate-50 font-signin-p font-bold'>7812 2139 0823 XXXX</p>
            </div>
            <MdEdit fill='white' />
        </div>
        <div className="w-[412px] px-6 h-[65px] items-center justify-between flex border-2 border-lognav-second-white rounded-2xl">
            <div className='flex gap-4 items-center'>
            <img className='w-[24px] h-[8px]' src={visa} alt="" />
            <p className='text-slate-50 font-signin-p font-bold'>7812 2139 0823 XXXX</p>
            </div>
            <MdEdit fill='white' />
        </div>
       </div>
    </div>
    )
}

export default Payment