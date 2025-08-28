
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
export default function PrivateRouter({children}){
const {auth}=useContext(AuthContext);
if(!auth){
    return <Navigate to ={"/login"}/>
}
return children;
}