import { useContext,createContext,useEffect,useState } from "react";
import {auth,db} from '../firebase'
import {createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
   

} from 'firebase/auth'
import { setDoc,doc } from "firebase/firestore";
const AuthContext=createContext();
export  function AuthContextProvider({children}){
    const[user,setUser]=useState({})
    async function signUp(email,password){
        try{
       await createUserWithEmailAndPassword(auth,email,password)
      await  setDoc(doc(db,'user',email),{
     savedShows:[]
 })

        }catch(error){
            console.log(error)
        }
    }function logOut(){
    return signOut(auth)
}
function logIn(email,password){
  return signInWithEmailAndPassword(auth,email,password)
 
    
}useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
        setUser(currentuser)
    });
    return ()=>{
        unsubscribe();
    }
},[])

    return(
        <AuthContext.Provider value={{signUp,user,logIn,logOut}}>
            {children}
        </AuthContext.Provider>
    )
}


export function UserAuth(){
    return useContext(AuthContext)
}