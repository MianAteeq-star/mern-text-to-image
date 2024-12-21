import React, { useContext, useEffect, useState } from "react";
import UserIcon from "../assets/User_02.svg";
import EmailIcon from "../assets/email_icon.svg";
import LockIcon from "../assets/lock_icon.svg";
import { Link } from "react-router-dom";
import crossIcon from "../assets/cross_icon.png";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("login");
  const { setShowLogin, setToken, setUser , setCredits} = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (state === "login") {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}api/v1/user/login`,
          { email, password },
          { withCredentials: true }
        );
        if (response.data) {
          setLoading(true)
          setToken(response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("token", response.data.token);
          setUser(response.data.user);
          setCredits(response.data.user.buyCredits);
          setShowLogin(false);
          toast.success(response.data.message);
          setLoading(false)
        } else {
          console.log(response.data.message);
          toast.error(response.data.message);
        }

        console.log(response.data);
      } else {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}api/v1/user/register`,
          { username, email, password },
          { withCredentials: true }
        );

        if (response.data) {
          setLoading(true)
          setUser(response.data.user);
          setState("login");
          toast.success(response.data.message);
          setEmail("");
          setPassword("");
          setUsername("");
          setLoading(false)
        } else {
          setLoading(false)
          console.log(response.data.message);
          toast.error(response.data.message);
        }
        console.log(response.data);
      }
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="m-2 ">
      <div className="flex justify-center items-center h-screen backdrop-blur-sm bg-black/30 absolute top-0 right-0 left-0 bottom-0 z-40 ">
        <form
          className="relative bg-white p-10 rounded-xl"
          onSubmit={handleSubmit}
        >
          <img
            src={crossIcon}
            alt="cross icon"
            className="absolute top-5 right-5 w-4 cursor-pointer"
            onClick={() => setShowLogin(false)}
          />
          <h1 className="text-center text-2xl font-medium capitalize">
            {state}
          </h1>
          <p className="text-sm mt-4 text-center">
            Welcome back! please {state} to continue.
          </p>

          {state !== "login" && (
            <div className="flex items-center gap-2 border  px-6 py-2 rounded-full mt-6">
              <img
                src={UserIcon}
                alt="user image"
                className=" text-neutral-500"
              />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Full Name"
                className=" outline-none "
                required
              />
            </div>
          )}
          <div className="flex items-center gap-2 border  px-6 py-2 rounded-full mt-6">
            <img src={EmailIcon} alt="" />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email id"
              className=" outline-none "
              required
            />
          </div>
          <div className="flex items-center gap-2 border  px-6 py-2 rounded-full mt-6">
            <img src={LockIcon} alt="" />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="outline-none "
              required
            />
          </div>
          <p className="text-blue-600 mt-4 mb-2">Forgot Password?</p>
          <button className="bg-blue-500 text-white p-2 w-full rounded-full ">
            {}
            { loading?  "Loading..." : state === "login" ? "Login" : "Create Account"}
          </button>

          {state === "login" ? (
            <p className="text-center text-sm mt-2 text-neutral-500">
              Don't have an account?{" "}
              <Link
                className="text-blue-500 underline"
                onClick={() => setState("signup")}
              >
                Sign Up
              </Link>
            </p>
          ) : (
            <p className="text-center text-sm mt-2 text-neutral-500">
              Already have an account?{" "}
              <Link
                className="text-blue-500 underline "
                onClick={() => setState("login")}
              >
                Login
              </Link>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
