import { viewShipment } from "../viewShipmentReducers";
import types from "../../constants/shipmentsConstants";

const initialState = {
  loading: false,
  success: false,
  request: null,
  response: null,
  error: null
};

describe("View Shipment reducer", () => {
  it("should return the initial state", () => {
    expect(viewShipment(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_SHIPMENT_RESET", () => {
    expect(
      viewShipment(initialState, {
        type: types.GET_SHIPMENT_RESET
      })
    ).toEqual(initialState);
  });

  it("should handle GET_SHIPMENT", () => {
    expect(
      viewShipment(initialState, {
        type: types.GET_SHIPMENT,
        request: 44
      })
    ).toEqual({
      ...initialState,
      loading: true,
      request: 44
    });
  });

  it("should handle GET_SHIPMENT_SUCCESS", () => {
    expect(
      viewShipment(initialState, {
        type: types.GET_SHIPMENT_SUCCESS,
        response: { data: [] }
      })
    ).toEqual({
      ...initialState,
      response: { data: [] },
      loading: false,
      success: true,
      error: null
    });
  });

  it("should handle GET_SHIPMENT_FAILURE", () => {
    expect(
      viewShipment(initialState, {
        type: types.GET_SHIPMENT_FAILURE,
        error: { data: [] },
        loading: false,
        response: null,
        success: false
      })
    ).toEqual({
      ...initialState,
      error: { data: [] }
    });
  });
});
