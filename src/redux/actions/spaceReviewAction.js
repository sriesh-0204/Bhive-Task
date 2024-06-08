const SPACELIST_REQUEST = "SPACELIST_REQUEST";
const SPACELIST_SUCCESS = "SPACELIST_SUCCESS";
const SPACELIST_ERROR = "SPACELIST_ERROR";

const triggerSpaceListRequest = (payload) => {
    return {
        type: SPACELIST_REQUEST,
        payload,
    };
};
const triggerSpaceListSuccess = (response) => {
    return {
        type: SPACELIST_SUCCESS,
        response,
    };
};
const triggerSpaceListError = (error) => {
    return {
        type: SPACELIST_ERROR,
        error,
    };
};

export {
    SPACELIST_REQUEST,
    SPACELIST_SUCCESS,
    SPACELIST_ERROR,
    triggerSpaceListRequest,
    triggerSpaceListSuccess,
    triggerSpaceListError,
};
