import { combineReducers } from "redux";
import alert from "./containers/Alert/alertReducer";
import { reducer } from "redux-form";
import {
  shipments,
  postShipments,
  viewShipment,
  deleteShipment
} from "./containers/Shipments/reducers";

export default combineReducers({
  form: reducer,
  alert,
  shipments,
  postShipments,
  viewShipment,
  deleteShipment
});
