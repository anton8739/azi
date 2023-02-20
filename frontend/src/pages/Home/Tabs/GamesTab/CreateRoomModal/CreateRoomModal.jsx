import React, {useState} from 'react';
import 'pages/Home/Tabs/GamesTab/CreateRoomModal/CreateRoomModal.scss'
import ButtonPrimary from "components /common/Button/ButtonPrimary /ButtonPrimary";
import {Modal} from "antd";
import CloseIcon from "components /common/Icon/CloseIcon";
import {observer} from "mobx-react-lite";
import CreateRoomForm from "pages/Home/Tabs/GamesTab/CreateRoomModal/CreateRoomForm/CreateRoomForm";
import {useRoomStore} from "stores";

const CreateRoomModal = (props) => {
    const {loadRooms} = useRoomStore();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        loadRooms()
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <ButtonPrimary height='45px' onClick={showModal}>
                Cоздать игру
            </ButtonPrimary>
            <Modal destroyOnClose title="Создать игру" closeIcon={<CloseIcon fill='#FEB932'/>} className="modal"
                   open={isModalOpen} onOk={handleOk} onCancel={handleCancel} centered footer={false}>
                <div className="modal-body">
                    <CreateRoomForm handleOk={handleOk}/>
                </div>
            </Modal>
        </>
    );
}

export default observer(CreateRoomModal);