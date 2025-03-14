import { createStore, combineReducers } from "redux";
import initialState from "./initialState";
import listsReducer from "./listsRedux";
import cardsReducer from "./cardsRedux";
import searchValueReducer from "./searchValueRedux";
import columnsReducer from "./columnsRedux";

const subreducers = {
	lists: listsReducer,
	columns: columnsReducer,
	cards: cardsReducer,
	searchValue: searchValueReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
