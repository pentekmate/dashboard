import AppNav from "../../ui/AppNav"
import DashboardCard from "../../ui/DashboardCard"
import InformationCard from "./InformationCard";
import ReferralCard from "./ReferralCard";
import Satisfaction from "./Satisfaction";
import Sidebar_comp from "../../ui/Sidebar"
import SalesOverview from "./SalesOverview";
import ActiveUsers from "./ActiveUsers";


function Dashboard() {
    return (
        <div className="bg-appbg h-fit relative bg-cover bg-center">
            <div className="flex gap-5 flex-row appcontainer ">
                <div className="w-[264px]">
                    <Sidebar_comp></Sidebar_comp>
                </div>
                <div className="flex-1 flex gap-5 flex-col w-full">
                    <AppNav></AppNav>
                    <div className="flex gap-2">
                        <DashboardCard title={"Today' Money"} content={"$53,000"} percentage={55} icon={"money"}></DashboardCard>
                        <DashboardCard title={"Today's Users"} content={"$2,300"} percentage={5} icon={"user"}></DashboardCard>
                        <DashboardCard title={"New Clients"} content={"+3,052"} percentage={-14} icon={"client"}></DashboardCard>
                        <DashboardCard title={"Total sales"} content={"$173,000"} percentage={8} icon={"sales"}></DashboardCard>
                    </div>
                    <div className="flex gap-2">
                        <InformationCard></InformationCard>
                        <Satisfaction></Satisfaction>
                        <ReferralCard></ReferralCard>
                    </div>
                    <div className="flex gap-2">
                        <SalesOverview></SalesOverview>
                        <ActiveUsers></ActiveUsers>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Dashboard