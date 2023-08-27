import React from "react";
import {BsThreeDots} from "react-icons/bs"
import {MdZoomOutMap} from 'react-icons/md'
import {FiEdit} from 'react-icons/fi'
import {BsSearchHeartFill} from 'react-icons/bs'
import Input from "../../../Input/Input";
import Button from "../../../Button/Button";

const Messenger = () => {
    return(
        <section className="absolute w-[360px] max-h-[632px] border-solid bg-cyan-400 top-[48px] right-[-99px] rounded-[15px]">
            <header className="flex justify-around items-center mb-[10px]">
                <div className="ml-[-55px]">
                    {/* <h1>Chat</h1> */}
                    <p>
                        <b className="text-[27px]">Chat</b>
                    </p>
                </div>
                <div className="flex w-[120px] justify-between mr-[-55px]">
                    <div>
                        <BsThreeDots className="text-[20px]"/>
                    </div>
                    <div>
                        <MdZoomOutMap className="text-[20px]"/>
                    </div>
                    <div>
                        <FiEdit className="text-[20px]"/>
                    </div>
                </div>
            </header>
            <div className="flex w-[92%] h-[36px] m-auto mb-[15px] items-center relative">
                <span className="absolute left-[10px]">
                    <BsSearchHeartFill className="text-[16px]"/>
                </span>
                <input className="w-[100%] rounded-[20px] h-[36px] pl-[35px] bg-[#f0f2f5]"
                    type="text" 
                    placeholder="Tìm kiếm trên messenger" 
                />
            </div>
            <div className="flex ml-[15px]">
                <button  className="border-2 border-solid rounded-[10px] w-[65px] mr-[12px]">Hộp thư</button>
                <button className="border-2 border-solid rounded-[10px] w-[80px]">Cộng đồng</button>
            </div>
            <div className="flex items-center ml-[7px] mx-[8px] my-[12px]">
                <div className="w-[56px] m-[10px]">
                    <img alt="Xôi Xéo🩴" className="x1lliihq x193iq5w x1us19tq xl1xv1r rounded-[50%]" src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/368472185_1513747129363944_3603525927141935454_n.jpg?stp=dst-jpg_p100x100&amp;_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_ohc=kuK8Dhm9UwEAX-HNbKW&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_ht=scontent.fhan2-3.fna&amp;oh=00_AfDE5Xs7l9aSWyYkzHbE92ottONhTN-m8IsFPISA7Mumcg&amp;oe=64EFC2FF"></img>
                </div>
                <div>
                    <p className="font-bold text-[16px] flex items-center">
                        Xôi Xéo
                        <span className="ml-[5px]">
                            <img height="16" width="16" alt="🩴" src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6f/1.5/16/1fa74.png"></img>
                        </span>
                    </p>
                    <span>
                        Bạn: Hihihi
                    </span>
                    <span>...</span>
                    <span>30 phút</span>
                </div>
            </div>
            <div className="py-[10px] border-solid border-gray-200">
                <p className="w-fit m-auto">
                    Xem tất cả trong Messenger
                </p>
            </div>
        </section>
    )
}

export default Messenger