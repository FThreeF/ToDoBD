import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Registration from './Pages/Registration/Registration';
import './style.css';
import Main from './Pages/Main/Main';
import { useState } from 'react';

const App = () => {
	const [host, setHost] = useState('');
	const router = createBrowserRouter(
		[
			{
				path: '/menu',
				element: <Main host={host} />,
			},
			{
				path: '/',
				element: <Registration host={host} setHost={setHost} />,
			},
		],
		{ basename: import.meta.env.BASE_URL }
	);

	return <RouterProvider router={router} />;
};

export default App;
