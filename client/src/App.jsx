import { Route, Routes } from "react-router-dom";
import BuyCredit from "./pages/BuyCredit";
import Result from "./pages/Result";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Login from "./components/Login"
import { AuthContext } from "./context/authContext";
import { useContext } from "react";
import ProtectedRoutes from "./components/ProtectedRoutes";

export default function App() {
  const {showLogin} = useContext(AuthContext)
  return (

    
    <div className="min-h-screen bg-gradient-to-b from-teal-100 to-orange-50">
      <Navbar/>
      {showLogin &&  <Login/>}
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes/>}>
        <Route path="/result" element={<Result/>} />
        <Route path="/buy" element={<BuyCredit/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}