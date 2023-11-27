import React, { Suspense, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Spin } from 'antd';

import Header from '../organisms/components/Header';
import Navbar from '../organisms/components/Navbar';


export type PropsLayout = {
    children: React.ReactNode;
};
const LayoutPage = ({ children }: any) => {
    const Navigate = useNavigate()
    useEffect(() => {
        const tokenString = localStorage.getItem("token");
        if (tokenString == "" || tokenString == null) {
            Navigate("/login");
        }

    }, [])

    return (
        <div>
            <Header />
            <div className='flex  mt-10 '>
                <div className=' p-[16px]  '>
                    <Navbar />
                </div>
                <div className='px-[70px]  w-full'>
                    <Suspense fallback={<Spin size="large" className='w-full h-[80vh] flex items-center justify-center  ' />} >
                        {children}
                    </Suspense>
                </div>
            </div>
        </div>
    )
}
export default LayoutPage