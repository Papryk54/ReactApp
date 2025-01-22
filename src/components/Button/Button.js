import styles from "./Button.module.scss";

const Button = ({ type = "submitt", children }) => {
	return (
		<button type={type} className={styles.button}>
			{children}
		</button>
	);
};

export default Button;
