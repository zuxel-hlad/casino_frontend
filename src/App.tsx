import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { router } from './app/router';
import { store } from './app/store';

const App = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
};

export default App;
