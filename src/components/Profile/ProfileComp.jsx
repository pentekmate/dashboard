import AppNav from "../../ui/AppNav"
import Sidebar_comp from "../../ui/Sidebar"
import ProfileHeader from "./ProfileHeader"

function ProfileComp(){
    return(
        <div className="bg-appbg h-screen relative bg-cover bg-center">
        <div className="flex gap-5 h-screen flex-row appcontainer ">
            <div className="w-[264px]">
                <Sidebar_comp></Sidebar_comp>
            </div>
            <div className="flex-1 flex gap-5 flex-col w-full">
                    <AppNav></AppNav>
            <div className="flex">
                <ProfileHeader></ProfileHeader>
            </div>
            </div>
        </div>
        </div>
    )
}

export default ProfileComp