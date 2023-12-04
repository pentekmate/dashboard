import AuthorsTableCard from "./AuthorsTableCard";

function AuthorsTable() {
    return (
        <div className="w-[1580px] h-[488.5px]  bg-gradient-to-br gap-2 px-5 py-7 from-70% rounded-3xl from-doc-bg-blue to-doc-bg-black">
            <p className="text-lg font-signin-p text-slate-50 tracking-tight font-bold">Authors Table</p>
            <div className="divide-y divide-[#56577A] grid grid-cols-1 text-slate-50 mt-3">
                <div className="flex justify-between font-semibold">
                    <p className="uppercase text-[10px] font-signin-p w-[500px] tracking-tighter text-slate-500 py-3">author</p>
                    <p className="uppercase text-[10px] font-signin-p w-[85px] tracking-tighter text-slate-500 py-3">function</p>
                    <p className="uppercase text-[10px] font-signin-p w-[65px] tracking-tighter text-slate-500 py-3">status</p>
                    <p className="uppercase text-[10px] font-signin-p w-[100px] tracking-tighter text-slate-500 py-3">employed</p>
                    <p className="uppercase text-[10px] font-signin-p w-[100px] tracking-tighter text-slate-500 py-3"></p>
                </div>
                <AuthorsTableCard picture={"Esthera"} name="Esthera" email={"esthera@simmmple.com"} func={"Manager"} org={"Organization"} status={"online"} employed={"14/06/21"} ></AuthorsTableCard>
                <AuthorsTableCard picture={"Alexa"} name="Alexa Liras" email={"alexa@simmmple.com"} func={"Programmer"} org={"Developer"} status={"offline"} employed={"14/06/21"} ></AuthorsTableCard>
                <AuthorsTableCard picture={"Laurent"} name="Laurent Michael" email={"laurent@simmmple.com"} func={"Executive"} org={"Projects"} status={"online"} employed={"14/06/21"} ></AuthorsTableCard>
                <AuthorsTableCard picture={"Fred"} name="Freduardo Hill" email={"freduardo@simmmple.com"} func={"Manager"} org={"Organization"} status={"online"} employed={"14/06/21"} ></AuthorsTableCard>
                <AuthorsTableCard picture={"Daniel"} name="Daniel Thomas" email={"daniel@simmmple.com"} func={"Programmer"} org={"Developer"} status={"offline"} employed={"14/06/21"} ></AuthorsTableCard>
                <AuthorsTableCard picture={"Mark"} name="Mark Wilson" email={"mark@simmmple.com"} func={"Designer"} org={"UI/UX Design"} status={"offline"} employed={"14/06/21"} ></AuthorsTableCard>
            </div>
        </div>
    );
}
export default AuthorsTable
