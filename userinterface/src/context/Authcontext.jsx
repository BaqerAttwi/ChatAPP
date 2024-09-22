import { createContext , useCallback, useState} from "react";
import { baseurl, postrequest } from "../utils/services";
export const AuthContext= createContext();
export const AuthContextProvider = ({children})=>{
   const [user,setuser]= useState(null);
   const [registererror, setregistererror]=useState(null);
   const [isregisterloading,setisregisterloading]=useState(null);
   const [registerinfo,setregisterinfo]= useState({
    name: "",
    email: "",
    password: ""
   });
   console.log("registerinfo", registerinfo);
   const updateregisterinfo = useCallback((info)=>{
setregisterinfo(info);
   },[]);
   const registeruser=useCallback(async (e) => {
      e.preventDefault();
      setisregisterloading(true)
      setregistererror(null);
      const response = await postrequest(`${baseurl}/users/register`,JSON.stringify(registerinfo))
      setisregisterloading(false)
      if(response.error)  {
     return  setregistererror(response);
   } 
   localStorage.setItem("User",JSON.stringify(response))
   setuser(response)

   },[registerinfo]);
   
   return ( <AuthContext.Provider value={{user, registerinfo , updateregisterinfo,registeruser,registererror,isregisterloading}}>
{children}
    </AuthContext.Provider>);
};