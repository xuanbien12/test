import React, { useEffect, useState } from "react";
import { Checkbox, Modal, Select, Form, Input } from 'antd';

import Button from "../Button";
const ModalUser = ({ openModalUser, setOpenModalUser }: any) => {
    const [form] = Form.useForm()
    const onFinish = (value: any) => {
        console.log(value)
    }

    return (
        <Modal

            centered
            open={openModalUser}
            onOk={() => setOpenModalUser(false)}
            onCancel={() => setOpenModalUser(false)}
            width={656}
            footer={false}
            className="modal_Excel"
            title={<div className="text-[30px] font-medium pl-5 ">Tạo mới người dùng</div>}
        >
            <div className="p-5">

                <Form
                    onFinish={onFinish}
                    form={form}
                    layout="vertical"
                >



                    <div className="grid grid-cols-2 gap-[80px] ">
                        <Form.Item
                            name="useName"
                            label="Tài khoản :"
                            className="text-[16px]   delete-border border-b border-[#0D72BB] "
                            rules={[{ required: true, message: 'Vui lòng nhập tài khoản ' }]}
                        >

                            <Input className="h-[30px] border-none text-[#646464]  " placeholder="Nhập tài khoản (số điện thoại)" />

                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="Mật khẩu :"
                            className="text-[16px]  delete-border border-b border-[#0D72BB] "
                            rules={[{ required: true, message: 'Vui lòng nhập password ' }]}
                        >

                            <Input.Password className="h-[30px] border-none text-[#646464]  " placeholder="Nhập nhập mật khẩu " />

                        </Form.Item>
                    </div>
                    <div className="grid grid-cols-2 gap-[80px] ">
                        <Form.Item
                            name="Name"
                            label="Tên Người dùng :"
                            className="text-[16px]   delete-border border-b border-[#0D72BB] "
                            rules={[{ required: true, message: 'Vui lòng nhập tên nhân viên ' }]}
                        >
                            <Input className="h-[30px] border-none text-[#646464]  " placeholder="Nhập tên nhân viên" />

                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="Email :"
                            className="text-[16px]  delete-border border-b border-[#0D72BB] "
                            rules={[{ required: true, message: 'Vui lòng nhập Email ', type: 'email' }]}
                        >

                            <Input className="h-[30px] border-none text-[#646464]  " placeholder="Nhập nhập Email " />

                        </Form.Item>
                    </div>
                    <div className="flex gap-3 items-center mt-2 ">
                        <div className="font-bold mb-5">

                            Nhóm người dùng :
                        </div>
                        <Form.Item
                            name="nhomnguoi"

                            className="text-[16px] mb-0  w-[45%]  "
                            rules={[{ required: true, message: 'Vui lòng chọn nhóm người dùng ' }]}
                        >

                            <Select
                                className="  select-default"
                                placeholder="chọn nhóm "
                                style={{ width: "150px" }}
                                options={[
                                    { value: '1', label: 'Tất cả' },
                                    { value: '2', label: 'ADMIN' },
                                    { value: '3', label: 'Nhân viên' },
                                    { value: '4', label: 'Khách hàng' },

                                ]}
                            />
                        </Form.Item>
                    </div>



                    <Form.Item className="mb-0 mt-8 ">
                        <Button className=" mx-auto " htmlType="submit" >Cập nhật </Button>
                    </Form.Item>

                </Form>

            </div>

        </Modal >
    )
}
export default ModalUser