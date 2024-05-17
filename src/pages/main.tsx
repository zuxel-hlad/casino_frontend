import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/router/utils';
import { useAppSelector } from '@/app/store/hooks';
import { selectUserName } from '@/entities/user/slices/userSlice';

const MainPage: FC = () => {
    const defaultNickName = useAppSelector(selectUserName);
    return (
        <div className="flex gap-4">
            {defaultNickName}
            <Link to={ROUTES.games.roulette}>Roulette</Link>
            <Link to={ROUTES.games.slots}>Slots</Link>
            <Link to={ROUTES.games.hummer}>Hummer</Link>
        </div>
    );
};

export default MainPage;
