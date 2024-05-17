import { FC } from 'react';
import { Container, Sprite } from '@pixi/react';
import bodyImage from '@/assets/slot/body.svg';
import lineImage from '@/assets/slot/line.png';

const BodyPX: FC = () => {
    return (
        <Container>
            <Sprite
                x={575}
                y={250}
                image={bodyImage}
                anchor={0.5}
            />

            <Sprite
                image={lineImage}
                x={380}
                y={75}
            />
            <Sprite
                image={lineImage}
                x={510}
                y={75}
            />
            <Sprite
                image={lineImage}
                x={640}
                y={75}
            />
            <Sprite
                image={lineImage}
                x={770}
                y={75}
            />
        </Container>
    );
};

export default BodyPX;
