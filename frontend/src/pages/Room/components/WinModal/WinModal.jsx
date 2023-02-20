import React from 'react';
import {observer} from "mobx-react-lite";
import './WinModal.scss'
import {Modal} from "antd";
import ButtonPrimary from "components /common/Button/ButtonPrimary /ButtonPrimary";
import {useHistory} from "react-router-dom";
import {RouteNames} from "utils/routes";
const WinModal = ({open, score, balance}) => {
    const history = useHistory();
    const onSubmit = () => {
        history.push(RouteNames.HOME)
    }
    return (
        <Modal destroyOnClose title="Итоги игры" className="modal"
               open={open} centered footer={false} closeIcon={<></>}>
            <div className="modal-body">
                <div className="win-modal">
                    <div className="balance">
                        <div className="balance-label">
                            {balance > 0 ? "Выиграли:" : "Проиграли:"}
                        </div>
                        <div className="balance-value">
                            {balance}
                        </div>
                    </div>
                    <div className="score">
                        <div className="score-label">
                            Наборано очков:
                        </div>
                        <div className="score-value">
                            {score}
                        </div>
                    </div>
                    <ButtonPrimary width='100%' height='48px' onClick={onSubmit}>
                        Начать новую игру
                    </ButtonPrimary>
                </div>
            </div>
        </Modal>
    );
}

export default observer(WinModal);