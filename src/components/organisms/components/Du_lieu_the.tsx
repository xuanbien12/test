import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useDebounce } from 'react-use';
import TableCustomer from "./table/tableCustomer";
import { Input, Modal } from "antd";
import { ExclamationCircleFilled } from '@ant-design/icons';
import search from "./../../../assets/icon/search.svg";
import ModalUpdateCard from "./Modal/ModalUpdateCard";
import { Notification } from "../../../configs/notification";
const Du_lieu_The = () => {
    const [valueSearchInput, setValueSearchInput] = useState("")
    const [debouncedValue, setDebouncedValue] = useState<string>('');
    const [selectedRowKeys, setSelectedRowKeys] = useState<any>([]);
    const [data, setData] = useState<any>([])
    const [openModalUpdateCard, setOpenModalUpdateCard] = useState(false)
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
    const handleSearch = (newValue: string) => {
        console.log("newValue", newValue)
        setValueSearchInput(newValue);
    };
    useEffect(() => {
        const data = []
        for (let i = 0; i <= 50; i++) {
            data.push({
                id: i + 1,
                1: "hết hạn",
                2: "12345678910",
                3: "Nguyễn Xuân Biên",
                4: "60A170172",
                5: "30/12/2024",
            })
        }

        setData(data)
    }, [])
    useDebounce(
        () => {
            setDebouncedValue(valueSearchInput);
        },
        1000, // Khoảng thời gian debounce là 1 giây
        [valueSearchInput] // Thay đổi giá trị debounce khi inputValue thay đổi
    );
    useEffect(() => {
        console.log("value", valueSearchInput)
    }, [debouncedValue]);


    const columns = [
        {
            title: "Trạng thái",
            dataIndex: "1",
            align: "center",
            width: 100,
        },
        {
            title: "Mã thẻ",
            dataIndex: "2",
            align: "center",
            width: 120,

        },
        {
            title: "Họ và tên",
            dataIndex: "3",
            align: "center",
            width: 170,

        },
        {
            title: "Biển số",
            dataIndex: "4",
            align: "center",
            width: 100,

        },
        {
            title: "Ngày hết hạn",
            dataIndex: "5",
            align: "center",
            width: 120,

        }
    ];
    const handleConfirmDelete = () => {

    }
    const onRowClick = (record: any) => {

        const check = selectedRowKeys.find((item: any) => item === record?.id)
        if (check) {
            const newData = selectedRowKeys.filter((item: any) => item !== record?.id)
            setSelectedRowKeys(newData)
        } else {
            setSelectedRowKeys([...selectedRowKeys, record?.id])
        }

    }
    return (
        <div>
            <div className=" mb-10">
                <div className="flex gap-[70px] ">
                    <div className="relative w-[307px] h-[35px] ">
                        <Input onChange={(e) => handleSearch(e.target.value)} className=" h-full pr-[40px] " placeholder="Tìm  kiếm với mọi thông tin" />


                        <img className="absolute top-[8px] right-[8px] " src={search} alt="" />
                    </div>



                </div>

            </div>
            <div className="py-5 px-3 border border-[#0D72BB] relative rounded-[5px] ">
                <div className="absolute  text-[#0D72BB] text-[20px] px-2 top-[-15px] bg-[#F0F8FF] left-3 ">
                    Dữ liệu thẻ
                </div>
                <div className="flex justify-end gap-5">
                    <Button onClick={() => {
                        if (selectedRowKeys.length) {
                            if (selectedRowKeys.length === 1) {
                                setOpenModalUpdateCard(true)
                            } else {
                                Notification("error", "Vui lòng chỉ chọn 1 thẻ xe ")
                            }
                        } else {
                            Notification("error", "Vui lòng chọn thẻ mà bạn muốn sửa ")
                        }
                    }} className="btn-delete-1 flex items-center " width="100px" >
                        Sửa
                    </Button>
                    <Button className="btn-delete-1 flex items-center " onClick={showDeleteConfirm} width="100px" >
                        Xóa
                    </Button>
                </div>
                <div className="grid grid-cols-2 my-2  gap-y-[20px] ">
                    <div>
                        Mã thẻ :
                    </div>
                    <div>
                        Loại xe :
                    </div>
                    <div>
                        Họ và tên:
                    </div>
                    <div>
                        Biển số xe:
                    </div>
                    <div>
                        Số điện thoại:
                    </div>
                    <div>
                        Hạn dùng:
                    </div>
                    <div>
                        Đặc điểm xe:
                    </div>
                    <div>
                        Ghi chú:
                    </div>
                </div>
                <div className="mt-10 table-scroll table-style">
                    <TableCustomer
                        dataSource={data}
                        dataColumns={columns}
                        rowSelection={rowSelection}
                        loading={loading}

                        scrollSize={210}
                        pagination={true}
                        onRowClick={onRowClick}
                    />
                </div>
            </div>
            <ModalUpdateCard openModalUpdateCard={openModalUpdateCard} setOpenModalUpdateCard={setOpenModalUpdateCard} />
        </div>
    )
}
export default Du_lieu_The