import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import ReferalGradientSVG from '../../helpers/ReferralGradient';
import ReferralContent from '../../helpers/ReferralContent';
import { IoIosMore } from "react-icons/io";
const idCSS = "refgrad";
function ReferralCard() {
    return (
        <div className="flex flex-col w-[551px] py-6 px-8 rounded-xl h-[344px] from-70% bg-gradient-to-b from-card-black to-card-blue">
            <div className="flex justify-between w-full">
                <p className=" text-slate-50 mt-1 font-signin-p font-black">Referral Tracing</p>
                <div className="w-[37px] h-[37px] bg-slate-800 flex items-center rounded-xl justify-center ">
                    <IoIosMore fill={"#7551FF"} />
                </div>
            </div>
            <div className="flex gap-5 pl-2 mt-5 flex-row">
                <div className="flex-1 flex-col flex gap-5 font-signin-p" >
                    <div className="bg-gradient-to-b rounded-[20px] py-5 px-6 from-rf-bg-black to-rf-bg-blue">
                        <p className="text-slate-400 text-xs">Invited</p>
                        <p className="text-slate-50 font-black">145 people</p>
                    </div>
                    <div className="bg-gradient-to-b rounded-[20px] py-5 px-6 from-rf-bg-black from- to-rf-bg-blue">
                        <p className="text-slate-400 text-xs">Bonus</p>
                        <p className="text-slate-50 font-black">1,465</p>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center" >
                    <div className='w-[206px]'>
                        <ReferalGradientSVG />
                        <CircularProgressbarWithChildren
                            strokeWidth={8}
                            value={75}
                            styles={buildStyles({
                                pathColor: `url(#${idCSS})`,
                                trailColor: 'transparent',
                                rotation: 0.50,
                            })}
                        >
                            <ReferralContent></ReferralContent>
                        </CircularProgressbarWithChildren>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ReferralCard