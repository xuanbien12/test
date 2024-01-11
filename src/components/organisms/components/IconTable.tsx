import { Button } from "antd";
import React from "react";
import edit from "./../../../assets/icon/edit.svg"
import deleteIcon from "./../../../assets/icon/delete.svg"
import reset from "./../../../assets/icon/reset.svg"
import update from "./../../../assets/icon/update.svg"
const IconTable = ({ onClick, type }: any) => {
    const render = (name: any) => {
        switch (name) {
            case "edit":
                return <Button onClick={onClick} className="w-[25px] h-[25px] rounded-[5px] flex justify-center items-center  bg-[#1B86CC] "><img src={edit} alt="" /></Button>
            case "delete":
                return <Button onClick={onClick} className="w-[25px] h-[25px] rounded-[5px] flex justify-center items-center  bg-[#B84545] "><img src={deleteIcon} alt="" /></Button>
            case "update":

                return <Button onClick={onClick} className="w-[25px] h-[25px] rounded-[5px] flex justify-center items-center  bg-[#2D9712] "><img src={update} alt="" /></Button>
            default:
                return <Button onClick={onClick} className=" "><img src={reset} alt="" /></Button>
        }
    }
    return (
        render(type)
    )
}
export default IconTable