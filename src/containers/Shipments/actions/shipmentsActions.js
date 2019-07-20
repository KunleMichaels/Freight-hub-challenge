import { shipmentsService } from "../services/shipmentsService";
import { showAlert } from '../../Alert/alertActions';
import types from "../constants/shipmentsConstants";
import { reset } from "redux-form";

export const getShipments = () => {
  return async dispatch => {
    dispatch(request());
    try {
      const response = await shipmentsService.getShipments();
      response && dispatch(success(response));
    } catch (error) {
      dispatch(failure(error));
      dispatch(
        showAlert(
          "danger",
          "Failed to get shipments",
          dispatch
        )
      );
    }
  };

  function request(){
    return {
      type: types.GET_SHIPMENTS
    };
  }
  function success (response) {
    return {
      type: types.GET_SHIPMENTS_SUCCESS,
      response
    };
  }
  function failure (error) {
    return {
      type:types.GET_SHIPMENTS_FAILURE,
      error
    };
  }

};

export const viewShipment = id => {
  return async dispatch => {
    dispatch(request(id));
    try {
      const response = await shipmentsService.viewShipment(id);
      response && dispatch(success(response));
    } catch (error) {
      dispatch(failure(error));
      dispatch(
        showAlert(
          "danger",
          `Failed to get selected shipment: ${id}`,
          dispatch
        )
      );
    }
  };

  function request(request) {
    return {
      type:types.GET_SHIPMENT,
      request
    };
  }
  function success(response) {
    return {
      type: types.GET_SHIPMENT_SUCCESS,
      response
    };
  }
  function failure(error) {
    return {
      type: types.GET_SHIPMENT_FAILURE,
      error
    };
  }
};

export const deleteShipment = id => {
  return async dispatch => {
    dispatch(request(id));
    try {
      const response = await shipmentsService.deleteShipment(id);
      response && dispatch(success(response));
      dispatch(getShipments());
      dispatch(showAlert("success", `Deleted shipment with ID: ${id}`));
    } catch (error) {
      dispatch(failure(error));
      dispatch(
        showAlert(
          "danger",
          `Failed to delete shipment: ${id}`,
          dispatch
        )
      );
    }
  };

  function request(request) {
    return {
      type: types.DELETE_SHIPMENT,
      request
    };
  }
  function success(response) {
    return {
      type: types.DELETE_SHIPMENT_SUCCESS,
      response
    };
  }
  function failure(error) {
    return {
      type: types.DELETE_SHIPMENT_FAILURE,
      error
    };
  }
};

export const postShipments = (values, id) => {
  const requestBody = createRequestBody(values);
  return async dispatch => {
    dispatch(request(requestBody));
    try {
      const response = await shipmentsService.postShipments(requestBody, id);
      dispatch(success(response));
      dispatch(reset("shipment_form"));
      dispatch(
        showAlert(
          "success",
          id ? "Shipment updated successfully" : "Shipment saved successfully",
          dispatch
        )
      );
      dispatch(getShipments());
      dispatch(resetPostShipment());
      if (id) {
        dispatch(viewShipment(id));
      } else {
        dispatch(resetViewShipment());
      }
    } catch (error) {
      dispatch(failure(error));
      dispatch(
        showAlert(
          "danger",
          id ? "Failed to update shipment" : "Failed to save shipment",
          dispatch
        )
      );
    }
  };

  function request(request) {
    return { type: types.POST_SHIPMENT, request };
  }
  function success(response) {
    return {
      type: types.POST_SHIPMENT_SUCCESS,
      response
    };
  }
  function failure(error) {
    return {
      type: types.POST_SHIPMENT_FAILURE,
      error
    };
  }
};

export const resetViewShipment = () => {
  return { type: types.VIEW_SHIPMENT_RESET };
};

export const resetPostShipment = () => {
  return { type: types.POST_SHIPMENT_RESET };
};

const createRequestBody = values => {
  let requestObject = {
    id: values.id,
    name: values.name,
    cargo: values.cargo,
    mode: values.mode,
    type: values.type,
    destination: values.destination,
    origin: values.origin,
    services: values.services,
    total: values.total,
    status: values.status,
    userId: values.userId
  };

  return requestObject;
};