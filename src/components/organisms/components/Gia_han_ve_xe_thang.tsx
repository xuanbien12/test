
import React, { useState } from "react";
import Du_lieu_The from "./Du_lieu_the";
import Gia_han_ve_thang from "./Gia_han_ve_thang";

const Gia_han_the_xe_thang = () => {


    return (
        <div className="grid grid-cols-2 gap-5">
            <Du_lieu_The />
            <Gia_han_ve_thang />
        </div>
    )
}
export default Gia_han_the_xe_thang