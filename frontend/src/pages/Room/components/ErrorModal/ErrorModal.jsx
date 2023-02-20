import React from 'react';
import {observer} from "mobx-react-lite";
import './ErrorModal.scss'
import {Modal} from "antd";
import ButtonPrimary from "components /common/Button/ButtonPrimary /ButtonPrimary";
import {useHistory} from "react-router-dom";
import {RouteNames} from "utils/routes";
const ErrorModal = ({open, message}) => {
    const history = useHistory();
    const onSubmit = () => {
        history.push(RouteNames.HOME)
    }
    return (
        <Modal destroyOnClose title="Ошибка" className="modal"
               open={open} centered footer={false} closeIcon={<></>}>
            <div className="modal-body">
                <div className="error-modal">
                    <div className="error-message">
                        {message}
                    </div>
                    <ButtonPrimary width='100%' height='48px' onClick={onSubmit}>
                        Вернуться к спиcку игр
                    </ButtonPrimary>
                </div>
            </div>
        </Modal>
    );
}

export default observer(ErrorModal);