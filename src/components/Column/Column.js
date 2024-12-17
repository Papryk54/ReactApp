import styles from "./Column.module.scss";

const Column = (props) => {
	return (
		<article className={styles.column}>
			<h1 className={styles.title} type="text">
				<span className={styles.icon + " fa fa-" + props.icon} />
				{props.text}
			</h1>
		</article>
	);
};

export default Column;
