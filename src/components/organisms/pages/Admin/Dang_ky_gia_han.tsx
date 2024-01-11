import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { Input, Modal } from "antd";
import { ExclamationCircleFilled } from '@ant-design/icons';
import ModalExcel from "../../components/Modal/ModalExcel";
import ModalCreateCard from "../../components/Modal/ModalCard";
import ModalChangeStatusCard from "../../components/Modal/ModalChangeStatusCard";
import Dang_ky_ve_thang from "../../components/Dang_ky_ve_thang";
import Gia_han_ve_thang from "../../components/Gia_han_ve_thang";
import Gia_han_the_xe_thang from "../../components/Gia_han_ve_xe_thang";
const CardManagement = () => {
    const { confirm } = Modal;
    const [tab, setTab] = useState(1)



    const [openModalExcel, setOpenModalExcel] = useState<boolean>(false)
    const [openModalChangeStatusCard, setOpenModalChangeStatusCard] = useState(false)
    const [typeModalExcel, setTypeModalExcel] = useState<string>("")
    const [openModalCreateCard, setOpenModalCreateCard] = useState(false)

    const handleConfirmDelete = () => {

    }
    const showDeleteConfirm = () => {
        confirm({
            title: 'Bạn có chắc muốn xóa thẻ không ?',
            icon: <ExclamationCircleFilled />,
            content: 'Vui lòng xác nhận ',
            okText: <div className="bg-[#0D72BB] w-[80px] hover:text-[#72BB0D] shadow-[3px_4px_4px_0px_rgba(0,0,0,0.25)] h-[35px] rounded-[5px] text-[#fff]   flex items-center justify-center">Đồng ý</div>,
            okType: 'danger',
            cancelText: <div className="bg-[#0D72BB] w-[80px] hover:text-[#72BB0D] shadow-[3px_4px_4px_0px_rgba(0,0,0,0.25)] h-[35px] rounded-[5px] text-[#fff]   flex items-center justify-center">Hủy</div>,
            // centered: true,
            onOk() {
                handleConfirmDelete()
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };



    return (
        <div className="h-full">

            <div className="container h-full">
                <div className=" h-full">
                    <div className="pb-4 flex justify-between items-center border-b border-[#A3A3A3] ">
                        <div className="text-[32px]">
                            Đăng ký - Gia hạn vé tháng
                        </div>
                        <div className="flex  gap-4">
                            <Button onClick={() => {
                                setOpenModalExcel(true)
                                setTypeModalExcel("template")
                            }}>
                                Template
                            </Button>
                            <Button
                                onClick={() => {
                                    setOpenModalExcel(true)
                                    setTypeModalExcel("import")
                                }}
                            >
                                Import
                            </Button>
                            <Button
                                onClick={() => {
                                    setOpenModalExcel(true)
                                    setTypeModalExcel("export")
                                }}
                            >
                                Export
                            </Button>
                        </div>
                    </div>
                    <div className="">
                        <div className="py-1 border-b border-[#0D72BB] flex gap-2.5 ">
                            <div onClick={() => setTab(1)} className={` ${tab === 1 ? " border-t border-l border-r border-[#0D72BB] bg-[#F5FCFF]" : "bg-[#DFDFDF] "} p-4 w-[240px] text-center cursor-pointer `}>
                                Gia hạn
                            </div>
                            <div onClick={() => setTab(2)} className={` ${tab === 2 ? " border-t border-l border-r border-[#0D72BB] bg-[#F5FCFF]" : "bg-[#DFDFDF] "} p-4 w-[240px] text-center cursor-pointer `} >
                                Đăng ký
                            </div>
                        </div>


                    </div>
                    <div className="mt-4">
                        {
                            tab === 1
                                ?
                                <Gia_han_the_xe_thang />
                                :
                                <Dang_ky_ve_thang />
                        }
                    </div>
                </div>
            </div>
            <ModalCreateCard openModalCreateCard={openModalCreateCard} setOpenModalCreateCard={setOpenModalCreateCard} />
            <ModalExcel openModalExcel={openModalExcel} setOpenModalExcel={setOpenModalExcel} type={typeModalExcel} />
            <ModalChangeStatusCard tab={tab} openModalChangeStatusCard={openModalChangeStatusCard} setOpenModalChangeStatusCard={setOpenModalChangeStatusCard} />
        </div>

    )
}
export default CardManagement