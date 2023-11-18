import { createContext, useContext, useState } from "react";

const AppContext=createContext()

function AppProvider({children}){
    const [x,setX]=useState(null)
    return (
        <AppContext.Provider value={x}>
        {children}
       </AppContext.Provider>
    )   
}
function useAppProvider(){
    const context=useContext(AppContext)
    if(context===undefined) throw new Error ("Hiba tortent")
    return context
}

export {useAppProvider,AppProvider}