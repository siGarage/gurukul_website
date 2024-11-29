import constants from "../../constants";
import CategoryImage from "../../Pages/CategoryImage/CategoryImage";

const initial_state = {
  CategoryImage: [],
};

export default function auth(state = initial_state, action) {
  switch (action.type) {
    //all load
    case constants("categoryImage").reducers.categoryImage.AddToCategoryImage:
      return {
        ...state,
        CategoryImage: action.payload.CategoryImage,
      };
    default:
      return state;
  }
}
