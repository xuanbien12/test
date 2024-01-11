import React from "react";

const Button = ({ width, onClick, children, className }: any) => {
    return (
        <button style={{
            width: `${width ? width : "100px"}`
        }} className={`bg-[#0D72BB] ${className} flex gap-1 hover:text-[#72BB0D] shadow-[3px_4px_4px_0px_rgba(0,0,0,0.25)] h-[35px] rounded-[5px] text-[#fff]    items-center justify-center`} onClick={onClick}>
            {children}
        </button>
    )
}
export default Button