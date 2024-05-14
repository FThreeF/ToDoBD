import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Registration from './Pages/Registration/Registration';
import './style.css';
import Main from './Pages/Main/Main';
import { useState } from 'react';

const App = () => {
	const [host, setHost] = useState('');
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main host={host} />,
		},
		{
			path: '/registration',
			element: <Registration host={host} setHost={setHost} />,
		},
		
	], baseName=process.env.PUBLIC_URL);

	return <RouterProvider router={router} />;
};

export default App;
