import { FC } from 'react';
import HummerMenuStartButton from '../../ui/menu/StartButton';

const HummerMenuScene: FC = () => {
    return (
        <div>
            <div>
                <div>Balance:</div>
                <div>Last Score</div>
            </div>
            <HummerMenuStartButton />
        </div>
    );
};

export default HummerMenuScene;
