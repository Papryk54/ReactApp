import styles from "./Column.module.scss";
import Card from "../Card/Card";
import CardForm from "../CardForm/CardForm";
import { useSelector } from "react-redux";
import { getFilteredCards } from "../../redux/cardsRedux";

const Column = (props) => {
	const cards = useSelector((state) => getFilteredCards(state, props.id));

	return (
		<article className={styles.column}>
			<h1 className={styles.title} type="text">
				<span className={styles.icon + " fa fa-" + props.icon} />
				{props.title}
			</h1>
			<ul className={styles.cards}>
				{cards.map((card) => (
					<Card id={card.id} title={card.title} isFavorite={card.isFavorite} />
				))}
			</ul>
			<CardForm columnId={props.id} listId={props.listId} />
		</article>
	);
};

export default Column;
