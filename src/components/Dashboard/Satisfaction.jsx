import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import GradientSVG from '../../helpers/Gradient';
import SatisfactionContent from '../../helpers/SatisfactionContent';
const idCSS = "hello";

function Satisfaction() {
  return (
    <div className="bg-gradient-to-b flex-col py-6 px-8  from-card-black from rounded-xl to-card-blue from-50% w-[350px] h-[344px] flex ">
      <div className=' text-slate-50 font-signin-p '>
        <p className='text-lg  font-black '>Satisfaction Rate</p>
        <p className='text-xs text-slate-500 font-bold' >From all projects</p>
      </div>
      <div className='flex-1 pb-5 relative flex items-center justify-center'>
        <div className='w-[206px]'>
          <GradientSVG />
          <CircularProgressbarWithChildren
            animated
            strokeWidth={8}
            value={75}
            styles={buildStyles({
              pathColor: `url(#${idCSS})`,
              trailColor: '#22234B',
              rotation: 0.50,
              
            })}
          >
            <SatisfactionContent></SatisfactionContent>
          </CircularProgressbarWithChildren>
        </div>
        <div className='z-10 text-slate-400 text-xs font-signin-p px-4 py-4 absolute justify-evenly  mt-40 bg-gradient-to-b from-st-bg-blue rounded-xl flex flex-row to-st-bg-black  w-[293px] h-[82px]'>
          <p className='w-[35px]'>0%</p>
          <div className='flex flex-col'>
            <p className='text-slate-50 text-xl self-center text-center'>95%</p>
            <p className='text-xs '>Based on likes</p>
          </div>
          <p>100%</p>
        </div>
      </div>
    </div>
  )
}
export default Satisfaction