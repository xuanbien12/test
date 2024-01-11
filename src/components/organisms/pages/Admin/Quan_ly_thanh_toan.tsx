import { Form, Input, Modal } from "antd";
import React, { useEffect, useState, useRef } from "react";
import html2canvas from 'html2canvas';
import search from "./../../../../assets/icon/search.svg";
import thoatra from "./../../../../assets/icon/thoatra.svg";
import taive from "./../../../../assets/icon/taive.svg";
import qr from "./../../../../assets/img/qr.png";
import CustomDatePicker from "../../components/CustomDatePicker";
import Button from "../../components/Button";
import TableCustomer from "../../components/table/tableCustomer";
import IconTable from "../../components/IconTable";
import { ExclamationCircleFilled } from '@ant-design/icons';
const Quan_ly_thanh_toan = () => {
    const { confirm } = Modal;
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(15)
    const [totalElement, setTotalElement] = useState<number>()
    const [detailPayment, setDetailPayment] = useState({})
    const [isDetailPayment, setIsDetailPayment] = useState(false)

    const [form] = Form.useForm()
    const onChangeDatePicker = (dates: any, dateStrings: any, name: any) => {
        console.log(dates)
        console.log(dateStrings)
        console.log("name", name)
    }
    const onFinish = (value: any) => {
        console.log("value", value)
        console.log(value['startTime'].format('DD/MM/YYYY'))
        console.log(value['endTime'].format('DD/MM/YYYY'))
    }
    const handleConfirmDelete = () => {

    }

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
    const columns = [
        {
            title: "Mã hóa đơn",
            key: "index",
            width: 100,
            render: (text: string, row: any, index: number) => <span onClick={() => {
                setDetailPayment(row)
                setIsDetailPayment(true)
            }} className="text-[#0D72BB] underline cursor-pointer ">{index}1235</span>,
        },
        {
            title: "Mã thẻ",
            dataIndex: "1",
            width: 130,
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

        },
        {
            align: "center",
            dataIndex: "1",
            width: 80,
            render: (id: any, row: any) => <div className="flex gap-3 justify-center items-center">
                {
                    row.status === 1 ?
                        <div className="bg-[#2D9712] rounded-[5px] w-[25px] h-[25px] flex justify-center items-center cursor-pointer  ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                <path d="M1 7.25L6.5 15.75L16 1.25" stroke="white" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </div>
                        :
                        <div className="bg-[#ABABAB] rounded-[5px] w-[25px] h-[25px] flex justify-center items-center cursor-pointer " >
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5389 1.67887C14.8278 1.38208 14.8208 0.907916 14.5232 0.619788C14.2257 0.33166 13.7502 0.338682 13.4612 0.635471L7.58018 6.67618L1.52324 0.811683C1.22565 0.523555 0.750178 0.530576 0.461233 0.827365C0.172288 1.12415 0.179291 1.59832 0.476873 1.88645L6.53382 7.75095L1.11066 13.3213C0.82172 13.6181 0.828722 14.0923 1.1263 14.3804C1.42389 14.6685 1.89936 14.6615 2.18831 14.3647L7.61146 8.79435L13.1977 14.2031C13.4953 14.4912 13.9707 14.4842 14.2597 14.1874C14.5486 13.8906 14.5416 13.4164 14.244 13.1283L8.65782 7.71958L14.5389 1.67887Z" fill="#212121" />
                            </svg>
                        </div>
                }
                <IconTable onClick={showDeleteConfirm} type="delete" />
            </div>
        },
    ];
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
    const contentRef = useRef(null);

    const handleConvert = () => {
        const elementsToExclude: any = document.querySelector('.btn-download');
        elementsToExclude.style.display = 'none';
        if (contentRef.current) {
            html2canvas(contentRef.current).then((canvas) => {

                const imgData = canvas.toDataURL('image/jpg');
                const link = document.createElement('a');
                link.href = imgData;
                link.download = 'hoa_don.jpg';
                link.click();
            });
            elementsToExclude.style.display = 'flex';
        }
    };
    return (
        <div >
            <div className="container">
                {
                    isDetailPayment
                        ?
                        <div ref={contentRef} className="relative flex justify-center items-center ">
                            <img onClick={() => setIsDetailPayment(false)} className="absolute top-4 left-4 w-[30px] cursor-pointer" src={thoatra} alt="" />
                            <div className="w-[85%]  pt-[50px] pb-[200px]">
                                <div className="flex justify-between">
                                    <h2 className="w-full text-center">Hóa đơn thanh toán</h2>
                                    <Button onClick={handleConvert} width="135px" className="btn-download">
                                        <svg className="mr-1 download-icon" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" >
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 0C8.8912 0 9.20833 0.317132 9.20833 0.708333V11.0399L12.2491 7.99913C12.5258 7.72251 12.9742 7.72251 13.2509 7.99913C13.5275 8.27575 13.5275 8.72425 13.2509 9.00087L8.5 13.7517L3.74913 9.00087C3.47251 8.72425 3.47251 8.27575 3.74913 7.99913C4.02575 7.72251 4.47425 7.72251 4.75087 7.99913L7.79167 11.0399V0.708333C7.79167 0.317132 8.1088 0 8.5 0ZM0.708333 11.3333C1.09953 11.3333 1.41667 11.6505 1.41667 12.0417V15.5833H15.5833V12.0417C15.5833 11.6505 15.9005 11.3333 16.2917 11.3333C16.6829 11.3333 17 11.6505 17 12.0417V15.5833C17 16.3657 16.3657 17 15.5833 17H1.41667C0.634263 17 0 16.3657 0 15.5833V12.0417C0 11.6505 0.317132 11.3333 0.708333 11.3333Z" />
                                        </svg>
                                        In hóa đơn</Button>
                                </div>
                                <div className="grid grid-cols-2 mt-[60px]">
                                    <div>
                                        <div className="text-[22px] mb-6 font-bold ">
                                            Mã hóa đơn: <span className="text-[#0D72BB] text-[22px] ">546145</span>
                                        </div>
                                        <ul className="flex flex-col gap-2">
                                            <li className="text-[18px] ">
                                                Mã thẻ: 01234577785
                                            </li>
                                            <li className="text-[18px]">
                                                Người dùng: Nguyễn Văn Anh
                                            </li>
                                            <li className="text-[18px]">
                                                Thời gian gia hạn: 8 tháng
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="text-[22px] font-bold ">Vui lòng dùng ứng dụng ngân hàng quét mã:</div>
                                        <div className="flex gap-3 mt-3">

                                            <img className="w-[200px] m-auto" src={qr} alt="" />
                                            <ul className="w-full flex flex-col gap-1">
                                                <li className="text-[18px]">
                                                    Ngân hàng: Tiên Phong Bank
                                                </li>
                                                <li className="text-[18px]">
                                                    Tên: Nguyễn Duy Đạt
                                                </li>
                                                <li className="text-[18px]">
                                                    Nội dung: Gia hạn thẻ xe 0123545
                                                </li>
                                                <li className="text-[18px]">
                                                    Số tiền : 1.300.000 Vnđ
                                                </li>
                                                <li className="text-[#B84545] font-bold text-[18px]">
                                                    Chú ý : Không sửa giá tiền và nội dung chuyển tiền
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="pb-2 border-b-4 border-[#DFDFDF] text-[20px]">
                                        Trạng thái: <span className=" font-bold text-[#B84545] text-[20px] ">Chưa thanh toán</span>
                                    </div>
                                    <div className="mt-8 mx-10 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">

                                        <div className="grid grid-cols-4  h-[53px] bg-[#E6E6E6] " >
                                            <div className="flex  justify-center items-center text-[20px] font-bold text-[#4A4A4A] ">Loại hóa đơn</div>
                                            <div className="flex  justify-center items-center text-[20px] font-bold text-[#4A4A4A] "> Thời gian gia hạn</div>
                                            <div className="flex  justify-center items-center text-[20px] font-bold text-[#4A4A4A] ">Đơn giá </div>
                                            <div className="flex  justify-center items-center text-[20px] font-bold text-[#4A4A4A] ">Thành tiền</div>
                                        </div>
                                        <div className="grid grid-cols-4  h-[53px] bg-[#F9F9F9] " >
                                            <div className="flex  justify-center items-center text-[20px] ">Gia hạn thẻ xe</div>
                                            <div className="flex  justify-center items-center text-[20px] "> 8 tháng</div>
                                            <div className="flex  justify-center items-center text-[20px] ">1.300.000</div>
                                            <div className="flex  justify-center items-center text-[20px] ">1.300.00</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end mt-10 ">
                                        <ul className=" w-[40%] flex flex-col gap-1">
                                            <li className=" flex justify-between">
                                                <span className="text-[18px]">Tổng tiền trước thuế:</span> <span className="text-[18px]">1.300.000 Vnđ</span>

                                            </li>
                                            <li className=" flex justify-between">
                                                <span className="text-[18px]">Thuế : </span> <span className="text-[18px]">0 %</span>
                                            </li>
                                            <li className=" flex justify-between">
                                                <span className="text-[18px]"> Thành tiền :</span> <span className="text-[18px]">1.300.000 Vnđ</span>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="mt-[50px] grid grid-cols-2">
                                        <div className="text-[18px] text-center">
                                            Ký tên người thu
                                        </div>
                                        <div className="text-[18px] text-center">
                                            Ký tên ( người nộp)
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        :
                        <div>
                            <div className="pb-6 border-b text-[32px] border-[#A3A3A3] ">
                                Quản lý thanh toán
                            </div>
                            <div className="py-6">
                                <Form
                                    form={form}
                                    layout="inline"
                                    onFinish={onFinish}

                                >
                                    <div className="flex gap-[80px] ">
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
                                                <CustomDatePicker name="startTime" form={form} placeholder="Từ" />
                                            </Form.Item>
                                            <div>
                                                -
                                            </div>
                                            <Form.Item
                                                name="endTime"

                                                className="text-[16px] mb-0   w-[125px]  "

                                            >
                                                <CustomDatePicker name="endTime" form={form} placeholder="Đến" />
                                            </Form.Item>
                                            <Form.Item className=" ml-4">
                                                <Button className=" " htmlType="submit" >Tìm kiếm </Button>
                                            </Form.Item>

                                        </div>
                                    </div>
                                </Form>
                            </div>

                            <div className="table-left">
                                <TableCustomer
                                    dataSource={data}
                                    dataColumns={columns}

                                    loading={loading}
                                    setSize={setSize}
                                    setPage={setPage}
                                    pageSize={size}
                                    total={totalElement}

                                />
                            </div>
                        </div>
                }

            </div>
        </div>
    )
}
export default Quan_ly_thanh_toan