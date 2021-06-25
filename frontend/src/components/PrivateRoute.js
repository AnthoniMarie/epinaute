import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

function PrivateRoute(props: RouteProps): React.ReactElement {
    let login_status = localStorage.getItem("logged");
    const { component: Component, ...rest } = props;

    const render = props => {
        if (!login_status)
            return <Redirect to="/login" />;
        return <Component {...props} />;
    };
    return <Route {...rest} render={render} />;
}
export default PrivateRoute;