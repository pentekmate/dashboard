import Sidebar_comp from "../ui/Sidebar"

function Dashboard(){
    return(
        <div className="bg-gradient-to-r flex  flex-col  from-linear-blue from-10% via-linear-black via-30% to-linear-2black to-90% h-screen">
        <Sidebar_comp></Sidebar_comp>
        </div>
    )
}
export default Dashboard