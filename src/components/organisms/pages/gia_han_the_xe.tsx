import { Button, Radio, Select, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDebounce } from 'react-use';
import iconSelect from "./../../../assets/icon/select.svg"
import copyIcon from "./../../../assets/icon/copy.svg"
import momo from "./../../../assets/img/momo.png"
import nganhang from "./../../../assets/img/nganhang.png"
import tienmat from "./../../../assets/img/tienmat.png"
import warning from "./../../../assets/img/warning.png"
import qr from "./../../../assets/img/qr.png"
import copy from 'clipboard-copy';
import { token } from "../../../configs/localStorage";
import { useNavigate } from "react-router-dom";
import { routePortalAdmin, routePortalsAdmin } from "../../../routes/PortalRouteAdmin";
const VehicleCardRenewal = () => {

    const [valueSearch, setValueSearch] = useState<any>();
    const [valueSelect, setValueSelect] = useState<any>();
    const [dataSearch, setDataSearch] = useState<any>([]);
    const [debouncedValue, setDebouncedValue] = useState<string>('');
    const [valueRadio, setValueRadio] = useState(1)
    const navigate = useNavigate()
    const handleSearch = (newValue: string) => {
        console.log("newValue", newValue)
        setValueSearch(newValue);
    };
    const handleChange = (value: any) => {
        setValueSelect(value)
    }
    useDebounce(
        () => {
            setDebouncedValue(valueSearch);
        },
        1000, // Khoảng thời gian debounce là 1 giây
        [valueSearch] // Thay đổi giá trị debounce khi inputValue thay đổi
    );
    useEffect(() => {
        console.log("value", valueSearch)
    }, [debouncedValue]);
    const options: any = [
        {
            lable: "c",
            value: "C"
        }
    ];
    const onChangeRadio = (e: any) => {
        console.log('radio checked', e.target.value);
        setValueRadio(e.target.value);
    };
    const handleCopyClick = (value: any) => {
        copy(value);
        message.success("Sao chép thành công")
    };
    useEffect(() => {
        if (token) {
            navigate(routePortalsAdmin.QUAN_LY_THE_XE)
        }
    }, [])
    return (
        <div className="">
            <div className="container">
                <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8 min-h-[100vh] pb-10">
                    <div className="max-md:text-center">
                        <Select
                            showSearch
                            value={valueSelect}
                            placeholder="Tìm kiếm với mọi thông tin"
                            // style={{ width: '370px', borderRadius: "6px" }}

                            onSearch={handleSearch}
                            onChange={handleChange}
                            className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] search-nv  max-sm:w-full sm:min-w-[375px] rounded-[6px] "
                            options={options}

                        />

                        <div className="mt-5 ">
                            <h3 className="text-left">
                                Thông tin người dùng
                            </h3>
                            <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#F5FCFF] lg:border-[#0D72BB] lg:border rounded-[10px] p-4 md:p-8" >
                                <ul className="  lg:gap-y-6  grid-cols-1 grid lg:grid-cols-2">
                                    <li className="flex gap-2 max-lg:border-b max-lg:border-[#DFDFDF] py-3 max-lg:justify-between ">
                                        <span> Họ và tên : </span>
                                        <span>Nguyễn Xuân Biên</span>
                                    </li>
                                    <li className="flex gap-2 max-lg:border-b max-lg:border-[#DFDFDF] py-3 max-lg:justify-between ">
                                        <span> Mã thẻ:  </span>
                                        <span>12334554441</span>
                                    </li>
                                    <li className="flex gap-2 max-lg:border-b max-lg:border-[#DFDFDF] py-3 max-lg:justify-between ">
                                        <span> Số điện thoại:</span>
                                        <span>0123456789</span>
                                    </li>
                                    <li className="flex gap-2 max-lg:border-b max-lg:border-[#DFDFDF] py-3 max-lg:justify-between ">
                                        <span> Hạn dùng:</span>
                                        <span>01/10/2023-30/11/2023</span>
                                    </li>
                                    <li className="flex gap-2 max-lg:border-b  max-lg:border-[#DFDFDF] py-3 max-lg:justify-between ">
                                        <span> Biển số xe: </span>
                                        <span>60A17312</span>
                                    </li>
                                    <li className="flex gap-2  py-3 max-lg:justify-between ">
                                        <span>Đặc điểm xe : </span>
                                        <span>Camry 2.5 nâu</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-5 ">
                            <h3 className="text-left">
                                Gia hạn vé tháng
                            </h3>
                            <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#F5FCFF] lg:border-[#0D72BB] lg:border rounded-[10px] p-4 md:p-8" >
                                <ul className="  lg:gap-y-6  grid-cols-1 grid lg:grid-cols-2">
                                    <li className="flex gap-2 max-lg:border-b max-lg:border-[#DFDFDF] py-3 max-lg:justify-between ">
                                        <span> Mã thẻ : </span>
                                        <span>12334554441</span>
                                    </li>
                                    <li className="flex gap-2 max-lg:border-b max-lg:border-[#DFDFDF] py-3 max-lg:justify-between ">
                                        <span>Ngày đăng ký :  </span>
                                        <span>01/11/2023</span>
                                    </li>
                                    <li className="flex gap-2 max-lg:border-b max-lg:border-[#DFDFDF] py-3 max-lg:justify-between ">
                                        <span>Biển số xe :</span>
                                        <span>60A17312</span>
                                    </li>
                                    <li className="flex gap-2 max-lg:border-b max-lg:border-[#DFDFDF] py-3 max-lg:justify-between ">
                                        <span> Ngày hết hạn: </span>
                                        <span> 01/12/2023</span>
                                    </li>

                                    <li className="flex gap-2 max-lg:border-b max-lg:border-[#DFDFDF] py-3 max-lg:justify-between ">
                                        <span>Giá tiền(VND) : </span>
                                        <span> 1,300,000 </span>
                                    </li>
                                    <li className="flex gap-2  py-3 max-lg:justify-between  select-month">
                                        <span className="lg:hidden">Thời gian gia hạn</span>
                                        <Select
                                            placeholder="Thời gian gia hạn"
                                            suffixIcon={
                                                <img src={iconSelect} alt=""></img>
                                            }
                                            popupClassName="select-month-dropdown"
                                            style={{ width: '180px' }}
                                            onChange={handleChange}
                                            options={[
                                                { value: '1', label: '1 tháng' },
                                                { value: '2', label: '2 tháng' },
                                                { value: '3', label: '3 tháng' },
                                                { value: '4', label: '4 tháng' },
                                                { value: '5', label: '5 tháng' },
                                                { value: '6', label: '6 tháng' },
                                                { value: '7', label: '7 tháng' },
                                                { value: '8', label: '8 tháng' },
                                                { value: '9', label: '9 tháng' },
                                                { value: '10', label: '10 tháng' },
                                                { value: '11', label: '11 tháng' },
                                                { value: '12', label: '12 tháng' },

                                            ]}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-5 ">
                            <h3>
                                Phương thức thanh toán
                            </h3>
                            <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] lg:bg-[#F5FCFF] lg:border-[#0D72BB] border rounded-[10px] py-1 md:p-8" >

                                <Radio.Group className=" gap-y-4 grid grid-cols-1" onChange={onChangeRadio} value={valueRadio}>
                                    <Radio className="max-md:px-3 py-2 flex items-center" value={1}><div className="pl-5 flex items-center gap-2 "><img src={momo} alt="" /><span>Ví Momo</span></div></Radio>
                                    <Radio className="max-md:px-3 py-2 flex items-center" value={2}><div className="pl-5 flex items-center gap-2 "><img className="h-[29px]" src={nganhang} alt="" /><span>Chuyển khoản ngân hàng</span></div></Radio>
                                    <Radio className="max-md:px-3 py-2 flex items-center" value={3}><div className="pl-5 flex items-center gap-2 "><img className="h-[29px]" src={tienmat} alt="" /><span>Thanh toán bằng tiền mặt</span></div></Radio>

                                </Radio.Group>

                            </div>
                        </div>
                        <Button className="w-[220px]   h-[35px]  text-[#fff] mt-8 bg-[#0D72BB] rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  ">Gia hạn</Button>
                    </div>
                    <div className=" p-1 sm:p-8 lg:border bg-[#F5FCFF] lg:border-[#0D72BB] rounded-[5px] ">
                        <div className="bg-[#F4F1E0] rounded-[10px] flex gap-2 py-2 px-4">
                            <div className="flex min-w-[48px] h-[48px] justify-center items-center shadow-md rounded-[50%] ">
                                <img className="w-[25px]" src={warning} alt="" />
                            </div>
                            <span className="text-[#B39914]">
                                Quý khách vui lòng không tắt trình duyệt cho đến khi nhận được kết quả giao dịch trên Website. Xin cảm ơn!
                            </span>
                        </div>

                        <div className="mt-5">
                            <h4 className=" text-center max-w-[408px] mx-auto mb-[30px] ">
                                Quét mã qua ứng dụng Ngân Hàng/
                                Ví điện tử
                            </h4>
                            <div className="text-center">
                                <img className="w-[200px] m-auto" src={qr} alt="" />
                                <h4 className="mt-2 font-bold text-[20px]">Nguyễn Xuân Biên</h4>
                                <span className="flex mt-3 justify-center">Tài khoản <span className="text-[#2A83C3] flex">1012618550 <img src={copyIcon} alt="" /></span></span>
                                <span>
                                    Vietinbank CN HA NAM - PGD HA Noi
                                </span>
                            </div>
                        </div>
                        <div className="  max-md:flex-col-reverse flex  gap-[30px] my-4 md:items-center justify-between ">
                            <div className="border-b-2 pb-4 border-[#A3A3A3] ">
                                <h4>
                                    Thông tin hóa đơn
                                </h4>
                            </div>
                            <div className="flex gap-[18px] items-center max-md:justify-end">
                                <span>
                                    Giao dịch hết hạn sau
                                </span>
                                <div className="flex gap-2 items-center">
                                    <div className=" rounded-[5px] bg-[#0D72BB] text-[#fff] w-[30px] h-[30px] flex items-center justify-center ">
                                        10
                                    </div>
                                    :
                                    <div className=" rounded-[5px] bg-[#0D72BB] text-[#fff] w-[30px] h-[30px] flex items-center justify-center ">
                                        00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="grid grid-cols-2 gap-y-5" >
                            <li>
                                <div>Số tiền thanh toán</div>
                                <div className="text-[20px] mt-1 text-[#2A83C3] ">1,300,000 Vnd</div>
                            </li>
                            <li>
                                <div>Phí giao dịch</div>
                                <div className="mt-2">0 Vnd</div>
                            </li>
                            <li>
                                <div>Mã hóa đơn </div>
                                <div className="mt-2">545155dsdhsx</div>
                            </li>

                            <li>
                                <div>Nhà cung cấp</div>
                                <div className="mt-2">BÃI ĐỖ XE TỰ ĐỘNG HÀ NỘI</div>
                            </li>

                        </ul>
                        <button className="px-4 py-2 mt-4 bg-[#D7D7D7]  rounded-[5px]  ">Hủy thanh toán</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VehicleCardRenewal