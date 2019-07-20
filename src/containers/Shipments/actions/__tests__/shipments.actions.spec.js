import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  getShipments,
  viewShipment,
  postShipments,
  resetPostShipment,
  resetViewShipment
} from "../shipmentsActions";
import types from "../../constants/shipmentsConstants";
import * as alertConstants from "../../../Alert/alertActions";

import fetchMock from "fetch-mock";

import { SHIPMENTS_API } from "../../../../api/endpoints";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates GET_SHIPMENTS_SUCCESS when a request is sent", () => {
    fetchMock.getOnce(SHIPMENTS_API, {
      body: { response: [] },
      headers: { "content-type": "application/json" }
    });

    const expectedActions = [
      { type: types.GET_SHIPMENTS },
      {
        type: types.GET_SHIPMENTS_SUCCESS,
        response: { response: [] }
      }
    ];
    const store = mockStore({ todos: [] });

    return store.dispatch(getShipments()).then(() => {
      const actions = store.getActions();
      expect(actions.length).toBe(2);
      expect(actions).toEqual(expectedActions);
    });
  });

  it("creates GET_SHIPMENT_SUCCESS when a request is sent", () => {
    fetchMock.getOnce(`${SHIPMENTS_API}/44`, {
      body: { response: {} },
      headers: { "content-type": "application/json" }
    });

    const expectedActions = [
      { type: types.GET_SHIPMENT, request: 44 },
      {
        type: types.GET_SHIPMENT_SUCCESS,
        response: { response: {} }
      }
    ];
    const store = mockStore({ todos: [] });

    return store.dispatch(viewShipment(44)).then(() => {
      const actions = store.getActions();
      expect(actions.length).toBe(2);
      expect(actions).toEqual(expectedActions);
    });
  });

  it("creates POST_SHIPMENT_SUCCESS when a request is sent", () => {
    fetchMock.postOnce(SHIPMENTS_API, {
      body: { response: {}, responseMessage: "success" },
      headers: { "content-type": "application/json" }
    });
    fetchMock.getOnce(SHIPMENTS_API, {
      body: { response: [], responseMessage: "success" },
      headers: { "content-type": "application/json" }
    });

    const store = mockStore({ todos: [] });

    const expectedActions = [
      { request: {}, type: types.POST_SHIPMENT },
      {
        response: { response: {}, responseMessage: "success" },
        type: types.POST_SHIPMENT_SUCCESS
      },
      {
        meta: {
          form: "shipment_form"
        },
        type: "@@redux-form/RESET"
      },
      {
        alertType: "success",
        message: "Shipment saved successfully",
        type: alertConstants.SHOW_ALERT
      },
      { type: types.GET_SHIPMENTS },
      { type: types.POST_SHIPMENT_RESET },
      { type: types.GET_SHIPMENT_RESET }
    ];

    return store.dispatch(postShipments({})).then(() => {
      const actions = store.getActions();
      expect(actions.length).toBe(7);
      expect(actions).toEqual(expectedActions);
    });
  });
  it(`Handle GET_SHIPMENT_RESET`, () => {
    const expectedAction = {
      type: types.GET_SHIPMENT_RESET
    };
    expect(resetViewShipment()).toEqual(expectedAction);
  });
  it(`RESET POST_SHIPMENT_RESET`, () => {
    const expectedAction = {
      type: types.POST_SHIPMENT_RESET
    };
    expect(resetPostShipment()).toEqual(expectedAction);
  });
});
