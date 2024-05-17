import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const GamesLayout: FC = () => {
    return (
        <div className="w-full h-screen">
            {/* <div>Games Header</div> */}
            <Outlet />
        </div>
    );
};

export default GamesLayout;
