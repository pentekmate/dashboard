import { FaCheckCircle } from "react-icons/fa";
import ProjectsTableCard from './ProjectsTableCard'

function ProjectsTable() {
    return (
        <div className="w-[1580px] h-[488.5px] flex flex-col  bg-gradient-to-br gap-2 px-5 py-7 from-70% rounded-3xl from-doc-bg-blue to-doc-bg-black ">
            <div className="flex gap-2 font-signin-p flex-col ">
                <p className="text-slate-50 font-semibold text-lg">Projects</p>
                <div className="flex gap-1 text-xs text-slate-500 items-center">
                    <FaCheckCircle fill="#01B574" size={15} />
                    <p>30 done this month</p>
                </div>
            </div>
            <div className="divide-y divide-[#56577A] grid grid-cols-1 text-slate-50">
                <div className="flex justify-between font-semibold">
                    <p className="uppercase text-[10px] font-signin-p w-[500px] tracking-tighter text-slate-500 py-3">companies</p>
                    <p className="uppercase text-[10px] font-signin-p w-[85px] tracking-tighter text-slate-500 py-3">budget</p>
                    <p className="uppercase text-[10px] font-signin-p w-[65px] tracking-tighter text-slate-500 py-3">status</p>
                    <p className="uppercase text-[10px] font-signin-p w-[100px] tracking-tighter text-slate-500 py-3">completion</p>
                    <p className="uppercase text-[10px] font-signin-p w-[100px] tracking-tighter text-slate-500 py-3"></p>
                </div>
                <ProjectsTableCard name="adobe" budget={"$14,000"} status={"Working"} completed={60} ></ProjectsTableCard>
                <ProjectsTableCard name="atlas" budget={"$3,000"} status={"Canceled"} completed={10} ></ProjectsTableCard>
                <ProjectsTableCard name="jira" budget={"Not set"} status={"Done"} completed={100} ></ProjectsTableCard>
                <ProjectsTableCard name="slack" budget={"$32,000"} status={"Done"} completed={100} ></ProjectsTableCard>
                <ProjectsTableCard name="spoti" budget={"$400"} status={"Working"} completed={25} ></ProjectsTableCard>
              
            </div>
        </div>
    )
}
export default ProjectsTable