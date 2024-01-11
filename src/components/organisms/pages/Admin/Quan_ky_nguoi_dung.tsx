import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { Checkbox, Input, Modal, Select } from "antd";
import { useDebounce } from 'react-use';
import search from "./../../../../assets/icon/search.svg"

import { ExclamationCircleFilled } from '@ant-design/icons';
import TableCustomer from "../../components/table/tableCustomer";
import IconTable from "../../components/IconTable";
import ModalUser from "../../components/Modal/ModalUser";
const UserManagement = () => {
    const { confirm } = Modal;
    const [valueSearchInput, setValueSearchInput] = useState("")
    const [debouncedValue, setDebouncedValue] = useState<string>('');
    const [data, setData] = useState<any>([])
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(10)
    const [totalElement, setTotalElement] = useState<number>()

    const [openModalCreateUser, setOpenModalCreateUser] = useState(false)

    const onSelectChangeCheckBox = (e: any) => {

        setSelectedRowKeys(e);
    }
    console.log("selectedRowKeys", selectedRowKeys)
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChangeCheckBox,
    };
    const handleConfirmDelete = () => {

    }
    const showDeleteConfirm = () => {
        confirm({
            title: 'Bạn có chắc muốn người dùng không ?',
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
    const handleSubmitInput = () => {

    }
    const handleSearch = (newValue: string) => {
        console.log("newValue", newValue)
        setValueSearchInput(newValue);
    };
    useEffect(() => {
        const data = []
        for (let i = 0; i <= 50; i++) {
            data.push({
                id: i,
                1: "Nguyễn Xuân Biên",
                2: "Nguyễn Xuân Biên",
                3: "Nguyễn Xuân Biên",
                4: "Nguyễn Xuân Biên",
                5: "Nguyễn Xuân Biên",
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

    const handleUpdateTypeTable = (id: any) => {

    }
    const columns = [
        {
            title: "STT",
            key: "index",
            width: 60,
            render: (text: string, record: any, index: number) => (page - 1) * size + index + 1,
            align: "center"
        },
        {
            title: "Mã thẻ",
            dataIndex: "1",
            align: "center",
            width: 150,
        },
        {
            title: "Loại xe",
            dataIndex: "2",
            align: "center",
            width: 150,

        },
        {
            title: "Tài khoản tạo",
            dataIndex: "3",
            align: "center",
            width: 150,

        },
        {
            title: "Trang thái thẻ",
            dataIndex: "4",
            align: "center",
            width: 150,

        },
        {
            title: "Ngày tạo",
            dataIndex: "5",
            align: "center",
            width: 150,

        },
        {

            align: "center",
            dataIndex: "1",
            width: 80,
            render: (id: any) => <div className="flex gap-3 justify-center items-center">
                <IconTable onClick={() => handleEditTable(id)} type="edit" />
                <IconTable onClick={() => handleUpdateTypeTable(id)} type="update" />
                <IconTable onClick={showDeleteConfirm} type="delete" />
            </div>
        },
    ];

    const handleEditTable = (id: string) => {
        console.log("id", id)


    }

    const handleChangeSelect = (value: any) => {

    }
    const onChangeCheckboxAll = (e: any) => {

        const value = e.target.checked
        if (value) {
            const newSelectedRowKeys = data.map((item: any, index: number) => item.id);

            setSelectedRowKeys(newSelectedRowKeys);
        } else {

            setSelectedRowKeys([]);
        }


    };
    return (
        <div className="h-full">

            <div className="container h-full">
                <div className=" h-full">
                    <div className="pb-6 flex justify-between items-center border-b border-[#A3A3A3] ">
                        <div className="text-[32px]">
                            Quản lý người dùng
                        </div>

                    </div>
                    <div className="">
                        <div className="py-1 border-b border-[#0D72BB] flex gap-2.5 ">
                            <div className={` border-t border-l border-r border-[#0D72BB] bg-[#F5FCFF] p-[17px] w-[240px] text-center cursor-pointer `}>
                                Thông tin người dùng
                            </div>
                        </div>

                        <div className="py-3">
                            <div className="flex justify-between" >

                                <div className="flex gap-[20px] ">
                                    <div className="relative w-[307px] h-[35px] ">
                                        <Input onChange={(e) => handleSearch(e.target.value)} className=" h-full pr-[40px] " placeholder="Tìm kiếm với tất cả thông tin" />
                                        <img className="absolute top-[8px] right-[8px] " src={search} alt="" />
                                    </div>
                                    <Select

                                        onChange={handleChangeSelect}
                                        className=" w-[150px] select-default"
                                        defaultValue="Tất cả"
                                        options={[
                                            { value: '1', label: 'Tất cả' },
                                            { value: '2', label: 'ADMIN' },
                                            { value: '3', label: 'Nhân viên' },
                                            { value: '4', label: 'Khách hàng' },

                                        ]}
                                    />
                                    <div className="flex gap-5">
                                        <Button className=" flex items-center justify-center " onClick={handleSubmitInput} width="120px" >
                                            Tìm kiếm
                                        </Button>

                                    </div>

                                </div>

                                <div>
                                    <Button onClick={() => {
                                        setOpenModalCreateUser(true)
                                    }} className="btn-add-1 flex items-center " width="170px" >
                                        <svg className="icon-add-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" >
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C10 0.447715 9.55229 0 9 0C8.44771 0 8 0.447715 8 1V8L1 8C0.447715 8 0 8.44771 0 9C0 9.55229 0.447715 10 1 10H8V17C8 17.5523 8.44771 18 9 18C9.55229 18 10 17.5523 10 17V10H17C17.5523 10 18 9.55229 18 9C18 8.44771 17.5523 8 17 8L10 8V1Z" />
                                        </svg>
                                        Tạo người dùng

                                    </Button>
                                </div>
                            </div>

                        </div>
                        <div className="flex gap-5 ml-10 items-center">
                            <Checkbox onChange={onChangeCheckboxAll}>Chọn tất cả</Checkbox>
                            <Button className="btn-delete-1 flex items-center " onClick={showDeleteConfirm} width="90px" >
                                <svg className=" mr-2 icon-delete-1  " xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" >
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 1.41667C5.58579 1.41667 5.25 1.7338 5.25 2.125H9.75C9.75 1.7338 9.41421 1.41667 9 1.41667H6ZM11.25 2.125C11.25 0.951395 10.2426 0 9 0H6C4.75736 0 3.75 0.951395 3.75 2.125H0.75C0.335786 2.125 0 2.44213 0 2.83333C0 3.22453 0.335786 3.54167 0.75 3.54167H14.25C14.6642 3.54167 15 3.22453 15 2.83333C15 2.44213 14.6642 2.125 14.25 2.125H11.25Z" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.57702 7.08478C5.99039 7.05976 6.34697 7.35595 6.37346 7.74635L6.74846 13.2714C6.77496 13.6618 6.46134 13.9985 6.04798 14.0235C5.63461 14.0486 5.27803 13.7524 5.25154 13.362L4.87654 7.83698C4.85004 7.44658 5.16366 7.10981 5.57702 7.08478Z" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.42298 7.08478C9.00961 7.05976 8.65303 7.35595 8.62654 7.74635L8.25154 13.2714C8.22504 13.6618 8.53866 13.9985 8.95202 14.0235C9.36539 14.0486 9.72197 13.7524 9.74846 13.362L10.1235 7.83698C10.15 7.44658 9.83634 7.10981 9.42298 7.08478Z" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.808481 5.44429C0.724548 4.81013 1.24811 4.25 1.92479 4.25H13.0752C13.7519 4.25 14.2755 4.81013 14.1915 5.44429L12.9085 15.1386C12.7677 16.202 11.8106 17 10.6758 17H4.32417C3.18945 17 2.23229 16.202 2.09155 15.1386L0.808481 5.44429ZM2.34959 5.66667L3.57997 14.9629C3.62688 15.3173 3.94593 15.5833 4.32417 15.5833H10.6758C11.0541 15.5833 11.3731 15.3173 11.42 14.9629L12.6504 5.66667H2.34959Z" />
                                </svg>
                                Xóa
                            </Button>
                        </div>
                    </div>
                    <div className="mt-5">
                        <TableCustomer
                            dataSource={data}
                            dataColumns={columns}
                            rowSelection={rowSelection}
                            loading={loading}
                            setSize={setSize}
                            setPage={setPage}
                            pageSize={size}
                            total={totalElement}
                        // onRowClick={onRowClick}
                        />
                    </div>
                </div>
            </div>
            <ModalUser openModalUser={openModalCreateUser} setOpenModalUser={setOpenModalCreateUser} />
        </div>

    )
}
export default UserManagement