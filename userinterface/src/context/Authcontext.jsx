import { createContext , useCallback, useState} from "react";
export const AuthContext= createContext();
export const AuthContextProvider = ({children})=>{
   const [user,setuser]= useState(null);
   const [registerinfo,setregisterinfo]= useState({
    name: "",
    email: "",
    password: ""
   });
   console.log("registerinfo", registerinfo);
   const updateregisterinfo = useCallback((info)=>{
setregisterinfo(info);
   },[]) 
   return ( <AuthContext.Provider value={{user, registerinfo , updateregisterinfo}}>
{children}
    </AuthContext.Provider>);
};