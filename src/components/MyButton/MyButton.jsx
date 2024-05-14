import s from './MyButton.module.css';

const MyButton = ({ children, className, ...props }) => {
	return (
		<button {...props} className={[s.myButton, className].join(' ')}>
			{children}
		</button>
	);
};

export default MyButton;
