import { useState } from 'react';
import MyButton from '../MyButton/MyButton';
import MyInput from '../MyInput/MyInput';
import TaskAdd from '../TaskAdd/TaskAdd';
import s from './Menu.module.css';

const Menu = ({ search, setSearch, host, addTask, setAddTask, createTask }) => {
	return (
		<div className={s.menu}>
			<TaskAdd addTask={addTask} setAddTask={setAddTask} create={createTask} />
			<div className={s.logo}>Logo</div>
			<div className={s.search}>
				<MyInput value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Поиск...' />
				{host == 'admin' ? (
					<>
						<MyButton onClick={() => setAddTask(true)} className={s.button}>
							+
						</MyButton>
					</>
				) : (
					''
				)}
			</div>
			<div className={s.profile}></div>
		</div>
	);
};

export default Menu;
