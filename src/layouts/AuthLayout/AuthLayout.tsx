import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: FC = () => {
    return (
        <div>
            <div>Header Auth</div>
            <Outlet />
        </div>
    );
};

export default AuthLayout;
