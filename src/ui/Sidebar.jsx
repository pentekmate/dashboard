import { Link, useLocation } from "react-router-dom"
import paper from '../imgs/paper.svg'
import '../index.css'
import { FaWrench } from "react-icons/fa6";
import { BsFillHouseFill,BsFillBarChartFill,BsCreditCardFill,BsPersonFill,BsFillSignIntersectionFill,BsRocketTakeoffFill,BsFillQuestionCircleFill     } from "react-icons/bs";
import { Sidebar, Menu, MenuItem, } from 'react-pro-sidebar';
function Sidebar_comp(){
  const location = useLocation()

    return (
   <div className="text-slate-50 flex flex-col items-center bg-gradient-to-l  w-[264px] my-2 rounded-md  from-sidebar-black from-10% to-sidebar-blue">            
   <Sidebar  style={{border:"none"}}  breakPoint="md" backgroundColor="transparent"  >
                <Menu 
                menuItemStyles={{
                    button: {
                        fontFamily:'Plus Jakarta Sans , sans-serif',
                        fontWeight:"450",
                        border:"none",
                        borderRadius:"15px",
                        width:"219px",
                      [`:hover`]:{
                        background:"#1A1F37",
                        width:"219px",
                      }
                    },
                  }}>
                    <h3 className="text-center my-4 text-md font-signin-p uppercase tracking-widest font-medium">Visin ui Free</h3>
                    <MenuItem component={<Link to="/Dashboard"></Link>} className={`py-1 ${location.pathname==='/Dashboard'?"active":""}`} icon={location.pathname==='/Dashboard'?<div className="img-active flex items-center justify-center"><BsFillHouseFill fill="#ffffff"  color="#ffffff" /></div>:<BsFillHouseFill fill="#0075FF" />} >
                      <span>Dashboard</span>
                      </MenuItem>
                      <MenuItem component={<Link to="/tables"></Link>} className={`${location.pathname==='/tables'?"active":""}`} icon={location.pathname==='/tables'?<div className="img-active flex items-center justify-center"><BsFillBarChartFill  fill="#ffffff" /></div>:<BsFillBarChartFill  fill="#0075FF" />} >
                      <span>Tables</span>
                      </MenuItem>
                      <MenuItem component={<Link to="/billing"></Link>} className={`${location.pathname==='/billing'?"active":""}`} icon={location.pathname==='/billing'?<div className="img-active flex items-center justify-center"> <BsCreditCardFill   fill="#ffffff" /></div>:<BsCreditCardFill   fill="#0075FF" />} >
                      <span>Billing</span>
                      </MenuItem>
                    <MenuItem component={<Link to="/app"></Link> } className={`${location.pathname==='/rtl'?"active":""}`} icon={location.pathname==='/rtl'?<div className="img-active flex items-center justify-center"> <FaWrench   fill="#ffffff" /></div>:<FaWrench   fill="#0075FF" />} > <span>RTL</span></MenuItem>
                    <p className="text-start px-7 text-base my-3 font-semibold font-signin-p" >Account pages</p>
                    <MenuItem component={<Link to="/profile"></Link>} className={`${location.pathname==='/profile'?"active":""}`} icon={location.pathname==='/profile'?<div className="img-active flex items-center justify-center"> <BsPersonFill    fill="#ffffff" /> </div>:<BsPersonFill fill="#0075FF" />} > <span>Profile</span> </MenuItem>
                    <MenuItem component={<Link to="/"></Link>}  icon={<div className="flex items-center justify-center"> <BsFillSignIntersectionFill fill="#0075FF" /></div>}>Sign in </MenuItem>
                    <MenuItem component={<Link to="/signup"></Link>}  icon={<div className="flex items-center justify-center"> <BsRocketTakeoffFill fill="#0075FF" /> </div>}> Sign up </MenuItem>
                  </Menu>
                </Sidebar>
         <div className="bg-needhelp flex-col py-4 px-4 flex rounded-2xl my-20 w-[218px] h-[169px]">
          <div className="h-9 w-9 rounded-xl bg-slate-50 flex items-center justify-center">
            <BsFillQuestionCircleFill size={20}  fill={"#0075FF"}/>
          </div>
          <div className="mt-5 font-signin-p ">
            <p className="font-semibold text-sm">Need help?</p>
            <p className="text-xs mt-1 ">Please check out our docs</p>
          </div>
          <div className="bg-gradient-to-t from-doc-bg-blue to-doc-bg-black rounded-xl flex justify-center mt-3">
            <button className="uppercase text-[10px] tracking-tighter font-bold py-2">documentation</button>
          </div>
         </div>
    </div>

    )
}
export default Sidebar_comp