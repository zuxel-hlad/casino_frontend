import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => {
    return (
        <div>
            <div>Main Header</div>
            <Outlet />
        </div>
    );
};

export default MainLayout;
