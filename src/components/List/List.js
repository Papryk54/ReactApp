import Column from "../Column/Column";
import styles from "./List.module.scss";

const List = () => {
	return (
		<>
			<header className={styles.header}>
				<h1 className={styles.title}>
					Things to do<span className={styles.span}>soon!</span>
				</h1>
				<p className={styles.descryption}>
					Interesting things I want to check out
				</p>
			</header>
			<section className={styles.columns}>
				<Column text="Books" icon="book" />
				<Column text="Movies" icon="film" />
				<Column text="Games" icon="gamepad" />
			</section>
		</>
	);
};

export default List;
