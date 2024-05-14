import { useEffect, useState } from 'react';
import TaskList from '../../components/TaskList/TaskList';
import s from './Main.module.css';
import axios from 'axios';
import Menu from '../../components/Menu/Menu';

const baseUrl = 'http://localhost:3000';

const Main = ({ host }) => {
	const [addTask, setAddTask] = useState(false);

	const [tasks, setTasks] = useState([
		{ id: 1, name: 'Задача 1', description: 'Задача 1', date: '02.10.12', status: 'В процессе', responsible: 'Roman' },
		{ id: 2, name: 'Задача 2', description: 'Задача 2', date: '02.11.10', status: 'В процессе', responsible: 'Admin' },
	]);
	const [search, setSearch] = useState('');

	// useEffect(() => {
	// 	const fetchTasks = async () => {
	// 		const response = await axios.get(`${baseUrl}/tasks`);
	// 		const res = response.data;
	// 		setTasks(res);
	// 	};
	// 	fetchTasks();
	// }, [addTask]);

	const createTask = (newTask) => {
		console.log(newTask);
		setTasks([...tasks, newTask]);
	}
	
	const filteredTasks = tasks.filter((task) => task.name.toLowerCase().includes(search.toLowerCase()));

	const deleteTask = async (delTask) => {
		console.log(delTask.id);
		// const res = await axios.delete(`${baseUrl}/deleteTask/${delTask.id}`);
		// console.log(res.data);
		setTasks([...tasks.filter((task) => task != delTask)]);
	};

	

	return (
		<div className={s.main}>
			{host ? (
				<>
					<Menu host={host} search={search} setSearch={setSearch} addTask={addTask} createTask={createTask} setAddTask={setAddTask} />
					<TaskList host={host} deleteTask={deleteTask} tasks={filteredTasks} />{' '}
				</>
			) : (
				<a href='/registration'>Войдите</a>
			)}
		</div>
	);
};

export default Main;
