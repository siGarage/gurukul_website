import { combineReducers } from "redux";

import auth from "./auth";
import product from "./product";
import wishlist from "./wishlist";
import category from "./category";
import CategoryImage from "./categoryImage";
import Resume from "./resume";
const rootReducer = combineReducers({
  auth: auth,
  product: product,
  wishlist: wishlist,
  category: category,
  categoryImage: CategoryImage,
  resume:Resume
});

export default rootReducer;
