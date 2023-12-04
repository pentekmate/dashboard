import { FaCheckCircle } from "react-icons/fa";
import TableContent from './TableContent'

function ProjectsTable() {
    return (
        <div className="w-[1050px] flex flex-col  bg-gradient-to-br gap-2 px-5 py-7 from-70% rounded-3xl from-doc-bg-blue to-doc-bg-black ">
            <div className="flex gap-2 font-signin-p flex-col ">
                <p className="text-slate-50 font-semibold text-lg">Projects</p>
                <div className="flex gap-1 text-xs text-slate-500 items-center">
                    <FaCheckCircle fill="#01B574" size={15} />
                    <p>30 done this month</p>
                </div>
            </div>
            <div className="divide-y divide-[#56577A] grid grid-cols-1 text-slate-50">
                <div className="flex justify-between font-semibold">
                    <p className="uppercase text-[10px] font-signin-p w-[300px] tracking-tighter text-slate-500 py-3">companies</p>
                    <p className="uppercase text-[10px] font-signin-p w-[74px] tracking-tighter text-slate-500 py-3">members</p>
                    <p className="uppercase text-[10px] font-signin-p w-[57px] tracking-tighter text-slate-500 py-3">budget</p>
                    <p className="uppercase text-[10px] font-signin-p w-[100px] tracking-tighter text-slate-500 py-3">completion</p>
                </div>
                <TableContent name="adobe" completed={60}></TableContent>
                <TableContent name="atlas" completed={10}></TableContent>
                <TableContent name="slack" completed={100}></TableContent>
                <TableContent name="spoti" completed={100}></TableContent>
                <TableContent name="jira" completed={25}></TableContent>
                <TableContent name="linkedin" completed={40}></TableContent>

              
            </div>
        </div>
    )
}
export default ProjectsTable

