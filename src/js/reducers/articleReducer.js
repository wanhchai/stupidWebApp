import { ADD_ARTICLE } from "../constants/action-types";
import { DELETE_ARTICLE } from "../constants/action-types";
import { FLUSH_ARTICLE } from "../constants/action-types";

const articleReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      if (action.payload.title != "") return [...state, action.payload];
      else return state;
    case DELETE_ARTICLE:
      const newState = state.slice(0, -1);
      return newState;
    case FLUSH_ARTICLE:
      state = [];
      return state;
    default:
      return state;
  }
};

export default articleReducer;
