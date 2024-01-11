import { Select } from "antd";
import React from "react";
import iconSelect from "./../../../assets/icon/select.svg"
const CustomSelect = ({ form, name }: any) => {
    const handleChangeSelect = (value: any) => {
        form.setFieldsValue({
            [name]: value
        });
    }
    return (
        <Select
            onChange={handleChangeSelect}
            placeholder="Chọn loại xe"
            suffixIcon={
                <img src={iconSelect} alt=""></img>
            }
            style={{ width: "100%", display: "flex", }}
            options={[
                { value: '1', label: '1 tháng' },
                { value: '2', label: '2 tháng' },

            ]}
        />
    )
}
export default CustomSelect