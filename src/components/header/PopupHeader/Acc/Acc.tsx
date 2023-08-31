import React from "react";
import ModeAcc from "./components/ModeAcc/ModeAcc"
import RulesHome from "../../../organisms/home/components/RulesHome/RulesHome";
import { dataRulesHome } from "../../../organisms/home/dataHome";
import { Link } from "react-router-dom";

const Acc = () => {
    return(
        <section className="absolute bg-[#ffffff] w-[360px] max-h-[632px] top-[-4px] right-[-4px] rounded-[15px]  shadow-2xl ">
            <div className="bg-[#ffffff] w-[93%] m-auto mt-[12px] mb-[16px] rounded-[10px] shadow-xl">
                <div className="flex w-[95%] m-auto h-[60px] items-center hover:bg-[#f2f2f2]">
                    <Link to="/profile" className="flex w-[100%]">
                        <div>
                            <img className="w-[40px] rounded-[50%]"
                                src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/351469982_1435353713673053_2527717267963048920_n.jpg?stp=c0.0.60.60a_cp0_dst-jpg_p60x60&amp;_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_ohc=kWp4CsLK2EAAX8hcZ50&amp;_nc_ht=scontent.fhan2-5.fna&amp;oh=00_AfAK-DuhyQ-V_3VH_NZsrD7LsIgGWbvy0zj93aHBq-x2hg&amp;oe=64F059EF"
                                alt="" />
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="text-[18px] font-black px-[10px]">Nguyễn Đức Trọng</span>
                        </div>
                    </Link>
                </div>
                <hr className="mx-[16px] text-[#ced0d4] border-[1px]"/>
                <div className="w-[95%] m-auto py-[8px] hover:bg-[#f2f2f2]">
                    <p className="p-[4px] text-[16px] font-bold text-[#227cf3]">Xem tất cả trang cá nhân</p>
                </div>
            </div>
            <div>
                <ModeAcc/>
            </div>
            <div className="w-[90%] m-auto mb-[10px]">
                <ul className='flex flex-wrap  '>
                    {
                    dataRulesHome.map((item) => (
                    <RulesHome key={item.id} item={item} />
                    ))
                    }
                </ul>
                <span>Meta © 2023</span>
            </div>
        </section>
    )
}

export default Acc