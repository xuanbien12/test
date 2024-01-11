
import React, { useEffect, useState } from "react";
import { Modal, Select, Form, Input, Checkbox } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import Button from "./Button";
import CustomDatePicker from "./CustomDatePicker";
import moment from "moment";
import 'dayjs/locale/vi';
import dayjs from 'dayjs';
import CustomSelect from "./CustomSelect";
import TableCustomer from "./table/tableCustomer";
import IconTable from "./IconTable";
import iconSelect from "./../../../assets/icon/select.svg"
const Dang_ky_ve_thang = () => {

    const [data, setData] = useState<any>([])
    const [defaultValueDate, setDefaultValueDate] = useState({
        startTime: "03-09-2020",
        endTime: "01-12-2024"
    })
    const [form] = Form.useForm()
    const { confirm } = Modal;
    const [loading, setLoading] = useState(false)
    const { TextArea } = Input;
    const onFinish = (value: any) => {
        console.log("value", value)
        console.log(value['startTime'].format('DD/MM/YYYY'))
        console.log(value['endTime'].format('DD/MM/YYYY'))

    }
    const handleConfirmDelete = () => {

    }
    const dateFormat = 'DD/MM/YYYY';
    useEffect(() => {

        form.setFieldsValue({

            startTime: dayjs('03-09-2020', dateFormat),
            endTime: dayjs('01-12-2024', dateFormat)
        });


    }, []);
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
    useEffect(() => {
        const data = []
        for (let i = 0; i <= 50; i++) {
            data.push({
                id: i + 1,
                1: "Nguyễn xuân biên",
                2: "0362953021",
                3: "60A170101",
                4: "Camry 2.5G nâu",

            })
        }

        setData(data)
    }, [])
    const columns = [
        {
            title: "STT",
            key: "index",
            width: 30,
            render: (text: string, record: any, index: number) => index,
            align: "center"
        },
        {
            title: "Tên khách hàng",
            dataIndex: "1",
            align: "center",
            width: 100,
        },
        {
            title: "Số điện thoại ",
            dataIndex: "2",
            align: "center",
            width: 120,

        },
        {
            title: "Biển số xe",
            dataIndex: "3",
            align: "center",
            width: 120,

        },
        {
            title: "Đặc điểm nhận dạng",
            dataIndex: "4",
            align: "center",
            width: 200,

        },
        {


            align: "center",
            width: 50,
            render: () => <div className="flex justify-center"> <IconTable onClick={showDeleteConfirm} type="delete" />
            </div>
        }
    ];
    const onRowClick = (record: any) => {



    }
    return (
        <div className="a ">
            <Form
                onFinish={onFinish}
                form={form}
                labelCol={{ span: 10 }}
                labelAlign="left"
                className="form-label-20"
            >


                <div className="grid grid-cols-2 gap-[80px]">
                    <div>
                        <div className="flex gap-4">
                            <Form.Item
                                name="code"
                                label="Mã thẻ"
                                className="text-[16px] w-[80%]  flex-label     "
                                rules={[{ required: true, message: 'Vui lòng nhập Mã thẻ ' }]}
                            >
                                <Input className="h-[35px] w-[80%]   border-none text-[#646464]  " placeholder="Nhập Mã thẻ" />
                            </Form.Item>
                            <Form.Item
                                name="select"
                                className="w-[20%]"
                                rules={[{ required: true, message: 'Vui lòng nhập chọn loại xe' }]}
                            >
                                <CustomSelect name="select" form={form} />

                            </Form.Item>
                        </div>

                        <Form.Item
                            name="phoneNumber"
                            label="số điện thoại "
                            className="text-[16px]    "
                            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
                        >
                            <Input className="h-[35px] border-none text-[#646464]  " placeholder="Nhập số điện thoại" />
                        </Form.Item>
                        <Form.Item
                            name="fullName"
                            label="Họ và tên "
                            className="text-[16px]   "
                            rules={[{ required: true, message: 'Vui lòng nhập họ và tên ' }]}
                        >
                            <Input className="h-[35px] border-none text-[#646464]  " placeholder="Nhập  họ và tên" />
                        </Form.Item>

                        <Form.Item
                            label="Thời gian sử dụng"
                            className="text-[16px]   "
                        >
                            <div className="flex gap-3 ">
                                <Form.Item
                                    name="checkAllMonth"
                                    valuePropName="checked"
                                    className="text-[16px] mb-0  w-[110px]   "
                                >
                                    <Checkbox >All month</Checkbox>
                                </Form.Item>
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
                            <div className="flex justify-between  ">
                                <div>
                                    Giá tiền :  1,300,000 Vnd
                                </div>
                                <div>
                                    Thời hạn: 1 tháng
                                </div>
                            </div>
                        </Form.Item>

                        <Form.Item
                            name="biensoxe"
                            label="Biển số xe  "
                            className="text-[16px]   "
                            rules={[{ required: true, message: 'Vui lòng nhập biển số xe ' }]}
                        >
                            <Input className="h-[35px] border-none text-[#646464]  " placeholder="Nhập  biển số xe" />
                        </Form.Item>
                        <Form.Item

                            name="dacdiemnhandang"
                            label="Đặc điểm nhận dạng "
                            className="text-[16px]   "
                            rules={[{ required: true, message: 'Vui lòng nhập đặc điểm nhận dạng' }]}
                        >
                            <Input className="h-[35px] border-none text-[#646464]  " placeholder="Nhập đặc điểm xe" />
                        </Form.Item>

                    </div>
                    <div>
                        <div>
                            <div className="font-bold">
                                Ghi chú (Tiền cọc,.v.v.)
                            </div>
                            <Form.Item
                                name="desc"
                            >
                                <TextArea rows={11} placeholder="nhập ghi chú" />
                            </Form.Item>
                        </div>
                        <Form.Item className="mb-0 mt-8 ">
                            <Button className=" " htmlType="submit" >Đăng ký </Button>
                        </Form.Item>

                    </div>
                </div>


            </Form>

            <div className=" table-scroll table-style">
                <span className="text-[20px] text-[#0D72BB] ">Kích hoạt đăng ký</span>
                <TableCustomer
                    dataSource={data}
                    dataColumns={columns}

                    loading={loading}

                    scrollSize={210}
                    pagination={true}
                    onRowClick={onRowClick}
                />
            </div>
        </div>
    )
}
export default Dang_ky_ve_thang