import s from './TaskList.module.css';

import Task from '../Task/Task';

const TaskList = ({ tasks, host, deleteTask }) => {
	return (
		<div className={s.taskList}>
			{tasks.map((task) => (
				<Task key={task.id} deleteTask={deleteTask} host={host} task={task} />
			))}
		</div>
	);
};

export default TaskList;
