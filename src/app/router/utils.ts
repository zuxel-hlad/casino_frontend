export const ROUTES = {
    main: '/',
    auth: {
        login: 'auth/login',
        register: 'auth/login',
    },
    games: {
        roulette: 'games/roulette',
        slots: 'games/slots',
        hummer: 'games/hummer',
    },
};

export const generateUrl = (url: string, params?: any) => {
    return url;
};
