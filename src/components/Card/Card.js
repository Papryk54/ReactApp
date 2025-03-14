import Button from "../Button/Button";
import styles from "./Card.module.scss";
import { useDispatch } from "react-redux";
import { toggleFavorite, toggleTrash } from "../../redux/cardsRedux";

const Card = ({ title, isFavorite, id }) => {
	const dispatch = useDispatch();

	const handleClickFavorite = () => {
		dispatch(toggleFavorite(id));
	};

	const handleClickTrash = () => {
		dispatch(toggleTrash(id));
	};

	return (
		<li className={styles.card}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.iconContainer}>
				<Button variant="favorite" onClick={handleClickFavorite}>
					<span
						className={
							isFavorite ? "fa fa-solid fa-star" : "fa fa-regular fa-star-o"
						}
					/>
				</Button>
				<Button variant="trash" onClick={handleClickTrash}>
					<span className="fa fa-trash" />
				</Button>
			</div>
		</li>
	);
};

export default Card;
