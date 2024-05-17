import { Stage as PixiStage, _ReactPixi } from '@pixi/react';
import { ReactReduxContext, ReactReduxContextValue } from 'react-redux';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { UnknownAction } from '@reduxjs/toolkit';

interface IContextBridge {
    Context: React.Context<ReactReduxContextValue<any, UnknownAction> | null>;
    render: (provider: ReactElement<any>) => ReactElement<any>;
}

const ContextBridge: FC<PropsWithChildren<IContextBridge>> = ({ children, Context, render }) => {
    return (
        <Context.Consumer>
            {value => render(<Context.Provider value={value}>{children}</Context.Provider>)}
        </Context.Consumer>
    );
};

export const Stage: FC<PropsWithChildren<_ReactPixi.IStage>> = ({ children, ...props }) => {
    return (
        <ContextBridge
            Context={ReactReduxContext}
            render={children => <PixiStage {...props}>{children}</PixiStage>}
        >
            {children}
        </ContextBridge>
    );
};
