import React, { useEffect, useState } from "react";
import { Checkbox, Modal, Select } from 'antd';

import iconSelect from "./../../../../assets/icon/select.svg"
import Button from "../Button";
const ModalExcel = ({ openModalExcel, setOpenModalExcel, type, submit }: any) => {
    const [valueSelect, setValueSelect] = useState<any>();
    const [valueCheckBox, setValueCheckBox] = useState<any>();
    const handleChange = (value: any) => {
        setValueSelect(value)
    }
    const onChangeCheckbox = (value: any) => {

        setValueCheckBox(value.target.name)
    }
    console.log("onChangeCheckbox", valueCheckBox)

    return (
        <Modal
            centered
            open={openModalExcel}
            onOk={() => setOpenModalExcel(false)}
            onCancel={() => setOpenModalExcel(false)}
            width={300}
            footer={false}
            className="modal_Excel"
            title={<div className="text-[30px] font-medium ">{type === "import" && "Thêm file thẻ" || type === "export" && "Xuất file thẻ"}</div>}
        >
            <div className="py-4 text-center">
                <div className="flex gap-2 mb-6 items-end ">
                    <span className="font-bold">Loại xe : </span>
                    <Select
                        placeholder="Thời gian gia hạn"
                        suffixIcon={
                            <img src={iconSelect} alt=""></img>
                        }
                        style={{ width: '180px' }}
                        onChange={handleChange}
                        options={[
                            { value: '1', label: '1 tháng' },
                            { value: '2', label: '2 tháng' },

                        ]}
                    />
                </div>
                {
                    type === "import"
                    &&
                    <div className="flex gap-3 justify-center  ">
                        <Checkbox checked={valueCheckBox === "cardDay" ? true : false} name="cardDay" onChange={onChangeCheckbox}>Thẻ ngày</Checkbox>
                        <Checkbox checked={valueCheckBox === "cardMonth" ? true : false} name="cardMonth" onChange={onChangeCheckbox}>Thẻ tháng</Checkbox>
                    </div>

                }

                <Button className="mx-auto mt-7 " >Xác nhận </Button>
            </div>
        </Modal >
    )
}
export default ModalExcel