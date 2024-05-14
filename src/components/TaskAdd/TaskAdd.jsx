import { useEffect, useState } from 'react';
import MyButton from '../MyButton/MyButton';
import MyInput from '../MyInput/MyInput';
import s from './TaskAdd.module.css';
import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const TaskAdd = ({ addTask, setAddTask, create }) => {
	const [task, setTask] = useState({ name: '', description: '', date: '', responsible: 1, status: 1 });
	const [users, setUsers] = useState([{id: 1, login: 'roman'},{id: 2, login: 'admin'} ]);
	const [statuses, setStatuses] = useState([{id: 1, name: 'выполнено'},{id: 2, name: 'в процессе'}]);

	const [selected, setSelected] = useState([{ responsible: '', statuses: '' }]);

	// useEffect(() => {
	// 	// const fetchUsers = async () => {
	// 	// 	const response = await axios.get(`${baseUrl}/users`);
	// 	// 	const res = response.data;
	// 	// 	setUsers(res);
	// 	// };
	// 	// fetchUsers();
	// 	// const fetchStatuses = async () => {
	// 	// 	const response = await axios.get(`${baseUrl}/statuses`);
	// 	// 	const res = response.data;
	// 	// 	setStatuses(res);
	// 	// 	console.log(statuses);
	// 	// };
	// 	// fetchStatuses();
	// }, []);

	const createTask = async () => {
		create({ ...task, responsible: (task.responsible == 1) ? 'Roman' : "Admin",  status: (task.status == 1) ? 'Выполнено' : "В процессе", date: new Date().toISOString().split('T')[0], id: new Date().toISOString().split('T')[0]})
		// await axios.put(`${baseUrl}/createTask`, { ...task, date: new Date().toISOString().split('T')[0] });
		setAddTask(false);
	};
	// console.log(task);
	return (
		<div className={[s.taskAdd, !addTask ? s.hidden : ''].join(' ')}>
			<div className={s.form}>
				<h3 className={s.title}>Создание задачи</h3>
				<MyInput value={task.name} onChange={(e) => setTask({ ...task, name: e.target.value })} placeholder='Название' />
				<MyInput value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} placeholder='Описание' />
				<p>Ответственный</p>
				<select value={task.responsible} onChange={(e) => setTask({ ...task, responsible: e.target.value })} className={s.select}>
					{users.map((user) => (
						<option key={user.id} className={s.option} value={user.id}>
							{user.login}
						</option>
					))}
				</select>
				<p>Статус</p>
				<select value={task.status} onChange={(e) => setTask({ ...task, status: e.target.value })} className={s.select}>
					{statuses.map((status) => (
						<option key={status.id} className={s.option} value={status.id}>
							{status.name}
						</option>
					))}
				</select>
				<MyButton onClick={createTask}>Создать</MyButton>
				<MyButton onClick={() => setAddTask(false)}>Отмена</MyButton>
			</div>
		</div>
	);
};

export default TaskAdd;
