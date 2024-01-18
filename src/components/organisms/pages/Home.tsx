
import banner from "./../../../assets/img/home.png"
import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Input } from 'antd';
import { generateRandomString } from "../../../configs/common";

const Home = () => {
    const [form] = Form.useForm();
    const [randomCapcha, setRandomCapcha] = useState("")
    const [captchaError, setCaptchaError] = useState(false);
    const onFinish = async (value: any) => {
        console.log("value", value)
        if (value.Captcha === randomCapcha) {
            setCaptchaError(false)
        } else {
            setCaptchaError(true)
        }

    }

    console.log("captchaError", captchaError)
    useEffect(() => {
        setRandomCapcha(generateRandomString())
    }, [])
    const resetRandom = () => {
        setRandomCapcha(generateRandomString())
    }
    return (
        <div>
            <div className="container">
                <div className="flex  gap-[80px] items-center">
                    <div className="w-[60%] max-lg:hidden">
                        <img src={banner} alt="" />
                    </div>
                    <div className=" w-[90%] m-auto lg:w-[30%] ">
                        <Form
                            form={form}
                            name="basic"
                            onFinish={onFinish}
                            layout="vertical"
                            className="bg-[#F5FCFF] py-4 px-8 border border-[#0D72BB] rounded-[5px] "
                        >
                            <Form.Item
                                label="Số điện thoại"
                                name="phone"
                                className="text-[16px] input-number"
                                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại !' }]}
                            >
                                <Input className="h-[50px] text-[#646464] " placeholder="Vd: 0912 345 666 " />
                            </Form.Item>

                            <Form.Item
                                label="Họ và tên"
                                name="password"
                                className="text-[16px] input-number"
                                rules={[{ required: true, message: 'Vui lòng nhập nhập họ và tên !' }]}
                            >
                                <Input className="h-[50px] text-[#646464]  " placeholder="Vd: Nguyen Van Anh" />
                            </Form.Item>
                            <Form.Item
                                label="Biển số xe"
                                name="password"
                                className="text-[16px] input-number"
                                rules={[{ required: true, message: 'Vui lòng nhập Biển số xe!' }]}
                            >
                                <Input className="h-[50px] text-[#646464]  " placeholder="Vd: 60A12344 " />
                            </Form.Item>
                            <Form.Item
                                label="Mô tả loại xe"
                                name="password"
                                className="text-[16px] input-number"
                                rules={[{ required: true, message: 'Vui lòng nhập Mô tả loại xe!' }]}
                            >
                                <Input className="h-[50px] text-[#646464]  " placeholder="Vd: Camry 2.5G nâu" />
                            </Form.Item>
                            <Form.Item
                                label="Captcha"
                                className="text-[16px]   "
                                name="Captcha"
                                rules={[{ required: true, message: 'Vui lòng nhập mã captcha !' }]}
                            >
                                <div className="flex gap-[30px]" >

                                    <div className="w-full">
                                        <div
                                            className="text-[16px] w-full capcha border-b border-[#0D72BB] "
                                        >
                                            <Input className="h-[35px] border-none text-[#646464]  " placeholder="Nhập kí tự " />



                                        </div>
                                        {
                                            captchaError && <div className="text-[14px] text-red-500 ">
                                                Captcha không trùng khớp
                                            </div>
                                        }
                                    </div>

                                    <div className="flex h-[35px] gap-2">

                                        <div className="flex min-w-[100px] items-center justify-center w-full  rounded-[5px] border border-[#0D72BB] bg-[#DFDFDF] ">
                                            {
                                                randomCapcha
                                            }

                                        </div>

                                        <div onClick={resetRandom} className="flex cursor-pointer min-w-[35px] justify-center items-center rounded-[5px] bg-[#0D72BB]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="23" viewBox="0 0 19 23" fill="none">
                                                <path d="M9.5 3.13636V0L4.75 4.18182L9.5 8.36364V5.22727C13.4306 5.22727 16.625 8.03955 16.625 11.5C16.625 12.5559 16.3281 13.5595 15.7937 14.4273L17.5275 15.9536C18.4538 14.6677 19 13.1414 19 11.5C19 6.87909 14.7487 3.13636 9.5 3.13636ZM9.5 17.7727C5.56938 17.7727 2.375 14.9605 2.375 11.5C2.375 10.4441 2.67187 9.44045 3.20625 8.57273L1.4725 7.04636C0.54625 8.33227 0 9.85864 0 11.5C0 16.1209 4.25125 19.8636 9.5 19.8636V23L14.25 18.8182L9.5 14.6364V17.7727Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>

                                </div>
                            </Form.Item>
                            <Form.Item className="flex justify-center mt-5" >
                                <Button className="bg-[#0D72BB] h-[53px] text-[16px] rounded-[10px]  text-[#fff] w-[250px] " htmlType="submit">
                                    Đăng ký
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home