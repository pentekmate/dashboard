import Esthera from '../../imgs/1.png'
import Alexa from '../../imgs/2.png'
import Laurent from '../../imgs/3.png'
import Fred from '../../imgs/4.png'
import Daniel from '../../imgs/5.png'
import Mark from '../../imgs/6.png'
function AuthorsTableCard({picture,name,email,func,org,status,employed}){
    function imgCheck(picture){
        if(picture==="Esthera"){
            return <img src={Esthera}></img>
        }
        else if(picture==="Alexa"){
            return <img src={Alexa}></img>
        }
        else if(picture==="Laurent"){
            return <img src={Laurent}></img>
        }
        else if(picture==="Fred"){
            return <img src={Fred}></img>
        }
        else if(picture==="Daniel"){
            return <img src={Daniel}></img>
        }
        else if(picture==="Mark"){
            return <img src={Mark}></img>
        }
    }
    return (
        <div className="py-1 flex justify-between font-signin-p items-center">
        <div className="flex items-center gap-4 w-[500px]">
            {imgCheck(picture)}
            <div>
                <p className="text-sm font-medium text-slate-50">{name}</p>
                <p className="text-sm font-medium text-slate-500">{email}</p>
            </div>
        </div>
        <div className="w-[85px] flex flex-col">
            <p>{func}</p>
            <p className='text-slate-500 text-xs'>{org}</p>
        </div>
        <div className="w-[65px]">
           {status==="online"
           ?
           <div className='bg-green-600 flex justify-center rounded-2xl py-1 w-[65px] text-slate-50 font-signin-p text-sm font-medium'>Online</div>
           :
           <div className='bg-transparent flex items-center rounded-2xl justify-center w-[65px] py-1 border border-slate-50 text-slate-50 font-signin-p text-sm font-medium'><p className='px-2'>Offline</p></div>
            }
        </div>
        <div className="w-[100px]">
           {employed}
        </div>
        <div className="w-[120px]">
          <p className='font-singin-p text-slate-500 font-sm'>Edit</p>
        </div>
    </div>
    )
}

export default AuthorsTableCard