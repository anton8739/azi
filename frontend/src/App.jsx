import 'normalize.css';
import './App.scss';
import AppRouter from "routes/AppRouter";
import {ConfigProvider, Spin} from 'antd';
import ru_RU from 'antd/lib/locale/ru_RU'
import {useEffect} from "react";
import {useAuthStore} from "stores";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {RouteNames} from "utils/routes";

ConfigProvider.config({
    theme: {
        primaryColor: '#616372',
        primaryColorHover: '#616372',
        primary1: '#FFFFFF', //text color
        primary2: 'black', //text color
        primary3: '#FFFFFF', // bg color
        boxShadowBase: '#616372',
        textSelectionColor: '#333333',
    },
    locale: ru_RU
});

function App() {
    const {checkAuth, isChecking} = useAuthStore();
    const history = useHistory();
    useEffect(() => {
        const init = async () => {
            const auth = await  checkAuth()
            if (!auth) {
                history.push(RouteNames.LOGIN)
            }
        }
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        init()
    }, [])
    return (
        <ConfigProvider locale={ru_RU}>
            {isChecking ? <div className="main-spin"><Spin size='large'/></div> :
                <AppRouter/>
            }
        </ConfigProvider>
    );
}

export default observer(App);
