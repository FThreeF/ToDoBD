import s from './Task.module.css';

const Task = ({ task, host, deleteTask }) => {
	const dateString = task.date;
	const date = new Date(dateString);

	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	const hours = date.getHours().toString().padStart(2, '0');
	const minutes = date.getMinutes().toString().padStart(2, '0');

	const formattedDate = `${day}.${month}.${year}`;

	return (
		<div className={s.task}>
			<h3 className={s.title}>{task.name}</h3>
			<p className={s.date}>{formattedDate}</p>
			<p className={s.responsible}>{task.responsible}</p>
			<p className={s.status}>{task.status}</p>
			<p className={s.description}>{task.description}</p>
			{host == 'admin' ? (
				<div onClick={() => deleteTask(task)} className={s.delete}>
					Х
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default Task;
