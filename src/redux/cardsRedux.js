import shortid from "shortid";
import strContains from "../utils/strContains";

// selectors
export const getFilteredCards = ({ cards, searchValue }, columnId) =>
	cards.filter(
		(card) => card.columnId === columnId && strContains(card.title, searchValue)
	);
export const getFavoriteCards = (state) =>
	state.cards.filter((card) => card.isFavorite);

// actions
const createActionName = (actionName) => `app/cards/${actionName}`;
const TOGGLE_FAVORITE = createActionName("TOGGLE_FAVORITE");
const TOGGLE_TRASH = createActionName("TOGGLE_TRASH");
const ADD_CARD = createActionName("ADD_CARD");

// action creators
export const toggleFavorite = (cardId) => ({
	type: TOGGLE_FAVORITE,
	payload: cardId,
});
export const toggleTrash = (cardId) => ({
	type: TOGGLE_TRASH,
	payload: cardId,
});
export const addCard = (payload) => ({ type: ADD_CARD, payload });

// reducer
const cardsReducer = (statePart = [], action) => {
	switch (action.type) {
		case ADD_CARD:
			return [...statePart, { ...action.payload, id: shortid() }];
		case TOGGLE_FAVORITE:
			return statePart.map((card) =>
				card.id === action.payload
					? { ...card, isFavorite: !card.isFavorite }
					: card
			);
		case TOGGLE_TRASH:
			return statePart.filter((card) => card.id !== action.payload);
		default:
			return statePart;
	}
};

export default cardsReducer;
