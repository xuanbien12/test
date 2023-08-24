import React from "react";
import { Link } from "react-router-dom";
export type PropsLayout = {
    children: React.ReactNode;
};
const LayoutPage = ({ children }: any) => {
    return (
        <div>
            <header className="bg-black p-6 text-[#fff]  flex gap-5">
                <Link className="p-5 bg-[#ccc]" to='/'>home</Link>
                <Link className="p-5 bg-[#ccc] " to='/profile'>profile</Link>
                <Link className="p-5 bg-[#ccc] " to='/login'>login</Link>
                <Link className="p-5 bg-[#ccc] " to='/register'>register</Link>
                <Link className="p-5 bg-[#ccc] " to='/searchResults'>kêt quả tìm kiếm</Link>
            </header>
            <div>{children}</div>
        </div>
    )
}
export default LayoutPage