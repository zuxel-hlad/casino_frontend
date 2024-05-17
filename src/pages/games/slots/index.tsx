import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import CoreGameSlots from '@/games/slots';
import titleImage from '@/assets/slot/title.svg';
import styles from '@/pages/page.module.css';

const SlotsPage: FC = () => {
    return (
        <div className={twMerge('relative h-screen flex justify-center items-center', styles.slots)}>
            <div className="absolute top-[5%] left-[50%] translate-x-[-50%] z-10">
                <img
                    src={titleImage}
                    alt="win 777 slot game"
                />
            </div>
            <CoreGameSlots />
        </div>
    );
};

export default SlotsPage;
