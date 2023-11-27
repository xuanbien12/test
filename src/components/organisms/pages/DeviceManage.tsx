
import React, { useState, useEffect } from 'react'

import NavbarTable from '../components/NavbarTable'
import TableCustomer from '../components/table/tableCustomer'
import { listDevice } from '../../../apis/apis'
import { token } from '../../../configs/localStorage'
import { Modal, Button } from 'antd'
import ModalConfirmDelete from '../components/Modal/ModalConfirmDelete'



const DeviceManage = () => {
    const [modal, contextHolder] = Modal.useModal();

    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(10)
    const [dataDeviceManage, setDataDeviceManage] = useState([])
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [isOpenModalConfirm, setIsOpenModalConfirm] = useState(false)
    const onSelectChangeCheckBox = (e: any) => {

        setSelectedRowKeys(e);
    }

    useEffect(() => {
        setLoading(true)
        const tokenFormat = new FormData();
        tokenFormat.append("token", `${token}`);
        listDevice(tokenFormat)
            .then((res) => {

                setDataDeviceManage(res?.data?.message)
            })
            .catch((e) => {
                console.log("e", e)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])


    const handleDelete = () => {
        console.log("=====")
    }

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChangeCheckBox,
    };
    const columns = [
        {
            title: "STT",
            key: "index",
            width: 60,
            render: (text: string, record: any, index: number) => (page - 1) * size + index + 1,
            align: "center"
        },
        {
            title: "ID Device",
            dataIndex: "serinb",
            render: (serinb: string) => <div className='text-[#3772D4] underline cursor-pointer'>
                {
                    serinb
                }
            </div>,
            align: "center",
            width: 250,
        },
        {
            title: "Device Name",
            dataIndex: "name",
            align: "center",
            width: 150,
        },
        {
            title: "Model",
            dataIndex: "model",
            align: "center",
            width: 150,
        },
        {
            title: "Cell Type",
            dataIndex: "celltype",
            align: "center",
            width: 150,
        },
        {
            title: "Activate Phone",
            dataIndex: "phone_active",
            align: "center",
            width: 150,
        },
        {
            title: "Delete device",
            key: "delete",
            fixed: "right",
            align: "center",
            width: 100,
            render: () => <button className='text-[#009A34] font-normal ' onClick={() => setIsOpenModalConfirm(true)}>Delete</button>,
        },
    ];

    return (
        <div className='w-full'>
            <div>
                <NavbarTable />
            </div>
            <div className='mt-10 w-full'>
                <TableCustomer
                    dataSource={dataDeviceManage}
                    dataColumns={columns}
                    rowSelection={rowSelection}
                    loading={loading}
                    setSize={setSize}
                    setPage={setPage}
                    scrollSize={0}
                />
            </div>
            {contextHolder}
            <ModalConfirmDelete isOpenModalConfirm={isOpenModalConfirm} setIsOpenModalConfirm={setIsOpenModalConfirm} handleDelete={handleDelete} />
        </div>
    )
}
export default DeviceManage