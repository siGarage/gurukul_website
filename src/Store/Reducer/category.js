import constants from "../../constants";

const initial_state = {
  Category: [],
};

export default function auth(state = initial_state, action) {
  switch (action.type) {
    //all load
    case constants("category").reducers.category.AddToCategory:
      return {
        ...state,
        Category: action.payload.Category,
      };

    default:
      return state;
  }
}
