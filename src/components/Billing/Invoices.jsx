import InvoicesCard from "./InvoicesCard"

function Invoices(){
    return (
        <div className="bg-gradient-to-b text-slate-50 from-40% from-balance-black to-balance-blue font-signin-p gap-5 flex-col bg-center flex w-[650px] h-[436px] rounded-2xl py-7 px-6">
            <div className="flex w-full justify-between">
            <p>Invoices</p>
            <p className="bg-singin-button px-5 uppercase py-2 rounded-xl text-[10px]">View All</p>
            </div>
            <div className="mt-4 flex flex-col gap-8">
            <InvoicesCard date={"March, 01, 2020"} code={"#MS-415646"} amount={"$180"}></InvoicesCard>
            <InvoicesCard date={"February, 10, 2021"} code={"#RV-415646"} amount={"$250"}></InvoicesCard>
            <InvoicesCard date={"April, 05, 2020"} code={"#FB-415646"} amount={"$560"}></InvoicesCard>
            <InvoicesCard date={"June, 25, 2019"} code={"#QW-415646"} amount={"$120"}></InvoicesCard>
            <InvoicesCard date={"March, 01, 2019"} code={"#AR-415646"} amount={"$300"}></InvoicesCard>
            </div>
        </div>
    )
}

export default Invoices