import React, { useEffect, useState } from "react";
import { Checkbox, Modal, Select } from 'antd';

import iconSelect from "./../../../../assets/icon/select.svg"
import Button from "../Button";
const ModalChangeStatusCard = ({ openModalChangeStatusCard, setOpenModalChangeStatusCard, tab }: any) => {



    return (
        <Modal
            centered
            open={openModalChangeStatusCard}
            onOk={() => setOpenModalChangeStatusCard(false)}
            onCancel={() => setOpenModalChangeStatusCard(false)}
            width={400}
            footer={false}
            className="modal_Excel"
            title={<div className="text-[30px] font-medium "></div>}
        >
            <div className="pt-5">
                <div className="text-center">
                    Chuyển thẻ 12345678910 thành  {tab === 1 ? "Thẻ tháng" : "Thẻ ngày"}  ?
                </div>

                <Button className="mx-auto mt-7 " >Xác nhận </Button>
            </div>

        </Modal >
    )
}
export default ModalChangeStatusCard