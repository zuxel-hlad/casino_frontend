import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { Container, Graphics } from '@pixi/react';
import { ISlotRow, SLOT_ROW } from './utils';
import RowPX from './RowPX';
import { useAppSelector } from '@/app/store/hooks';
import { selectSlotRows } from '@/games/slots/slices/slotSlice';

const generateRandomRow = (slotRow: ISlotRow[]) => {
    return [...slotRow].sort(() => Math.random() - 0.5);
};

const RowsPX: FC = () => {
    const rows = useAppSelector(selectSlotRows);
    const firstSlotRow = useMemo(() => generateRandomRow(SLOT_ROW), []);
    const secondSlotRow = useMemo(() => generateRandomRow(SLOT_ROW), []);
    const thirdSlotRow = useMemo(() => generateRandomRow(SLOT_ROW), []);
    const slotRows = [firstSlotRow, secondSlotRow, thirdSlotRow];
    const [loading, setLoading] = useState<boolean>(true);

    const maskRef = useRef(null);

    useEffect(() => {
        setLoading(!loading);
    }, []);

    return (
        <Container
            x={450}
            y={50}
            mask={maskRef.current}
        >
            <Graphics
                draw={g => {
                    g.beginFill(0x000000);
                    g.drawRect(-100, 50, 400, 300);
                    g.endFill();
                }}
                ref={maskRef}
            />

            {rows.map((row, idx) => (
                <RowPX
                    key={row.id}
                    rowID={row.id}
                    activeItemID={row.activeItemID}
                    slotRow={slotRows[idx]}
                />
            ))}
        </Container>
    );
};

export default RowsPX;
