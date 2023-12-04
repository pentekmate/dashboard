import profileheader from '../../imgs/profileheader.png'
import headericon from '../../imgs/headericon.png'
import { FaUserGroup } from "react-icons/fa6";
import { BsBoxFill } from "react-icons/bs";
import { FaWrench } from "react-icons/fa6";
function ProfileHeader(){
    return (
        <div className="bg-gradient-to-b justify-between text-slate-50 from-40% from-balance-black to-balance-blue font-signin-p gap-5 flex bg-center  w-[1580px] h-[129px] rounded-2xl py-7 px-6 pr-20">
            <div className='flex gap-4'>
                <div className='relative w-[80px] h-[80px]'>
                    <img src={profileheader} className='rounded-xl  w-[75px] h-[75px]' alt="" />
                    <img src={headericon} className='absolute bottom-0 right-0 h-8 w-8' />
                </div>
                <div className='flex flex-col mt-3'>
                    <p className='font-bold text-xl'>Mark Johnson</p>
                    <p className='text-slate-500 text-sm'>mark@simmmple.com</p>
                </div>
            </div>
            <div className='flex gap-7 text-[10px] items-center'>
               <div className='flex py-3 bg-singin-button px-5 rounded-xl items-center gap-2'>
                <BsBoxFill />
                <p>Overview</p>
               </div>
               <div className='flex gap-2 items-center'>
                <FaUserGroup />
                <p>Teams</p>
               </div>
               <div className='flex gap-2 items-center'>
                <FaWrench />
                <p>Projects</p>
               </div>
               
            </div>
        </div>
    )
}

export default ProfileHeader