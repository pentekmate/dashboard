import BillingInfoCard from "./BillingInfoCard"

function BillingInfo(){
    return(
        <div className="bg-gradient-to-br  text-slate-50  to-20% from-balance-black to-balance-blue font-signin-p gap-5 flex-col bg-center flex w-[900px] h-[538px] rounded-2xl py-7 px-6">
            <p className="text-xl font-bold">Billing Information</p>
            <BillingInfoCard name={"Oliver Liam"} vat={"FRB1235476"} email={"oliver@burrito.com"} companyName={"Viking Burrito"}></BillingInfoCard>
            <BillingInfoCard name={"Oliver Liam"} vat={"FRB1235476"} email={"oliver@burrito.com"} companyName={"Viking Burrito"}></BillingInfoCard>
            <BillingInfoCard name={"Oliver Liam"} vat={"FRB1235476"} email={"oliver@burrito.com"} companyName={"Viking Burrito"}></BillingInfoCard>
        </div>
    )
}
export default BillingInfo