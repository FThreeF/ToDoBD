import { useState } from 'react';
import MyButton from '../../components/MyButton/MyButton';
import MyInput from '../../components/MyInput/MyInput';
import s from './Registration.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const Registration = ({ host, setHost }) => {
	const [user, setUser] = useState({ login: '', password: '' });
	const [message, setMessage] = useState('');

	const navigate = useNavigate();

	const LogIn = async () => {
		// const res = await axios.post(`${baseUrl}/registration`, user);
		// const response = res.data;
		// if (response.password) {
		// 	navigate('/');
		// 	setHost(user.login);
		// } else {
		// 	setMessage(response.message);
		// }
		if (user.login == 'admin' && user.password == 'admin') {
			navigate('/menu');
			setHost(user.login);
		}
	};

	return (
		<div className={s.registration}>
			<h3 className={s.title}>Регистрация</h3>
			<MyInput placeholder='Логин' value={user.login} onChange={(e) => setUser({ ...user, login: e.target.value })} />
			<MyInput placeholder='Пароль' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
			<MyButton onClick={LogIn}>Вход</MyButton>
			<p
				style={{
					color: 'red',
					textAlign: 'center',
					fontSize: '14px',
				}}>
				{message}
			</p>
		</div>
	);
};

export default Registration;
