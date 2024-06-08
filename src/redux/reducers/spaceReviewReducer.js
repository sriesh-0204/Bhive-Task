import { SPACELIST_ERROR, SPACELIST_REQUEST, SPACELIST_SUCCESS } from "../actions/spaceReviewAction";

const initState = {
  loading: false,
  data: [],
};

const spaceListReducer = (state = initState, action = {}) => {
  switch (action?.type) {
    case SPACELIST_REQUEST: {
      return { ...state, loading: true };
    }
    case SPACELIST_SUCCESS: {
      return { ...state, loading: false, data:action.response };
    }
    case SPACELIST_ERROR: {
      return { ...state, loading: false };
    }
    default: {
      return { ...state };
    }
  }
};

export default spaceListReducer;
