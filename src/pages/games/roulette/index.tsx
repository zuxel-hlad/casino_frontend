import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/router/utils';
import CoreGameRoulette from '@/games/roulette';
import styles from '@/pages/page.module.css';

const RoulettePage: FC = () => {
    return (
        <div className={styles.roulette}>
            <Link to={ROUTES.main}>Return to Main Page</Link>
            <CoreGameRoulette />
        </div>
    );
};

export default RoulettePage;
