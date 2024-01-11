import React, { useEffect, useState } from "react";
import { Modal, Select, Form, Input } from 'antd';
import iconSelect from "./../../../../assets/icon/select.svg"
import Button from "../Button";
import CustomDatePicker from "../CustomDatePicker";
import moment from "moment";
import 'dayjs/locale/vi';
import dayjs from 'dayjs';
const ModalUpdateCard = ({ openModalUpdateCard, setOpenModalUpdateCard }: any) => {
    const [form] = Form.useForm()
    const [text, setText] = useState<any>({})
    const [defaultValueDate, setDefaultValueDate] = useState({
        startTime: "03-09-2020",
        endTime: "01-12-2024"
    })
    const onFinish = (value: any) => {
        console.log("value", value)
        console.log(value['startTime'].format('DD/MM/YYYY'))
        console.log(value['endTime'].format('DD/MM/YYYY'))

    }
    const onChangeDatePicker = (dates: any, dateStrings: any) => {
        console.log(dates)
        console.log(dateStrings)
    }
    const dateFormat = 'DD/MM/YYYY';
    useEffect(() => {

        form.setFieldsValue({
            phoneNumber: "123456789",
            select: "1",
            fullName: "John Doe", // Set your initial value for fullName
            biensoxe: "ABC123", // Set your initial value for biensoxe
            note: "Some notes", // Set your initial value for note
            đaciem: "Some features", // Set your initial value for đaciem
            startTime: dayjs('03-09-2020', dateFormat),
            endTime: dayjs('01-12-2024', dateFormat)
        });


    }, []);


    return (
        <Modal

            centered
            open={openModalUpdateCard}
            onOk={() => setOpenModalUpdateCard(false)}
            onCancel={() => setOpenModalUpdateCard(false)}
            width={656}
            footer={false}
            title={< div className="text-[30px] font-medium pl-5 " > Thông tin thẻ</ div>}
        >
            <div className="p-5">

                <Form
                    onFinish={onFinish}
                    form={form}
                    layout="vertical"
                >

                    <div className="grid grid-cols-2 gap-[80px] ">
                        <Form.Item
                            name="phoneNumber"
                            label="Số điện thoại"
                            className="text-[16px]   delete-border border-b border-[#0D72BB] "
                            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại ' }]}
                        >
                            <Input className="h-[30px] border-none text-[#646464]  " placeholder="Nhập số điện thoại" />
                        </Form.Item>
                        <Form.Item
                            name="select"
                            label="Loại xe :"
                            className=""

                        >
                            <Select
                                placeholder="Chọn loại xe"
                                suffixIcon={
                                    <img src={iconSelect} alt=""></img>
                                }
                                style={{ width: "100%", display: "flex", }}
                                options={[
                                    { value: '1', label: '1 tháng' },
                                    { value: '2', label: '2 tháng' },

                                ]}
                            />

                        </Form.Item>
                    </div>
                    <div className="grid grid-cols-2 gap-[80px] ">
                        <Form.Item
                            name="fullName"
                            label="Tên Người dùng :"
                            className="text-[16px]   delete-border border-b border-[#0D72BB] "
                            rules={[{ required: true, message: 'Vui lòng nhập tên người dùng' }]}
                        >
                            <Input className="h-[30px] border-none text-[#646464]  " placeholder="Nhập tên người dùng" />
                        </Form.Item>
                        <Form.Item
                            name="biensoxe"
                            label="Biển số xe :"
                            className="text-[16px]  delete-border border-b border-[#0D72BB] "
                            rules={[{ required: true, message: 'Vui lòng nhập biển số xe ' }]}
                        >
                            <Input className="h-[30px] border-none text-[#646464]  " placeholder="Nhập  biển số xe" />
                        </Form.Item>
                    </div>
                    <div className="grid grid-cols-2 gap-[80px] ">
                        <Form.Item
                            name="note"
                            label="Ghi chú :"
                            className="text-[16px]   delete-border border-b border-[#0D72BB] "

                        >
                            <Input className="h-[30px] border-none text-[#646464]  " placeholder="Nhập  ghi chú " />
                        </Form.Item>
                        <Form.Item
                            name="đaciem"
                            label="Đặc điểm :"
                            className="text-[16px]  delete-border border-b border-[#0D72BB] "
                            rules={[{ required: true, message: 'Vui lòng nhập đặc điểm xe ' }]}
                        >
                            <Input className="h-[30px] border-none text-[#646464]  " placeholder="Nhập  đặc điểm xe" />
                        </Form.Item>
                    </div>

                    <div>
                        <div className="font-bold">
                            Thời hạn sử dụng :
                        </div>
                        <div className="flex gap-3 items-center mt-5 ">
                            <Form.Item
                                name="startTime"

                                className="text-[16px] mb-0  w-[125px]   "

                            >
                                <CustomDatePicker name="startTime" form={form} defaultValue={defaultValueDate.startTime} placeholder="Từ" />
                            </Form.Item>
                            <div>
                                -
                            </div>
                            <Form.Item
                                name="endTime"

                                className="text-[16px] mb-0   w-[125px]  "

                            >
                                <CustomDatePicker name="endTime" form={form} defaultValue={defaultValueDate.endTime} placeholder="Đến" />
                            </Form.Item>
                        </div>
                    </div>




                    <Form.Item className="mb-0 mt-8 ">
                        <Button className=" mx-auto " htmlType="submit" >Cập nhật </Button>
                    </Form.Item>

                </Form>

            </div>

        </Modal >
    )
}
export default ModalUpdateCard