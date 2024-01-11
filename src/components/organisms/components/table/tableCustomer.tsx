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
    total?: any,
    pagination?: any,
    onRowClick?: any

}
const TableCustomer: React.FC<propsTable> = (props) => {
    const { dataColumns, dataSource, total, setPage, setSize, scrollSize, pagination, rowSelection, loading, pageSize, onRowClick } = props
    const newDataSource = dataSource?.map((item: any, index: any) => {
        return {
            ...item,
            key: item.id
        }
    })
    const row = (record: any) => {

    }
    return (



        <Table

            rowSelection={rowSelection}
            className="table_customer w-full"
            columns={dataColumns}
            dataSource={newDataSource}
            pagination={
                pagination
                    ?
                    false
                    :
                    {
                        total: total,
                        onChange: (value: any) => setPage(value),
                        onShowSizeChange(current, size) {
                            setSize(size)
                        },
                        pageSize: pageSize,


                    }}
            loading={loading}
            scroll={{ y: scrollSize }}
            bordered
            onRow={(record: any) => ({
                onClick: () => onRowClick ? onRowClick(record) : row(record),
            })}

        />



    )
}
export default TableCustomer