import React, { Suspense, useState } from 'react';
import { Link } from "react-router-dom";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Header from '../header/Header';

import Input from '../Input/Input';
export type PropsLayout = {
children: React.ReactNode;
};
const LayoutPage = ({ children }: any) => {
const antIcon =
<LoadingOutlined style={{ fontSize: 100 }} spin />;

return (
<div>
    <Header/>
    <div>
        <Suspense fallback={<Spin size="large" className='w-full h-[80vh] flex items-center justify-center  ' />} >
        {children}
        </Suspense>
    </div>
</div>
)
}
export default LayoutPage