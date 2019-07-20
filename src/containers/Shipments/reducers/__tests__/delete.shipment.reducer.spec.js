import { deleteShipment } from "../deleteShipmentReducers";
import types from "../../constants/shipmentsConstants";

const initialState = {
  loading: false,
  success: false,
  request: null,
  response: null,
  error: null
};

describe("Delete Shipments reducer", () => {
  it("should return the initial state", () => {
    expect(deleteShipment(undefined, {})).toEqual(initialState);
  });

  it("should handle DELETE_SHIPMENTS_RESET", () => {
    expect(
      deleteShipment(initialState, {
        type: types.DELETE_SHIPMENT_RESET
      })
    ).toEqual(initialState);
  });

  it("should handle DELETE_SHIPMENT", () => {
    expect(
      deleteShipment(initialState, {
        type: types.DELETE_SHIPMENT,
        request: 44
      })
    ).toEqual({
      ...initialState,
      loading: true,
      request: 44
    });
  });

  it("should handle DELETE_SHIPMENT_SUCCESS", () => {
    expect(
      deleteShipment(initialState, {
        type: types.DELETE_SHIPMENT_SUCCESS,
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

  it("should handle DELETE_SHIPMENT_FAILURE", () => {
    expect(
      deleteShipment(initialState, {
        type: types.DELETE_SHIPMENT_FAILURE,
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
