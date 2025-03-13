import styles from "./Button.module.scss";

const Button = ({ type = "button", variant = "button", children, onClick }) => {
	const buttonClass = variant
		? `${styles.button} ${styles[variant]}`
		: styles.button;
	return (
		<button type={type} className={buttonClass} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
