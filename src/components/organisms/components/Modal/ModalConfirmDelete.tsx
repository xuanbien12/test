import { Modal, Button } from "antd";
import React from "react";

const ModalConfirmDelete = ({ isOpenModalConfirm, setIsOpenModalConfirm, handleDelete }: any) => {
    return (
        <Modal
            footer={false}
            open={isOpenModalConfirm}
            onCancel={(e) => setIsOpenModalConfirm(!e)}
        >
            <div className="text-center text-[20px]">Are you  sure you want to delete device ?</div>
            <div className="flex gap-10 justify-center mt-10">
                <Button className='w-[140px] h-[50px] flex justify-center items-center rounded-[10px] text-[20px] text-[#fff] bg-[#009A34] ' onClick={handleDelete}>Confirm</Button>
                <Button onClick={() => setIsOpenModalConfirm(false)} className='w-[140px] h-[50px] flex justify-center items-center rounded-[10px] text-[20px] text-[#000] bg-[#C53131] '>Cancel</Button>
            </div>
        </Modal>
    )
}
export default ModalConfirmDelete