"use client"
import React from "react"
import { Table } from 'antd';

interface propsTable {
    dataColumns?: any,
    dataSource?: any,
    setPage?: any,
    setSize?: any,
    scrollSize?: number,
    rowSelection?: any,
    loading?: boolean,
    pageSize?: any,

}
const TableCustomer: React.FC<propsTable> = (props) => {
    const { dataColumns, dataSource, setPage, setSize, scrollSize, rowSelection, loading, pageSize } = props
    const newDataSource = dataSource?.map((item: any, index: any) => {
        return {
            ...item,
            key: item.id
        }
    })

    return (

        <>

            <Table
                style={{ overflowX: "auto" }}
                rowSelection={rowSelection}
                className="table_customer w-full"
                columns={dataColumns}
                dataSource={newDataSource}
                pagination={{
                    onChange: (value: any) => setPage(value),
                    onShowSizeChange(current, size) {
                        setSize(size)
                    },
                    pageSize: pageSize
                }}
                loading={loading}

                bordered
            />


        </>


    )
}
export default TableCustomer