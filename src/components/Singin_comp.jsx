import { Link } from "react-router-dom"

function Signin_comp(){
    return (
        <div className="flex">
            <div className='bg-header-background h-screen flex-col w-2/4 bg-cover flex items-center gap-4 justify-center'>
                <p className="text-slate-50 font-signin-p text-xl tracking-widest font-semibold">INSPIRED BY THE FUTURE:</p>
                <h1 className="text-slate-50 font-singin-p font-bold text-3xl tracking-[15px]">THE VISION UI DASHBOARD</h1>
            </div>
            <div className='bg-gradient-to-r w-2/4 h-screen flex  flex-col  from-linear-blue from-10% via-linear-black via-30% to-linear-2black to-90%'>
               <div className="px-28 mt-52 flex flex-col gap-1">
               <h3 className="text-slate-50 font-signin-p font-bold text-3xl">Nice to see you!</h3>
               <p className="font-singin-p text-slate-500 text-sm">Enter your email and password to sign in</p>
               <form className="mt-9 flex-col flex gap-6">
                <div className="flex flex-col gap-1 w-96">
                    <label className="text-slate-50 font-signin-p font-semibold text-sm">Email</label>
                    <input className="py-3 px-2 rounded-2xl border border-[#582CFF] bg-transparent focus:border-slate-50 transition-all duration-300" placeholder="Your email address"></input>
                </div>
                <div className="flex flex-col gap-1 w-96">
                    <label className="text-slate-50 font-signin-p font-semibold text-sm">Password</label>
                    <input className="py-3 px-2 rounded-2xl border border-[#582CFF] bg-transparent focus:border-slate-50 transition-all duration-300" placeholder="Your password"></input>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="rounded-full"></input>
                    <label className="text-slate-50 text-sm font-signin-p">Remember me</label>
                </div>
                <div className="w-96">
                    <Link to="/app" className="inline-block text-center bg-singin-button w-full py-4 rounded-xl text-slate-50 font-signin-p font-semibold text-sm">
                       Sign in
                    </Link>
                </div>
                <p className="text-slate-500 font-signin-p text-center w-96 font-semibold">Don`t have an account?<span className="text-slate-50 px-1">Sign up</span></p>
               </form>
               <div className="w-96 flex flex-col justify-center gap-5">
                <p className="pt-32 text-slate-500 text-sm  text-center">@ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web</p>
                <div className="flex gap-10 px-20 text-sm text-slate-500">
                    <p>Marketplace</p>
                    <p>Blog</p>
                    <p>License</p>
                </div>
               </div>
               </div>
               
            </div>
     </div>
    )
}
export default Signin_comp