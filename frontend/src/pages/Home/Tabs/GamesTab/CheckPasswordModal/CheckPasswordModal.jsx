import React, {cloneElement, useState} from 'react';
import './CheckPasswordModal.scss'
import {Modal} from "antd";
import CloseIcon from "components /common/Icon/CloseIcon";
import CheckRoomPasswordForm
    from "pages/Home/Tabs/GamesTab/CheckPasswordModal/CheckRoomPasswordForm/CheckRoomPasswordForm";
import {useHistory} from "react-router-dom";
import {RouteNames} from "utils/routes";
import {observer} from "mobx-react-lite";

const CheckPasswordModal = ({Trigger, room}) => {
    const history = useHistory();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        history.push({
            pathname: `${RouteNames.ROOM}/${room.id}`,
            state: {
                auth: true
            }
        })
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const TriggerButton = Trigger && cloneElement(
        Trigger,
        {onClick: () => showModal()},
        Trigger.props.children
    );
    return (
        <>
            {TriggerButton}
            <Modal destroyOnClose title="Введите пароль от комнаты" closeIcon={<CloseIcon fill='#FEB932'/>}
                   className="modal"
                   open={isModalOpen} onOk={handleOk} onCancel={handleCancel} centered footer={false}>
                <div className="modal-body">
                    <CheckRoomPasswordForm handleOk={handleOk} room={room}/>
                </div>
            </Modal>
        </>
    );
}

export default observer(CheckPasswordModal);