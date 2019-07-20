import { postShipments } from "../postShipmentsReducers";
import types from "../../constants/shipmentsConstants";

const initialState = {
  loading: false,
  success: false,
  request: null,
  response: null,
  error: null
};

describe("POST Shipments reducer", () => {
  it("should return the initial state", () => {
    expect(postShipments(undefined, {})).toEqual(initialState);
  });

  it("should handle POST_SHIPMENT", () => {
    expect(
      postShipments(initialState, {
        type: types.POST_SHIPMENT_RESET
      })
    ).toEqual(initialState);
  });

  it("should handle POST_SHIPMENT", () => {
    expect(
      postShipments(initialState, {
        type: types.POST_SHIPMENT,
        request: {}
      })
    ).toEqual({
      ...initialState,
      loading: true,
      request: {}
    });
  });

  it("should handle POST_SHIPMENT_SUCCESS", () => {
    expect(
      postShipments(initialState, {
        type: types.POST_SHIPMENT_SUCCESS,
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

  it("should handle POST_SHIPMENT_FAILURE", () => {
    expect(
      postShipments(initialState, {
        type: types.POST_SHIPMENT_FAILURE,
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
