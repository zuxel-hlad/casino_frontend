import { FC } from 'react';
import { Container, Sprite } from '@pixi/react';
import bg from '@/assets/roulette/bg1.jpg';

const bgPX: FC = () => {
    return (
        <Container>
            <Sprite
                image={bg}
                x={0}
                y={0}
                anchor={{ x: 0, y: 0 }}
                scale={0.8}
            />
        </Container>
    );
};

export default bgPX;
