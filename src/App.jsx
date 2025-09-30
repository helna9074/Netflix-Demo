
import './App.css'


import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';

import '../src/index.css'
import Join from './Pages/Join.jsx'

import Home from './Pages/Home.jsx'
import { AuthContextProvider } from './Context/AuthContext.jsx'
import SignIn from './Pages/Signin.jsx'
import Signup from './Pages/Signup.jsx'
import ProtectedRouter from './Componets/Navbar/ProtectedRouter.jsx'
import Account from './Pages/Account.jsx'
const router=createBrowserRouter([{

  path:"/",
  element:<Home/>,



},
 { path:"/Join-now",
  element:<Join/>,
 },
 {path:"/SignIn",
 element:<SignIn/>,
 },
 {path:"/Signup",
  element:<Signup/>
 },{
  path:"/Account",
  element:
    
  <ProtectedRouter>
     <Account/>
  </ProtectedRouter>
  
 }
])

function App() {


  return (
    <AuthContextProvider>
         <RouterProvider router={router}/>
    </AuthContextProvider>
   
   
  )
}

export default App
