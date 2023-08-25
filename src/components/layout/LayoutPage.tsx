import React, { Suspense } from 'react';
import { Link } from "react-router-dom";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
export type PropsLayout = {
    children: React.ReactNode;
};
const LayoutPage = ({ children }: any) => {
    const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;
    return (
        <div>
            <header className="bg-black p-6 text-[#fff]  flex gap-5">
                <Link className="p-5 bg-[#ccc]" to='/'>home</Link>
                <Link className="p-5 bg-[#ccc] " to='/profile'>profile</Link>
                <Link className="p-5 bg-[#ccc] " to='/login'>login</Link>
                <Link className="p-5 bg-[#ccc] " to='/register'>register</Link>
                <Link className="p-5 bg-[#ccc] " to='/searchResults'>kêt quả tìm kiếm</Link>
            </header>
            <div>
                <Suspense fallback={<Spin className='w-full h-[80vh] flex items-center justify-center ' indicator={antIcon} />} >
                    {children}
                </Suspense>
            </div>
        </div>
    )
}
export default LayoutPage
