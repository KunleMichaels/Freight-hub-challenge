import types from "../constants/shipmentsConstants";

const initialState = {
  loading: false,
  success: false,
  request: null,
  response: null,
  error: null
};

export const viewShipment = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SHIPMENT:
      return {
        ...state,
        loading: true,
        response: null,
        request: action.request
      };
    case types.GET_SHIPMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        response: action.response,
        error: null
      };
    case types.GET_SHIPMENT_FAILURE:
      return {
        ...state,
        loading: false,
        response: null,
        success: false,
        error: action.error
      };
    case types.GET_SHIPMENT_RESET:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};
