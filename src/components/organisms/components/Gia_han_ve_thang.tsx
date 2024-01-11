import React, { useEffect, useState } from "react";
import Button from "./Button";
import TableCustomer from "./table/tableCustomer";
import { DatePicker, Modal } from "antd";
import { ExclamationCircleFilled } from '@ant-design/icons';
import CustomDatePicker from "./CustomDatePicker";

const Gia_han_ve_thang = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const { confirm } = Modal;
    const onSelectChangeCheckBox = (e: any) => {

        setSelectedRowKeys(e);
    }
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChangeCheckBox,
    };
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
                1: "123456789123",
                2: "60A170172",
                3: "30/11/2023",
                4: "30/11/2023",
                5: "1.000.000",
            })
        }

        setData(data)
    }, [])

    const columns = [
        {
            title: "Mã thẻ",
            dataIndex: "1",
            align: "center",
            width: 120,
        },
        {
            title: "Biển số",
            dataIndex: "2",
            align: "center",
            width: 100,

        },
        {
            title: "Ngày đăng ký",
            dataIndex: "3",
            align: "center",
            width: 120,

        },
        {
            title: "Ngày hết hạn",
            dataIndex: "4",
            align: "center",
            width: 120,

        },
        {
            title: "Giá tiền (vnd)",
            dataIndex: "5",
            align: "center",
            width: 100,

        }
    ];
    const handleConfirmDelete = () => {

    }

    const onChangeDatePicker = (dates: any, dateStrings: any) => {
        console.log(dates)
        console.log(dateStrings)
    }

    return (
        <div className="mt-[75px]">
            <div className="py-7 px-3 border border-[#0D72BB] relative rounded-[5px] ">
                <div className="absolute   text-[#0D72BB] text-[20px] px-2 top-[-15px] bg-[#F0F8FF] left-3 ">
                    Gia hạn vé tháng
                </div>

                <div className="flex justify-end gap-10">

                    <div className="flex items-center gap-3">
                        <CustomDatePicker onChange={onChangeDatePicker} placeholder="Từ" />
                        <div>
                            -
                        </div>
                        <CustomDatePicker onChange={onChangeDatePicker} placeholder="Đến" />

                    </div>



                    <Button className="btn-delete-1 flex items-center " width="100px" >
                        Gia hạn
                    </Button>
                </div>

                <div className="mt-10 table-scroll table-style">
                    <TableCustomer
                        dataSource={data}
                        dataColumns={columns}
                        rowSelection={rowSelection}
                        loading={loading}
                        scrollSize={350}
                        pagination={true}

                    />
                </div>
            </div>
        </div>
    )
}
export default Gia_han_ve_thang