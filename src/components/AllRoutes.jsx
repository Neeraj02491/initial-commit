import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import User from "../Pages/User";
import SingleUser from "../Pages/SingleUser";
import NotFound from "../Pages/NotFound";
import PrivateRouter from "../Pages/PrivateRoute";

export default function AllRoutes() {
    return (
        <div style={{ textAlign: "center" }}>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route 
            path="/user"
            element = {
               < PrivateRouter>
                <User/>
               </PrivateRouter>
            } 
            />
            <Route path="/user" element={<User />} />
            <Route path="/user/:user_id" element ={<SingleUser/>}/> 
            <Route path="*" element ={<NotFound/>}/> 
        </Routes>
        </div >
    )
}