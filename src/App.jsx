
import { Route,RouterProvider,Routes, createBrowserRouter } from 'react-router-dom'
import Signin from './pages/Signin'
import Billing from './pages/Billing'
import Profile from './pages/Profile'
import Applayout from './pages/AppLayout'
import Tables from './pages/Tables'
import Signup from './pages/Signup'
import { AppProvider } from './contexts/AppContext'
import NotFound from './pages/NotFound'



function App() {
  const router = createBrowserRouter([
    {
    errorElement:<NotFound/>,
    children:[
      { path:'/',
      element:<Signin/>,
      },
      {
        path:'/billing',
        element:<Billing/>,
        errorElement:<NotFound/>,
      },
      {
        path:'/profile',
        element:<Profile/>
      },
      {
        path:'/signup', 
        element:<Signup/>,
      },
      {
        path:'/tables',
        element:<Tables/>,
      
      },
      {
        path:'/Dashboard',
        element:<Applayout/>,
      
      },
    ]}

  ])

  return (
    <AppProvider>
      <RouterProvider router={router}>

      </RouterProvider>
    </AppProvider>
  )
}

export default App
