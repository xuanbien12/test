import React from "react";
import "moment/locale/vi";
import moment from 'moment';
import locale from 'antd/es/date-picker/locale/vi_VN';
import 'dayjs/locale/vi';
import dayjs from 'dayjs';
import { DatePicker, Modal } from "antd";
import customParseFormat from 'dayjs/plugin/customParseFormat';

const CustomDatePicker = ({ placeholder, defaultValue, form, name, onChange, setState, value }: any) => {

    const dateFormat = 'DD/MM/YYYY';
    // const dateFormat = 'YYYY/MM/DD';
    dayjs.extend(customParseFormat);
    console.log("defaultValue", defaultValue)
    moment.locale('vi');
    const iConDatePicker = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0.958374C8.05228 0.958374 8.5 1.38743 8.5 1.91671V2.87504H15.5V1.91671C15.5 1.38743 15.9477 0.958374 16.5 0.958374C17.0523 0.958374 17.5 1.38743 17.5 1.91671V2.8987C20.0267 3.13911 22 5.18206 22 7.66671V16.2917C22 18.9381 19.7614 21.0834 17 21.0834H7C4.23858 21.0834 2 18.9381 2 16.2917V7.66671C2 5.18206 3.97334 3.13911 6.5 2.8987V1.91671C6.5 1.38743 6.94772 0.958374 7.5 0.958374ZM4.17071 6.70837H19.8293C19.4175 5.59173 18.3062 4.79171 17 4.79171H7C5.69378 4.79171 4.58254 5.59173 4.17071 6.70837ZM20 8.62504H4V16.2917C4 17.8795 5.34315 19.1667 7 19.1667H17C18.6569 19.1667 20 17.8795 20 16.2917V8.62504ZM6 11.0209C6 10.4916 6.44772 10.0625 7 10.0625H17C17.5523 10.0625 18 10.4916 18 11.0209C18 11.5501 17.5523 11.9792 17 11.9792H7C6.44772 11.9792 6 11.5501 6 11.0209ZM6 13.8959C6 13.3666 6.44772 12.9375 7 12.9375H17C17.5523 12.9375 18 13.3666 18 13.8959C18 14.4251 17.5523 14.8542 17 14.8542H7C6.44772 14.8542 6 14.4251 6 13.8959ZM6 16.7709C6 16.2416 6.44772 15.8125 7 15.8125H17C17.5523 15.8125 18 16.2416 18 16.7709C18 17.3001 17.5523 17.7292 17 17.7292H7C6.44772 17.7292 6 17.3001 6 16.7709Z" fill="#0D72BB" />
    </svg>
    const handleDateChange = (date: any, dateString: any) => {
        const formattedDate = dayjs(dateString, dateFormat);
        form.setFieldsValue({
            [name]: formattedDate
        });
        if (setState) {
            setState(formattedDate.format('MM'))
        }
    };
    return (

        <DatePicker
            onChange={name ? handleDateChange : onChange}
            locale={locale}
            format={dateFormat}
            value={value ? value : ""}
            suffixIcon={iConDatePicker}
            defaultValue={defaultValue ? dayjs(defaultValue, dateFormat) : undefined}
            size={"large"}
            placeholder={placeholder}
            className=" rounded-none  max-w-[120px] "
        />

    )
}
export default CustomDatePicker