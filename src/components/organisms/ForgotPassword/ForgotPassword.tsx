import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { OTP, changePassword, getToken } from '../../../apis/apis';
import { phoneNumber } from '../../../configs/localStorage';
import { Notification } from '../../../configs/notification';
import { Link, useNavigate } from 'react-router-dom';
const ForgotPassword = () => {
    const [form] = Form.useForm();
    const [clientReady, setClientReady] = useState<boolean>(false);
    const [loadingOTP, setLoadingOTP] = useState<boolean>(false)
    const [valueInputOTP, setValueInputOTP] = useState<any>()
    useEffect(() => {
        setClientReady(true);
    }, []);
    const Navigate = useNavigate()
    const onFinish = async (values: any) => {
        console.log("values", values)

        const bodyGetToken = new FormData();
        bodyGetToken.append("otp", values.OTP);
        bodyGetToken.append("phonenb", values.phonenb);
        try {
            const dataGetToken = await getToken(bodyGetToken)
            const confirm = new FormData();
            if (dataGetToken?.data?.status === 1) {
                Notification("error", dataGetToken?.data?.message)
            }
            confirm.append("token", dataGetToken?.data?.message);
            confirm.append("newpass", values.password);
            const rlPassword = await changePassword(confirm)
            if (rlPassword?.data?.status === 0) {
                Notification("success", rlPassword?.data?.message)
                setTimeout(() => {
                    Navigate("/login")
                }, 2000);
            } else {
                Notification("error", rlPassword?.data?.message)
            }

        } catch (e) {
            console.log("e", e)
        }
    };
    const sendOTP = () => {
        const bodyOTP = new FormData();
        bodyOTP.append("phonenb", valueInputOTP);

        setLoadingOTP(true)
        OTP(bodyOTP)
            .then((res) => {
                console.log("res", res)
                if (res?.data?.status == 1) {
                    Notification("error", res?.data?.message)
                }
                if (res?.data?.status == 0) {
                    Notification("success", res?.data?.message)
                }
            })
            .catch((e) => {
                console.log("e", e)
            })
            .finally(() => {
                setLoadingOTP(false)
            }
            )
    }
    return (
        <div>
            <Form className='px-[30px]' form={form} name="horizontal_login" layout="vertical" onFinish={onFinish}>
                <Form.Item
                    label={<div>Enter Phone Number</div>}
                    name="phonenb"
                    rules={[{ required: true, message: 'Please input your Phone!' }]}

                >
                    <div className='flex gap-5'>
                        <Input type='number' onChange={(e) => setValueInputOTP(e.target.value)} placeholder="Phone Number" /> <Button loading={loadingOTP} className='bg-[#C7FFD0] rounded-[5px] min-w-[90px] h-[40px] ' onClick={sendOTP}>Send OTP </Button>
                    </div>
                </Form.Item>
                <Form.Item
                    label={<div>Enter OTP </div>}
                    name="OTP"
                    rules={[{ required: true, message: 'Please input your OTP!' }]}
                >

                    <Input className='h-[40px] ' placeholder="OTP" />

                </Form.Item>
                <Form.Item
                    label={<div>Enter New Password </div>}
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    hasFeedback
                >
                    <Input.Password className='h-[40px] ' placeholder="New Password" />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label={<div>Reconfirm Password </div>}
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The new password that you entered do not match!'));
                            },
                        }),
                    ]}

                >
                    <Input.Password className='h-[40px] ' placeholder="Reconfirm Password" />
                </Form.Item>
                <Link to="/login" className="flex  justify-end	mt-2 text-[#4285F4]">Forgot Password</Link>
                <Form.Item shouldUpdate className='text-center mt-10'>
                    {() => (
                        <Button
                            className='w-[240px] h-[50px] px-[20px] bg-[rgba(52,158,73,0.94)] shadow-[0px_4px_19px_0px_rgba(119,147,65,0.30)] text-[#fff] rounded-[10px]  '
                            htmlType="submit"
                            disabled={
                                !clientReady ||
                                !form.isFieldsTouched(true) ||
                                !!form.getFieldsError().filter(({ errors }) => errors.length).length
                            }
                        >
                            Confirm
                        </Button>
                    )}
                </Form.Item>
            </Form>
        </div>
    )
}
export default ForgotPassword