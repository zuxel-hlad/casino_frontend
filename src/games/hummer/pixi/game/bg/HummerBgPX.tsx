import { FC } from 'react';
import { Container, Sprite } from '@pixi/react';
import hummerBgImage from '@/assets/hummer/bg.jpg';

const HummerBgPX: FC = () => {
    return (
        <Container>
            <Sprite
                x={0}
                y={0}
                image={hummerBgImage}
            />
        </Container>
    );
};

export default HummerBgPX;
