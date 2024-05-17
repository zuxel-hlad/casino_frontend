import { ROUTES } from '@/app/router/utils';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import HummerCore from '@/games/hummer';

const HummerPage: FC = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div>
                <Link to={ROUTES.main}>Return to Main Page</Link>
                <HummerCore />
            </div>
        </div>
    );
};

export default HummerPage;
