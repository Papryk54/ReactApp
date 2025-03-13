import Button from "../Button/Button";
import styles from "./Card.module.scss";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/store";

const Card = ({ title, isFavorite, id }) => {
	const dispatch = useDispatch();

	console.log("Card title:", title);

	const handleClick = () => {
		dispatch(toggleFavorite(id));
	};

	return (
		<li className={styles.card}>
			<h2 className={styles.title}>{title}</h2>
			<Button variant="favorite" onClick={handleClick}>
				<span
					className={
						isFavorite ? "fa fa-solid fa-star" : "fa fa-regular fa-star-o"
					}
				/>
			</Button>
		</li>
	);
};

export default Card;
