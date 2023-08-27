import React from 'react'

const BirthdayFriend = () => {
    return (
        <div className='border-t border-b border-[#ccc]  '>
            <h4 className='text-[#65676B] pt-4 font-[semibold] text-[17px] '>Sinh nhật</h4>
            <div className='pt-3 pb-5 hover:bg-[#e4e6e8] rounded-[10px] flex items-center '>
                <i className='inline-block bg-auto bg-no-repeat  mr-3 w-9 h-9 bg-[url("https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/Vc9-z5ej3Xp.png")] '></i>
                <span>Hôm nay là sinh nhật của <b>Nguyễn Xuân Biên</b></span>
            </div>

        </div>
    )
}
export default BirthdayFriend