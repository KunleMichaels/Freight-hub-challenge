import types from "../constants/shipmentsConstants";

const initialState = {
  loading: false,
  success: false,
  request: null,
  response: null,
  error: null
};

export const postShipments = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_SHIPMENT:
      return {
        ...state,
        loading: true,
        request: action.request
      };
    case types.POST_SHIPMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        response: action.response,
        error: null
      };
    case types.POST_SHIPMENT_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error
      };
    case types.POST_SHIPMENT_RESET:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};
