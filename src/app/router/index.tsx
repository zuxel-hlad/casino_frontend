import { createBrowserRouter } from 'react-router-dom';
import { MainLayout, GamesLayout, AuthLayout } from '@/layouts';
import { MainPage, RoulettePage, SlotsPage, HummerPage, LoginPage, RegisterPage } from '@/pages';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: MainPage,
            },
        ],
    },
    {
        path: 'auth',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: LoginPage,
            },
            {
                path: 'register',
                Component: RegisterPage,
            },
        ],
    },
    {
        path: 'games',
        Component: GamesLayout,
        children: [
            {
                path: 'roulette',
                Component: RoulettePage,
            },
            {
                path: 'slots',
                Component: SlotsPage,
            },
            {
                path: 'hummer',
                Component: HummerPage,
            },
        ],
    },
]);
