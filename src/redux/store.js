import { createStore } from "redux";
import initialState from "./initialState";
import shortid from "shortid";
import strContains from "../utils/strContains";

//selectors
export const getFilteredCards = ({ cards, searchValue }, columnId) =>
	cards.filter(
		(card) => card.columnId === columnId && strContains(card.title, searchValue)
	);

export const getAllColumns = (state) => state.columns;

export const getListById = ({ lists }, listId) =>
	lists.find((list) => list.id === listId);

export const getColumnsByList = ({ columns }, listId) =>
	columns.filter((column) => column.listId === listId);

export const getAllLists = ({ lists }) => lists;

export const getFavoriteCards = (state) =>
	state.cards.filter((card) => card.isFavorite);

// action creators
export const addColumn = (payload) => ({ type: "ADD_COLUMN", payload });

export const addCard = (payload) => ({ type: "ADD_CARD", payload });

export const searchValue = (payload) => ({ type: "SEARCH_VALUE", payload });

export const addList = (payload) => ({ type: "ADD_LIST", payload });

export const toggleFavorite = (cardId) => ({
	type: "TOGGLE_FAVORITE",
	payload: cardId,
});

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_COLUMN":
			return {
				...state,
				columns: [...state.columns, { ...action.payload, id: shortid() }],
			};
		case "ADD_CARD":
			return {
				...state,
				cards: [
					...state.cards,
					{
						id: shortid(),
						columnId: action.payload.columnId,
						title: action.payload.title,
						isFavorite: false,
					},
				],
			};
		case "TOGGLE_FAVORITE":
			return {
				...state,
				cards: state.cards.map((card) =>
					card.id === action.payload
						? { ...card, isFavorite: !card.isFavorite }
						: card
				),
			};
		case "SEARCH":
			return {
				...state,
				filteredCards: action.payload.filteredCards,
			};
		case "SEARCH_VALUE":
			return {
				...state,
				searchValue: action.payload,
			};
		case "ADD_LIST":
			return {
				...state,
				lists: [
					...state.lists,
					{
						id: shortid(),
						title: action.payload.title,
						description: action.payload.description,
					},
				],
			};
		default:
			return state;
	}
};

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
