import React, { useState } from "react";
import { Modal, Form, Input, Button } from 'antd';
import { token } from "../../../../configs/localStorage";
import { changePassword } from "../../../../apis/apis";
import { Notification } from "../../../../configs/notification";
const ModalChangePassword = ({ openModalChangePassword, setOpenModalChangePassword }: any) => {
    const [loading, setLoading] = useState(false)
    const onFinish = (value: any) => {
        const formData = new FormData();
        formData.append("newpass", `${value.password}`);
        formData.append("token", `${token}`);
        setLoading(true)
        changePassword(formData)
            .then((res) => {
                Notification("success", res?.data?.message)
                setOpenModalChangePassword(false)
            }).catch((e) => {
                console.log("e", e)
            }).finally(() => {
                setLoading(false)
            })
    }
    return (
        <Modal

            centered
            open={openModalChangePassword}
            onOk={() => setOpenModalChangePassword(false)}
            onCancel={() => setOpenModalChangePassword(false)}
            width={530}
            footer={false}

        >
            <div className="text-center text-[24px]  ">Change Password</div>
            <div className="my-[35px] px-[50px] ">
                <Form
                    name="basic"
                    className="Change_Password"
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}

                >
                    <Form.Item

                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                        hasFeedback
                    >
                        <Input placeholder="New Password" />
                    </Form.Item>

                    <Form.Item
                        name="confirm"

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
                        <Input placeholder="Reconfirm Password" />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button loading={loading} className="bg-[#009A34] text-[#fff] w-[140px] h-[45px]  block " htmlType="submit">
                            Confirm
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    )
}
export default ModalChangePassword