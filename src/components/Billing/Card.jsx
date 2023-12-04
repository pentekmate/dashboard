import circle from '../../imgs/Circles.png'
function Card(){
    return(
        <div className="bg-cardbg font-signin-p gap-16 flex-col bg-center flex w-[460px] h-[239px] rounded-2xl py-5 px-6">
            <div className='flex justify-between  w-full'>
                <p className="text-slate-50 text-lg font-medium">Vision UI</p>
                <img className='w-[49px] h-[32px]' src={circle}></img>
            </div>
            <div className='flex'>
            <div className='flex flex-col gap-4 w-full'>
                <p className="text-slate-50 text-2xl font-bold">7812 2139 0823 XXXX</p>
                <div className='flex gap-12'>
                  <div className='flex flex-col'>
                    <p className='uppercase text-[10px] font-light text-slate-50'>Valid thru</p>
                    <p className='uppercase text-sm font-medium text-slate-50'>05/24</p>
                  </div>
                  <div className='flex flex-col'>
                    <p className='uppercase text-[10px] font-light text-slate-50'>cvv</p>
                    <p className='uppercase text-sm font-medium text-slate-50'>09x</p>
                  </div>
                </div>
            </div>
            </div>
         
       
        </div>
    )
}
export default Card