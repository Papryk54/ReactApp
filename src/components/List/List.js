import Column from "../Column/Column";
import styles from "./List.module.scss";
import ColumnForm from "../ColumnForm/ColumForm";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getListById } from "../../redux/listsRedux";
import { getColumnsByList } from "../../redux/columnsRedux";
import SearchForm from "../SearchForm/SearchForm";

const List = () => {
	const { listId } = useParams();
	const listData = useSelector((state) => getListById(state, listId));
	const columns = useSelector((state) => getColumnsByList(state, listId));

	return (
		<div className={styles.list}>
			<header className={styles.header}>
				<h2 className={styles.title}>
					{listData?.title || "Untitled List"} <span>soon!</span>
				</h2>
			</header>
			<p className={styles.description}>{listData?.description || "No description"}</p>
			<SearchForm />
			<section className={styles.columns}>
				{columns.map((column) => (
					<Column key={column.id} {...column} listId={listId} />
				))}
			</section>
			<ColumnForm listId={listId} />
		</div>
	);
};

export default List;
