import React, { useEffect, useState } from "react";
import { Checkbox, Form, Input, Modal, Select } from 'antd';

import iconSelect from "./../../../../assets/icon/select.svg"
import Button from "../Button";
const ModalCreateCard = ({ openModalCreateCard, setOpenModalCreateCard }: any) => {
    const [valueSelect, setValueSelect] = useState<any>();
    const [valueCheckBox, setValueCheckBox] = useState<any>();
    const [form] = Form.useForm()
    const handleChange = (value: any) => {
        setValueSelect(value)
    }
    const onChangeCheckbox = (value: any) => {

        setValueCheckBox(value.target.name)
    }
    console.log("onChangeCheckbox", valueCheckBox)
    const onFinish = (value: any) => {
        console.log(value)
    }
    return (
        <Modal
            centered
            open={openModalCreateCard}
            onOk={() => setOpenModalCreateCard(false)}
            onCancel={() => setOpenModalCreateCard(false)}
            width={415}
            footer={false}
            className="modal-create-card customer-label-modal"
            title={<div className="text-[30px] font-normal ">Thêm thẻ</div>}
        >
            <div className=" px-6 pt-6 text-center">
                <Form
                    labelCol={{ span: 8 }}
                    form={form}
                    onFinish={onFinish}
                >

                    <Form.Item
                        name="select"
                        label="Loại xe"
                        className=""

                    >

                        <Select
                            placeholder="Chọn loại xe"
                            suffixIcon={
                                <img src={iconSelect} alt=""></img>
                            }
                            style={{ width: "70%", display: "flex", }}

                            onChange={handleChange}
                            options={[
                                { value: '1', label: '1 tháng' },
                                { value: '2', label: '2 tháng' },

                            ]}
                        />

                    </Form.Item>
                    <Form.Item
                        name="id"
                        label="ID"

                    >
                        <div
                            className="text-[16px] w-[50%]  delete-border border-b border-[#0D72BB] "
                        >
                            <Input className="h-[30px] border-none text-[#646464]  " placeholder="Nhập kí tự " />
                        </div>
                    </Form.Item>
                    <Form.Item
                        name="code"
                        label="Mã thẻ"

                    >
                        <div
                            className="text-[16px] w-full delete-border border-b border-[#0D72BB] "
                        >
                            <Input className="h-[30px] border-none text-[#646464]  " placeholder="Nhập kí tự " />
                        </div>
                    </Form.Item>
                    <Form.Item
                        name="status"
                        label="Trạng thái"

                    >

                        <Checkbox className="mr-2" checked={valueCheckBox === "1" ? true : false} name="1" onChange={onChangeCheckbox}>Kích hoạt</Checkbox>
                        <Checkbox checked={valueCheckBox === "2" ? true : false} name="2" onChange={onChangeCheckbox}>khóa</Checkbox>

                    </Form.Item>
                    <div className=" flex justify-between items-center  mt-5">
                        <Form.Item
                            name="auto"
                            valuePropName="checked"
                        >
                            <Checkbox >Auto Thêm thẻ</Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Button className=" " htmlType="submit" >Xác nhận </Button>
                        </Form.Item>
                    </div>
                </Form>



            </div>
        </Modal >
    )
}
export default ModalCreateCard