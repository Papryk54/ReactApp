import styles from "./Favorite.module.scss";
import { useSelector } from "react-redux";
import { getFavoriteCards } from "../../redux/cardsRedux";
import Card from "../Card/Card";

const Favorite = () => {
	const favoriteCards = useSelector(getFavoriteCards);
	return (
		<div className="favorite-column">
			<h1 className={styles.title}>Favorite</h1>
			<ul>
				{favoriteCards.length === 0 ? (
					<li>No favorite cards yet!</li>
				) : (
					favoriteCards.map((card) => (
						<Card
							id={card.id}
							title={card.title}
							isFavorite={card.isFavorite}
						/>
					))
				)}
			</ul>
		</div>
	);
};

export default Favorite;
