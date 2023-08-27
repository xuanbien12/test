import React, { useState, useEffect } from 'react'
import NavbarHome from './components/navbarHome/NavbarHome'
import { Link } from 'react-router-dom'
import { dataNavbarHome, dataRulesHome, dataShortcutGroup } from './dataHome'
import _slice from 'lodash/slice'
import ShortcutGroup from './components/shortcutGroup/ShortcutGroup'
import RulesHome from './components/RulesHome/RulesHome'
import AddFriendHome from './components/AddFriendHome/AddFriendHome'
import BirthdayFriend from './components/BirthdayFriend/BirthdayFriend'

const Home = () => {
    const [isSeeMore, setIsSeeMore] = useState<Boolean>(true)
    const [avbarHome, setNavBarHome] = useState(_slice(dataNavbarHome, 0, 5))

    useEffect(() => {
        if (isSeeMore === true) {
            setNavBarHome(_slice(dataNavbarHome, 0, 5))
        } else {
            setNavBarHome(_slice(dataNavbarHome, 0, dataNavbarHome.length))
        }
    }, [isSeeMore])
    return (
        <div>
            <div className='flex'>

                <div className='max-w-[360px] max-h-[88vh]  px-3  font-[Semibold] nav-home overflow-y-auto '>
                    <div className='py-2  border-b border-[#ccc] '>
                        <Link to="/profile" className='flex items-center gap-[10px] hover:rounded-[10px] hover:bg-[#e4e6eb] '>

                            <img className='rounded-[50%] w-9 h-9 ' src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/332496247_460743432833628_735095277577115085_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=-E61uyGC6cUAX_Vr5v0&_nc_ht=scontent.fhan15-1.fna&oh=00_AfAYV434yb6anvYVhVzcUU4maI5epeOnyV2unyDCVLgZSg&oe=64ECB3BA" alt="" />
                            <span className='py-4 '>Nguyễn Xuân Biên</span>
                        </Link>
                        <ul>
                            {
                                avbarHome && avbarHome.map((item, index) => (
                                    <NavbarHome key={item.id} item={item} />
                                ))
                            }
                        </ul>
                        <div className='flex items-center cursor-pointer hover:rounded-[10px] hover:bg-[#e4e6eb] ' onClick={() => setIsSeeMore(!isSeeMore)} >
                            <div className=' bg-[#e4e6eb] w-9 h-9 rounded-[50%] flex items-center justify-center   '>
                                {
                                    isSeeMore
                                        ?
                                        <svg fill="currentColor" viewBox="0 0 16 16" width="20px" height="20px" className="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 x1qx5ct2 xw4jnvo"><g fillRule="evenodd" transform="translate(-448 -544)"><path fillRule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>
                                        :
                                        <svg fill="currentColor" viewBox="0 0 20 20" width="20px" height="20px" className="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 x1qx5ct2 xw4jnvo"><path d="M15.47 12.2 10 6.727 4.53 12.2a.75.75 0 0 1-1.06-1.061l6-6a.751.751 0 0 1 1.06 0l6 6a.75.75 0 0 1-1.06 1.061z"></path></svg>

                                }

                            </div>

                            <span className='p-4' > {isSeeMore ? "Xem Thêm" : "Thu Gọn"} </span>
                        </div>
                    </div>
                    <div className='pt-[20px] short-gr  '>
                        <h4 className="flex items-center justify-between  "><span className=' inline-block  py-[5px]  text-[#65676B] text-[17px] font-semibold '>Lối tắt của bạn </span><span className='text-[#216fdb] cursor-pointer hidden short-gr-show p-[5px] hover:bg-[#e4e6eb] '>Chỉnh sửa </span> </h4>
                        <div>
                            {dataShortcutGroup.map(item => (
                                <ShortcutGroup key={item.id} item={item} />
                            ))}
                        </div>
                        <div>
                            <ul className='flex flex-wrap  '>
                                {
                                    dataRulesHome.map((item) => (
                                        <RulesHome key={item.id} item={item} />
                                    ))
                                }
                            </ul>
                            <span>Meta © 2023</span>
                        </div>
                    </div>


                </div>
                <div className='flex-grow bg-white h-[80vh]'>
                    <h1 className='text-[20px]'>Nếu cuộc đời là những thước phim, tôi sẽ tua nhanh tới đoạn tôi giàu</h1>
                </div>
                <div className='max-w-[360x] min-w-[360px] max-h-[88vh]   info-friend-home overflow-y-auto  pr-[10px]  '>
                    <div className='mb-3'>
                        <h4 className="flex items-center justify-between  pt-[20px] pb-1 "><span className=' inline-block  text-[#65676B] text-[17px] font-[semibold] '>Lời mời  kết bạn</span><span className='text-[#216fdb] cursor-pointer inline-block  p-[5px] hover:bg-[#e4e6eb] '>Xem thêm</span> </h4>
                        <AddFriendHome />
                    </div>
                    <div>
                        <BirthdayFriend />
                    </div>
                    <div className='min-h-[80vh] '>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home