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

// action creators
export const addColumn = (payload) => ({ type: "ADD_COLUMN", payload });

export const addCard = (payload) => ({ type: "ADD_CARD", payload });

export const searchValue = (payload) => ({type: "SEARCH_VALUE", payload})

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
					},
				],
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
