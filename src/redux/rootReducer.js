
import { combineReducers } from "redux";
import spaceListReducer from "./reducers/spaceReviewReducer";


const rootReducer = combineReducers({
  spaceList: spaceListReducer,
});

export default rootReducer;
