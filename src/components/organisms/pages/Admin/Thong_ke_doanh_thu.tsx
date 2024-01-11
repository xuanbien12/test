import { Form, Input, Modal } from "antd";
import React, { useEffect, useState, useRef } from "react";
import search from "./../../../../assets/icon/search.svg";
import CustomDatePicker from "../../components/CustomDatePicker";
import Button from "../../components/Button";
import CustomSelect from "../../components/CustomSelect";
import dayjs from 'dayjs';
import TableCustomer from "../../components/table/tableCustomer";
import IconTable from "../../components/IconTable";

const Thong_ke_doanh_thu = () => {
    const { confirm } = Modal;
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(15)
    const [totalElement, setTotalElement] = useState<number>()
    const [startTime, setStartTime] = useState<any>()

    const [form] = Form.useForm()
    const [defaultValueDate, setDefaultValueDate] = useState({
        startTime: "",
        endTime: ""
    })
    const onFinish = (value: any) => {
        console.log("value", value)
        console.log(value['startTime'].format('DD/MM/YYYY'))
        console.log(value['endTime'].format('DD/MM/YYYY'))
    }

    const handleSetDay = () => {
        form.setFieldValue("startTime", dayjs().startOf('day'));
        form.setFieldValue("endTime", dayjs().startOf('day'));

        setDefaultValueDate({
            startTime: dayjs().startOf('day').format('DD/MM/YYYY'),
            endTime: dayjs().startOf('day').format('DD/MM/YYYY')
        })
    }
    const handleSetMonth = () => {
        form.setFieldValue("startTime", dayjs(startTime).startOf('day'));
        form.setFieldValue("endTime", dayjs(startTime).endOf('month'));
        setDefaultValueDate({
            startTime: dayjs(startTime).startOf('day').format('DD/MM/YYYY'),
            endTime: dayjs(startTime).endOf('month').format('DD/MM/YYYY')
        })
    }
    useEffect(() => {
        const data = []
        for (let i = 0; i <= 50; i++) {
            data.push({
                1: "0123456789111",
                2: "25/12/2023-9:35",
                3: i % 2 === 0 ? "Thanh toán tiền mặt" : "Chuyển khoản ngân hàng",
                4: "1,340,000",
                status: i % 2 === 0 ? 1 : 2,

            })
        }

        setData(data)
    }, [])
    const columns = [
        ,
        {
            title: "Mã thẻ",
            dataIndex: "1",
            width: 130,
        },
        {
            title: "Mã hóa đơn",
            key: "index",
            width: 100,
            render: (text: string, row: any, index: number) => <span onClick={() => {

            }} className="text-[#0D72BB] underline cursor-pointer ">{index}1235</span>,
        },
        {
            title: "Thời gian",
            dataIndex: "2",
            width: 130,
        },
        {
            title: "Hình thức thanh toán",
            dataIndex: "3",
            width: 170,
            render: (text: string,) => <span className="text-left ">{text}</span>,
        },
        {
            title: "Số tiền(Vnd)",
            dataIndex: "4",
            width: 130,

        },
        {
            title: "Trạng thái thanh toán",
            dataIndex: "status",
            width: 130,

            render: (value: any) => <div className={` ${value == 1 ? "bg-[#E7CACA] text-[#B84545] " : "bg-[#67B100] text-[#fff] "} mx-auto rounded-[5px] flex justify-center items-center text-left w-[106px] h-[27px] `}>{value == 1 ? "Pending" : "Thanh công"}</div>,

        }
    ];
    console.log("defaultValueDate", defaultValueDate)
    return (
        <div>
            <div className="container">
                <div>
                    <div className="pb-6 border-b text-[32px] border-[#A3A3A3] ">
                        Thống kê doanh thu
                    </div>
                    <div className="py-6 flex justify-between">
                        <Form
                            form={form}

                            onFinish={onFinish}

                        >
                            <div className="flex gap-6 items-center ">
                                <div className="relative w-[307px]  ">
                                    <img className="absolute top-[8px] right-[8px] z-10 " src={search} alt="" />
                                    <Form.Item
                                        name="search"


                                    >
                                        <Input className="  pr-[40px]  h-[35px]  " placeholder="Tìm  kiếm với mọi thông tin" />

                                    </Form.Item>
                                </div>

                                <div className="flex gap-3">
                                    <Form.Item
                                        name="startTime"

                                        className="text-[16px] mb-0  w-[125px]   "

                                    >
                                        <CustomDatePicker value={defaultValueDate.startTime ? defaultValueDate.startTime : false} name="startTime" setState={setStartTime} form={form} placeholder="Từ" />
                                    </Form.Item>
                                    <div>
                                        -
                                    </div>
                                    <Form.Item
                                        name="endTime"

                                        className="text-[16px] mb-0   w-[125px]  "

                                    >
                                        <CustomDatePicker value={defaultValueDate.endTime ? defaultValueDate.endTime : false} name="endTime" form={form} placeholder="Đến" />
                                    </Form.Item>
                                    <div className="border border-[#0D72BB] rounded-[5px] h-[35px] w-[144px] grid grid-cols-2 ">
                                        <div onClick={handleSetDay} className="flex text-[#828282] cursor-pointer border-l rounded-[5px]  hover:bg-[#DFDFDF] justify-center items-center">
                                            Ngày
                                        </div>
                                        <div onClick={handleSetMonth} className="flex text-[#828282] cursor-pointer border-r rounded-[5px] hover:bg-[#DFDFDF] justify-center items-center">
                                            Tháng
                                        </div>
                                    </div>
                                    <Form.Item
                                        name="select"
                                        className="w-[150px]"

                                    >
                                        <CustomSelect name="select" form={form} />

                                    </Form.Item>
                                    <Form.Item className=" ml-4">
                                        <Button className=" " htmlType="submit" >Tìm kiếm </Button>
                                    </Form.Item>

                                </div>

                            </div>
                        </Form>
                        <Button width="135px" className="btn-download">
                            <svg className="mr-1 download-icon" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" >
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 0C8.8912 0 9.20833 0.317132 9.20833 0.708333V11.0399L12.2491 7.99913C12.5258 7.72251 12.9742 7.72251 13.2509 7.99913C13.5275 8.27575 13.5275 8.72425 13.2509 9.00087L8.5 13.7517L3.74913 9.00087C3.47251 8.72425 3.47251 8.27575 3.74913 7.99913C4.02575 7.72251 4.47425 7.72251 4.75087 7.99913L7.79167 11.0399V0.708333C7.79167 0.317132 8.1088 0 8.5 0ZM0.708333 11.3333C1.09953 11.3333 1.41667 11.6505 1.41667 12.0417V15.5833H15.5833V12.0417C15.5833 11.6505 15.9005 11.3333 16.2917 11.3333C16.6829 11.3333 17 11.6505 17 12.0417V15.5833C17 16.3657 16.3657 17 15.5833 17H1.41667C0.634263 17 0 16.3657 0 15.5833V12.0417C0 11.6505 0.317132 11.3333 0.708333 11.3333Z" />
                            </svg>
                            In hóa đơn
                        </Button>
                    </div>
                    <div className="flex gap-[32px] h-[60px] ">
                        <div className="w-[270px] flex gap-[20px] items-center pl-3 bg-[#fff] rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="33" viewBox="0 0 19 33" fill="none">
                                <path d="M8.44444 33V0H10.5556V33H8.44444ZM15.5501 9.9C15.3957 8.59375 14.7692 7.57969 13.6707 6.85781C12.5723 6.13594 11.2249 5.775 9.62873 5.775C8.46161 5.775 7.44038 5.96406 6.56504 6.34219C5.69828 6.72031 5.02033 7.24023 4.53117 7.90195C4.05059 8.56367 3.8103 9.31563 3.8103 10.1578C3.8103 10.8625 3.97764 11.4684 4.31233 11.9754C4.6556 12.4738 5.09327 12.8906 5.62534 13.2258C6.15741 13.5523 6.71522 13.823 7.29878 14.0379C7.88234 14.2441 8.4187 14.4117 8.90786 14.5406L11.5854 15.2625C12.2719 15.443 13.0357 15.6922 13.8767 16.0102C14.7263 16.3281 15.5373 16.7621 16.3096 17.3121C17.0906 17.8535 17.7342 18.5496 18.2405 19.4004C18.7468 20.2512 19 21.2953 19 22.5328C19 23.9594 18.6267 25.2484 17.8801 26.4C17.142 27.5516 16.0607 28.4668 14.6362 29.1457C13.2202 29.8246 11.4995 30.1641 9.47425 30.1641C7.58627 30.1641 5.95145 29.859 4.56978 29.2488C3.1967 28.6387 2.1154 27.7879 1.32588 26.6965C0.544941 25.6051 0.102981 24.3375 0 22.8938H3.29539C3.38121 23.8906 3.7159 24.7156 4.29946 25.3687C4.8916 26.0133 5.63821 26.4945 6.5393 26.8125C7.44896 27.1219 8.42728 27.2766 9.47425 27.2766C10.6929 27.2766 11.787 27.0789 12.7568 26.6836C13.7265 26.2797 14.4946 25.7211 15.061 25.0078C15.6274 24.2859 15.9106 23.4437 15.9106 22.4812C15.9106 21.6047 15.666 20.8914 15.1768 20.3414C14.6877 19.7914 14.044 19.3445 13.2459 19.0008C12.4478 18.657 11.5854 18.3563 10.6585 18.0984L7.41463 17.1703C5.35501 16.5773 3.72448 15.7309 2.52304 14.6309C1.32159 13.5309 0.720867 12.0914 0.720867 10.3125C0.720867 8.83437 1.11992 7.54531 1.91802 6.44531C2.72471 5.33672 3.80601 4.47734 5.16192 3.86719C6.52642 3.24844 8.04968 2.93906 9.73171 2.93906C11.4309 2.93906 12.9413 3.24414 14.2629 3.8543C15.5845 4.45586 16.6314 5.28086 17.4038 6.3293C18.1847 7.37774 18.5967 8.56797 18.6396 9.9H15.5501Z" fill="#B84545" />
                            </svg>
                            <ul>
                                <div className="text-[#B84545] text-[18px] ">100</div>
                                <span className="text-[18px]">Tiền cọc</span>
                            </ul>
                        </div>
                        <div className="w-[270px] flex gap-[20px] items-center pl-3 bg-[#fff] rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM1.62757 15C1.62757 22.3854 7.61461 28.3724 15 28.3724C22.3854 28.3724 28.3724 22.3854 28.3724 15C28.3724 7.61461 22.3854 1.62757 15 1.62757C7.61461 1.62757 1.62757 7.61461 1.62757 15Z" fill="#0D72BB" />
                                <path d="M8 15L22 15" stroke="#0D72BB" stroke-width="2" stroke-linecap="round" />
                                <path d="M15 22V8" stroke="#0D72BB" stroke-width="2" stroke-linecap="round" />
                            </svg>
                            <div>
                                <div className="text-[#0D72BB] text-[18px]">100</div>
                                <span className="text-[18px]">Doanh thu</span>
                            </div>
                        </div>
                        <div className="w-[270px] flex gap-[20px] items-center pl-3 bg-[#fff] rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="33" viewBox="0 0 19 33" fill="none">
                                <path d="M8.44444 33V0H10.5556V33H8.44444ZM15.5501 9.9C15.3957 8.59375 14.7692 7.57969 13.6707 6.85781C12.5723 6.13594 11.2249 5.775 9.62873 5.775C8.46161 5.775 7.44038 5.96406 6.56504 6.34219C5.69828 6.72031 5.02033 7.24023 4.53117 7.90195C4.05059 8.56367 3.8103 9.31563 3.8103 10.1578C3.8103 10.8625 3.97764 11.4684 4.31233 11.9754C4.6556 12.4738 5.09327 12.8906 5.62534 13.2258C6.15741 13.5523 6.71522 13.823 7.29878 14.0379C7.88234 14.2441 8.4187 14.4117 8.90786 14.5406L11.5854 15.2625C12.2719 15.443 13.0357 15.6922 13.8767 16.0102C14.7263 16.3281 15.5373 16.7621 16.3096 17.3121C17.0906 17.8535 17.7342 18.5496 18.2405 19.4004C18.7468 20.2512 19 21.2953 19 22.5328C19 23.9594 18.6267 25.2484 17.8801 26.4C17.142 27.5516 16.0607 28.4668 14.6362 29.1457C13.2202 29.8246 11.4995 30.1641 9.47425 30.1641C7.58627 30.1641 5.95145 29.859 4.56978 29.2488C3.1967 28.6387 2.1154 27.7879 1.32588 26.6965C0.544941 25.6051 0.102981 24.3375 0 22.8938H3.29539C3.38121 23.8906 3.7159 24.7156 4.29946 25.3687C4.8916 26.0133 5.63821 26.4945 6.5393 26.8125C7.44896 27.1219 8.42728 27.2766 9.47425 27.2766C10.6929 27.2766 11.787 27.0789 12.7568 26.6836C13.7265 26.2797 14.4946 25.7211 15.061 25.0078C15.6274 24.2859 15.9106 23.4437 15.9106 22.4812C15.9106 21.6047 15.666 20.8914 15.1768 20.3414C14.6877 19.7914 14.044 19.3445 13.2459 19.0008C12.4478 18.657 11.5854 18.3563 10.6585 18.0984L7.41463 17.1703C5.35501 16.5773 3.72448 15.7309 2.52304 14.6309C1.32159 13.5309 0.720867 12.0914 0.720867 10.3125C0.720867 8.83437 1.11992 7.54531 1.91802 6.44531C2.72471 5.33672 3.80601 4.47734 5.16192 3.86719C6.52642 3.24844 8.04968 2.93906 9.73171 2.93906C11.4309 2.93906 12.9413 3.24414 14.2629 3.8543C15.5845 4.45586 16.6314 5.28086 17.4038 6.3293C18.1847 7.37774 18.5967 8.56797 18.6396 9.9H15.5501Z" fill="#2D9712" />
                            </svg>
                            <div>
                                <div className="text-[#2D9712]  text-[18px]">100</div>
                                <span className="text-[18px]">Lợi nhuận</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 table-left    table-scroll table-style">
                        <TableCustomer
                            dataSource={data}
                            dataColumns={columns}
                            loading={loading}
                            scrollSize={380}
                            pagination={true}

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Thong_ke_doanh_thu