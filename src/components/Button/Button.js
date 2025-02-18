import styles from "./Button.module.scss";

const Button = ({ type = "button", children, onClick }) => {
	return (
		<button type={type} className={styles.button} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
