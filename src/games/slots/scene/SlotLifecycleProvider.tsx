import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { FC, PropsWithChildren, useEffect } from 'react';
import { SlotLifecycle, selectSlotLifecycle, setSlotLifecycle } from '@/games/slots/slices/slotSlice';

const SlotLifecycleProvider: FC<PropsWithChildren> = ({ children }) => {
    const dispatch = useAppDispatch();
    const lifecycle = useAppSelector(selectSlotLifecycle);

    useEffect(() => {
        if (lifecycle === SlotLifecycle.PLAY) {
            const stopping = setTimeout(() => {
                dispatch(setSlotLifecycle(SlotLifecycle.STOPPING));
            }, 3000);
            return () => clearTimeout(stopping);
        }
    }, [lifecycle, dispatch]);

    useEffect(() => {
        if (lifecycle === SlotLifecycle.STOPPING) {
            const stop = setTimeout(() => {
                dispatch(setSlotLifecycle(SlotLifecycle.STOP));
            }, 3000);
            return () => clearTimeout(stop);
        }
    }, [lifecycle, dispatch]);

    useEffect(() => {
        if (lifecycle === SlotLifecycle.STOP) {
            dispatch(setSlotLifecycle(SlotLifecycle.INFO));
        }
    }, [lifecycle, dispatch]);

    useEffect(() => {
        if (lifecycle === SlotLifecycle.INFO) {
            const stop = setTimeout(() => {
                dispatch(setSlotLifecycle(SlotLifecycle.READY_TO_START));
            }, 3000);
            return () => clearTimeout(stop);
        }
    }, [lifecycle, dispatch]);

    return <>{children}</>;
};

export default SlotLifecycleProvider;
