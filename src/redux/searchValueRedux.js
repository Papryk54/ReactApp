// actions
const createActionName = (actionName) => `app/searchValues/${actionName}`;
const SEARCH_VALUE = createActionName("SEARCH_VALUE");

// action creators
export const searchValue = (payload) => ({ type: SEARCH_VALUE, payload });

// reducer
const searchValueReducer = (statePart = "", action) => {
	switch (action.type) {
		case SEARCH_VALUE:
			return action.payload;
		default:
			return statePart;
	}
};

export default searchValueReducer;
