import React, { useEffect, useState } from "react";
import { getCurrentDateTime } from "../../../configs/common";

const Time = () => {
    const [time, settime] = useState<any>();
    useEffect(() => {
        const realtime = setInterval(() => {
            settime(getCurrentDateTime("time"))
        }, 1000)
        return () => {
            clearInterval(realtime)
        }
    }, [])
    return (
        <>
            {
                time
            }
        </>
    )
}
export default Time