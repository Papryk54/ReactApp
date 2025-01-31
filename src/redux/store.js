import { createStore } from "redux";
import initialState from "./initialState";
import shortid from "shortid";

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
