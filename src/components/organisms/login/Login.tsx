import React from 'react'
import LoginForm from '../components/Form/LoginForm'
import background from "./../../../assets/img/bg.png"
import logo from "../../../assets/img/logo.png"
import Logo from '../components/logo'
import { useLocation } from 'react-router-dom'
import ForgotPassword from '../ForgotPassword/ForgotPassword'
const Login = () => {
    const location = useLocation()

    return (
        <div className={`flex min-h-screen bg-[#E2EDE4] items-center w-full  bg-cover	`}>
            <div className="absolute top-0	left-0	m-5">
                <Logo />
            </div>
            <div className="w-full ">
                <div className="relative flex items-center justify-center h-full">

                    <section className="w-full px-5 py-11 text-gray-800 sm:w-4/6 md:w-3/6 lg:w-2/6 xl:w-[467px] sm:px-0 bg-white rounded-3xl	">
                        <div className="w-full px-2 sm:px-6">
                            {
                                location.pathname === "/login"
                                &&
                                <p className="mb-3 text-black text-xl font-normal font-sans">
                                    Welcome to <a className="text-[#349E49]">SBMS</a>
                                </p>
                            }
                            <h3 className={` ${location.pathname === "/login" ? "text-5xl" : "text-[21px] text-center"} mb-7 	text-black font-medium	font-sans`}>
                                {location.pathname === "/login" && "Sign in"}
                                {location.pathname === "/forgot-password" && "Forgot Password"}
                            </h3>
                            {
                                location.pathname === "/login"
                                &&
                                <LoginForm />
                            }
                            {
                                location.pathname === "/forgot-password"
                                &&
                                <ForgotPassword />
                            }
                        </div>
                    </section>




                </div>
            </div>
        </div>
    )
}
export default Login