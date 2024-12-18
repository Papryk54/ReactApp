import styles from "../Container/Container.module.scss";

const Container = (props) => {
	return <div className={styles.Container}>{props.children}</div>;
};

export default Container;
