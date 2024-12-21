import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [showLogin, setShowLogin] = useState(false);
  const [credits, setCredits] = useState(0);
  const [token, setToken] = useState(localStorage.getItem("token"));
  console.log(token)
  
  
  const navigate = useNavigate()




  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    localStorage.removeItem("user");
    setCredits(0);
    toast.success("Logged out successfully");
  };

  const getCredits = async () => {
    try {
      const {data} = await axios.get(
       `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/credits`, {headers : {token}});

        setCredits(data.userCredits);
    
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

    console.log(credits)
  const generateImage = async (prompt)=>{
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/v1/image/generate-image`,
            { prompt },
            { headers: { token } },
            { withCredentials: true }
        );
    
        console.log(response)
        if (response.data) {
           setCredits(response?.data?.buyCredits);
           toast.success(response?.data?.message);
           return response?.data?.imageSrc
        } else {
            console.log(response?.data?.message);
            toast.error(response?.data?.message);
            if(response?.data?.buyCredits === 0){
navigate("/buy")
            }
        }
        
    } catch (error) {
      console.log(error);
      if(error.response?.data?.buyCredits === 0){
        navigate("/buy")
      }
      toast.error(error?.response?.data?.message)
        
    }
  }




  useEffect(() => {
   
      getCredits();
    
  }, []);



  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    token,
    setToken,
    credits,
    setCredits,
    logout,
    getCredits,
    generateImage
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
