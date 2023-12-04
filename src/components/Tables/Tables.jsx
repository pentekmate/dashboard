import AppNav from "../../ui/AppNav"
import Footer from "../../ui/Footer"
import Sidebar_comp from "../../ui/Sidebar"
import AuthorsTable from "./AuthorsTable"
import ProjectsTable from "./ProjectsTable"

function TablesContainer() {
    return (
        <div className="bg-appbg h-fit relative bg-cover bg-center">
            <div className="flex h-fit gap-5 flex-row appcontainer ">
                <div className="w-[264px]">
                    <Sidebar_comp></Sidebar_comp>
                </div>
                <div className="flex-1 flex gap-5 flex-col w-full mb-24">
                    <AppNav></AppNav>
             
                <AuthorsTable></AuthorsTable>
                <ProjectsTable></ProjectsTable>
                <Footer></Footer>
                </div>
                
            </div>
        </div>
    )
}
export default TablesContainer
