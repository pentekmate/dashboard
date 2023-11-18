import { Link } from "react-router-dom"
import paper from '../imgs/paper.svg'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
function Sidebar_comp(){
    return (
        <div className="bg-gradient-to-b items-center flex w-1/6 my-2 rounded-md flex-col  from-sidebar-black from-10% to-sidebar-blue h-screen">
            <div className="divide-y-2  divide-slate-50">
                <p className="text-slate-50 mt-6 font-signin-p text-center  tracking-widest font-semibold">VISION UI FREE</p>  
            </div>
            <div className="mt-10">
            <Sidebar backgroundColor="transparent"  className="text-slate-50">
                <Menu 
                menuItemStyles={{
                    button: {
                        border:"none",
                        borderRadius:"15px",
                      [`:hover`]:{
                        background:"rgba(26, 31, 55, 1)"
                      },
                      [`&.active`]: {
                        backgroundColor: '#rgba(26, 31, 55, 1)',
                      },
                    },
                  }}>
                    <MenuItem component={<Link to="/app"></Link>}>
                      <div className="bg-red-700 flex">
                      <span><img src={paper}></img>a</span>
                      </div>
                      </MenuItem>
                    <MenuItem component={<Link to="/tables"></Link>}> Tables </MenuItem>
                    <MenuItem component={<Link to="/billing"></Link>}> Billing </MenuItem>
                    <MenuItem component={<Link to="/app"></Link>}> RTL </MenuItem>
                </Menu>
                </Sidebar>
                <p className="uppercase font-signin-p text-slate-50 text-center my-10 font-bold">Account pages</p>
                <Sidebar backgroundColor="transparent"  className="text-slate-50">
                <Menu 
                menuItemStyles={{
                    button: {
                        border:"none",
                        borderRadius:"15px",
                      [`:hover`]:{
                        background:"rgba(26, 31, 55, 1)"
                      },
                      [`&.active`]: {
                        backgroundColor: '#rgba(26, 31, 55, 1)',
                      },
                    },
                  }}>
                    <MenuItem component={<Link to="/profile"></Link>}> Profile </MenuItem>
                    <MenuItem component={<Link to="/signin"></Link>}> Sign in </MenuItem>
                    <MenuItem component={<Link to="/signup"></Link>}> Sign up </MenuItem>
                </Menu>
                </Sidebar>
            </div>
        </div>
    )
}
export default Sidebar_comp