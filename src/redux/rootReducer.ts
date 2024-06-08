import { combineReducers } from "redux";
import spaceListReducer from './slices/spaceListSlice';

const rootReducer = combineReducers({
  spaceList: spaceListReducer,
});

export default rootReducer;