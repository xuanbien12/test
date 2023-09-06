import React from "react";
import MenuLeft from "./components/menuLeft/menuLeft";
import MenuRight from "./components/menuRight/nemuRight";
const Menu = () => {

    return(
        <section className=" absolute bg-[#f7f8fa] w-[608px] top-[-4px] right-[-155px] max-h-[100vh] 
         rounded-[10px] shadow-2xl">
            <header className="w-[95%] m-auto sticky py-[16px]">
                <span className="text-[25px] font-bold">Menu</span>
            </header>
            {/* <div className="flex px-[16px] pb-[16px]">
                <div className="bg-[#ffffff] w-[360px] py-[16px] rounded-[10px] mr-[16px] shadow-xl max-h-[75vh] overflow-y-auto md:">
                    <div className="relative w-[95%] m-auto flex justify-center items-center pb-[8px]">
                        <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em"
                        className="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xlup9mm x1kky2od absolute left-[12px] text-[16px]">
                        <g fill-rule="evenodd" transform="translate(-448 -544)">
                            <g fill-rule="nonzero">
                                <path
                                    d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
                                    transform="translate(448 544)"></path>
                                <path
                                    d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
                                    transform="translate(448 544)"></path>
                                <path
                                    d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
                                    transform="translate(448 544)"></path>
                                <path
                                    d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
                                    transform="translate(448 544)"></path>
                            </g>
                        </g>
                        </svg>
                        <input className="w-[100%] rounded-[20px] h-[40px] pl-[35px] bg-[#f0f2f5] focus:outline-none" type="text"
                        placeholder="Tìm kiếm trong Menu" />
                    </div>
                    <h2 className="w-[95%] text-[16px] font-bold m-auto pb-[8px]">Chuyên nghiệp</h2>
                    <MenuLeft/>
                </div>
                <div className="w-[200px] bg-[#ffffff] rounded-[10px] max-h-[546px] shadow-xl">
                    <h2 className="text-[20px] py-[16px] px-[12px] font-bold">Tạo</h2>
                    <MenuRight/>
                </div>
            </div> */}
            
            <div className="block px-[16px] relative">
                <div className="bg-[#ffffff] w-[100%] py-[16px] rounded-[10px] mr-[16px] shadow-xl max-h-[75vh] overflow-y-auto md:">
                    <div className="relative w-[340px] pr-[10px] ml-[15px] flex justify-center items-center pb-[8px]">
                        <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em"
                        className="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xlup9mm x1kky2od absolute left-[12px] text-[16px]">
                        <g fill-rule="evenodd" transform="translate(-448 -544)">
                            <g fill-rule="nonzero">
                                <path
                                    d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
                                    transform="translate(448 544)"></path>
                                <path
                                    d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
                                    transform="translate(448 544)"></path>
                                <path
                                    d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
                                    transform="translate(448 544)"></path>
                                <path
                                    d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
                                    transform="translate(448 544)"></path>
                            </g>
                        </g>
                        </svg>
                        <input className="w-[100%] rounded-[20px] h-[40px] pl-[35px] bg-[#f0f2f5] focus:outline-none" type="text"
                        placeholder="Tìm kiếm trong Menu" />
                    </div>
                    <h2 className="w-[95%] text-[16px] ml-[15px] font-bold pb-[8px]">Chuyên nghiệp</h2>
                    <MenuLeft/>
                </div>
                <div className="w-[210px] h-[75vh] bg-[#f7f8fa]  absolute top-0 right-[34px] z-[-10"></div>
                <div className="w-[200px] bg-[#ffffff] rounded-[10px] max-h-[546px] shadow-xl absolute top-0 right-[34px]">
                    <h2 className="text-[20px] py-[16px] px-[12px] font-bold">Tạo</h2>
                    <MenuRight/>
                </div>
            </div>
        </section>
    )
}

export default Menu