import {adminRoutes, clientRoutes, publicRoutes, RouteNames} from "utils/routes";
import {Redirect, Route, Switch} from 'react-router-dom';
import {useAuthStore} from "stores";
import {observer} from "mobx-react-lite";

const AppRouter = () => {
    const {isAuth,isAdmin,isClient } = useAuthStore();
    return (<>
        {isAuth && isAdmin &&
            <Switch>
                {adminRoutes.map(route =>
                    <Route exact path={route.path}
                           component={route.element}
                           key={route.path}
                    />
                )}
                <Redirect to={RouteNames.HOME}/>
            </Switch>}
        {isAuth && isClient &&
            <Switch>
                {clientRoutes.map(route =>
                    <Route  exact path={route.path}
                           component={route.element}
                           key={route.path}
                    />
                )}
                <Redirect to={RouteNames.HOME} replace/>
            </Switch>
        }
        {!isAuth &&
        <Switch>
            {publicRoutes.map(route =>
                <Route  exact path={route.path}
                        component={route.element}
                        key={route.path}
                />
            )}
            <Redirect to={RouteNames.LOGIN} replace/>
        </Switch>
        }
    </>)
}

export default observer(AppRouter);