
import { UserAuth } from '../../Context/AuthContext'
import { Navigate } from 'react-router-dom'
const ProtectedRouter = ({children}) => {
    const {user}=UserAuth()
    if(!user){
        return  <Navigate to="/"/>
    }else{
        return children;
    }
 
}

export default ProtectedRouter
