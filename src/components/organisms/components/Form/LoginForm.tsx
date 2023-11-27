
import { Alert, Button, Form, Input } from "antd";
import { useForm } from "antd/lib/form/Form";
// import { signIn } from "next-auth/react";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../../apis/apis";
import { PHONE, TOKEN } from "../../../../configs/localStorage";
import { Notification } from "../../../../configs/notification";

interface ILoginFormValue {
    phonenb: string;
    pass: string;
}

const LoginForm = () => {
    const Navigate = useNavigate()
    const [form] = useForm<ILoginFormValue>();
    const [isLoading, setIsLoading] = useState(false);
    const [validationErrors, setValidationErrors] = useState("");

    const handleFinish = async (value: ILoginFormValue) => {
        const bodyLogin = new FormData();
        bodyLogin.append("phonenb", value.phonenb);
        bodyLogin.append("pass", value.pass);
        try {
            setValidationErrors("");
            setIsLoading(true);
            const response = await login(bodyLogin);
            if (response.data.status === 0) {
                setIsLoading(true);
                localStorage.setItem(TOKEN, response.data.message);
                localStorage.setItem(PHONE, response.data.phonenb);
                // Navigate("/");
                setIsLoading(false);
                Notification("success", "Đăng nhập thành công")
                setTimeout(() => {
                    window.location.href = "/"
                }, 2000);
            } else {
                setIsLoading(false);
                setValidationErrors(response.data.message);
            }
        } catch (error) {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Form<ILoginFormValue> form={form} layout="vertical" onFinish={handleFinish}>
                <div className="mb-3">
                    {Object.keys(validationErrors).length != 0 && <Alert message={validationErrors} type="error" />}
                </div>
                <Form.Item label="Enter Phone Number" name="phonenb" rules={[{ message: "Please enter your phone number" }]}>
                    <Input size="large" placeholder="Phone Number" />
                </Form.Item>

                <Form.Item label="Enter Your Password" name="pass" rules={[{ message: "Please enter a password" }]}>
                    <Input.Password placeholder="Password" type="password" size="large" />
                </Form.Item>
                <Link to="/forgot-password" className="flex  justify-end	mt-2 text-[#4285F4]">Forgot Password</Link>
                <Button
                    htmlType="submit"
                    className="!h-12	my-0	mx-auto	!py-4	!flex justify-center items-center w-2/5 !border-inherit !bg-[#349E49F0] !text-base	!rounded-xl !text-white font-medium	"
                    loading={isLoading}
                >
                    Sign in
                </Button>
            </Form>
        </>
    );
};

export default React.memo(LoginForm);
