import React, { Suspense, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Spin } from 'antd';

import Header from '../organisms/components/Header';


export type PropsLayout = {
    children: React.ReactNode;
};
const LayoutPage = ({ children }: any) => {
    const Navigate = useNavigate()
    // useEffect(() => {
    //     const tokenString = localStorage.getItem("token");
    //     if (tokenString == "" || tokenString == null) {
    //         Navigate("/login");
    //     }

    // }, [])

    return (
        <div className='min-h-[100vh]'>
            <Header />
            <div className=' min-h-[95.5vh] py-3 lg:py-6 bg-[#fff] lg:bg-[#F0F8FF] '>
                <Suspense fallback={<Spin size="large" className='w-full min-h-[80vh] flex items-center justify-center  ' />} >
                    {children}
                </Suspense>

            </div>
        </div>
    )
}
export default LayoutPage