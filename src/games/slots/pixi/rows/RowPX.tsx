import { FC, useState } from 'react';
import { Container, Sprite, useTick } from '@pixi/react';
import { ISlotRow } from './utils';
import { useAppSelector } from '@/app/store/hooks';
import { SlotLifecycle, selectSlotLifecycle } from '@/games/slots/slices/slotSlice';

interface IRowPXProps {
    rowID: number;
    activeItemID: number;
    slotRow: ISlotRow[];
}

const ITEM_HEIGHT = 100;
const SPEED = 40;
const DELTA_ALIGN_CENTER = 200;

const RowPX: FC<IRowPXProps> = ({ activeItemID, rowID, slotRow }) => {
    const lifecycle = useAppSelector(selectSlotLifecycle);
    const isStopping = lifecycle === SlotLifecycle.STOPPING;
    const isPlaying = lifecycle === SlotLifecycle.PLAY;

    const FULL_ROW_HEIGHT = slotRow.length * ITEM_HEIGHT;
    const currentIndexRowItem = slotRow.findIndex(rowItem => rowItem.id === activeItemID);
    const currentPosition = -(currentIndexRowItem * ITEM_HEIGHT - DELTA_ALIGN_CENTER);
    const startPosition = currentPosition - FULL_ROW_HEIGHT;
    const speed = isStopping || isPlaying ? SPEED : 0;

    const [position, setPosition] = useState<number>(-FULL_ROW_HEIGHT);
    const [fixPosition, setFixPosition] = useState<boolean>(false);

    useTick(delta => {
        if (position >= FULL_ROW_HEIGHT) {
            setPosition(-FULL_ROW_HEIGHT);
        } else {
            setPosition(prevPosition => prevPosition + speed * delta);
        }

        if (isStopping && !fixPosition) {
            setPosition(startPosition);
            setFixPosition(true);
        }

        if (isStopping && fixPosition) {
            const correlationCoefficient = currentPosition - position;

            if (correlationCoefficient > 0) {
                setPosition(position + speed * delta);
            } else {
                setPosition(currentPosition);
            }
        }
    });
    return (
        <Container
            x={(rowID - 1) * 120}
            y={position}
        >
            {/* fake top row */}
            <Container y={-FULL_ROW_HEIGHT}>
                {slotRow.map((row, idx) => (
                    <Sprite
                        image={row.image}
                        x={0}
                        y={idx * ITEM_HEIGHT}
                        scale={0.5}
                        anchor={0.5}
                        key={row.id}
                    />
                ))}
            </Container>

            {/* normal row */}
            <Container>
                {slotRow.map((row, idx) => (
                    <Sprite
                        image={row.image}
                        x={0}
                        y={idx * ITEM_HEIGHT}
                        scale={0.5}
                        anchor={0.5}
                        key={row.id}
                    />
                ))}
            </Container>

            {/* fake bottom row */}
            <Container y={FULL_ROW_HEIGHT}>
                {slotRow.map((row, idx) => (
                    <Sprite
                        image={row.image}
                        x={0}
                        y={idx * ITEM_HEIGHT}
                        scale={0.5}
                        anchor={0.5}
                        key={row.id}
                    />
                ))}
            </Container>
        </Container>
    );
};

export default RowPX;
