import App from './App';
import AboutUs from './pages/AboutUs';
import HelpCentre from './pages/HelpCentre';

const routes = [
    {
        path: '/',
        element: <App />,
    },
    {
        path: 'about',
        element: <AboutUs />,
    },
    {
        path: 'help',
        element: <HelpCentre />,
    },
];

export default routes;
