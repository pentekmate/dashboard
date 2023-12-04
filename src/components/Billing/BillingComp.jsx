import AppNav from "../../ui/AppNav";
import Sidebar_comp from "../../ui/Sidebar";
import BalanceCard from "./BalanceCard";
import BillingInfo from "./BillingInfo";
import Card from "./Card";
import Invoices from "./Invoices";
import Payment from "./Payment";
import Transactions from "./Transactions";
import Footer from '../../ui/Footer'
function BillingComp(){
    return(
        <div className="bg-appbg h-fit relative bg-cover bg-center">
        <div className="flex gap-5 h-fit flex-row appcontainer ">
            <div className="w-[264px]">
                <Sidebar_comp></Sidebar_comp>
            </div>
            <div className="flex-1  flex gap-5 flex-col w-full">
                    <AppNav></AppNav>
                <div className="flex gap-6 flex-row">
                    <div className="w-[900px] flex-col gap-6 flex">
                        <div className="flex gap-4">
                        <Card></Card>
                        <BalanceCard></BalanceCard>
                        </div>
                    <Payment></Payment>
                    <BillingInfo></BillingInfo>
                    </div>
                    <div className="flex gap-6 flex-col w-[650px]">
                        <Invoices></Invoices>
                        <Transactions></Transactions>
                    </div>
                </div>
               
            <Footer></Footer>
            </div>
        </div>
        </div>
    )
}
export default BillingComp