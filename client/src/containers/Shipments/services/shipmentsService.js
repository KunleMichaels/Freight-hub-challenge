import { make } from "../../../api/requests";
import { SHIPMENTS_API } from "../../../api/endpoints";

export const shipmentsService = {
  getShipments,
  postShipment,
  viewShipment,
  deleteShipment
};

function getShipments() {
  return make("GET", SHIPMENTS_API);
}

function postShipment(request, id) {
  const method = id ? "PUT" : "POST";
  return make(
    method,
    id ? `${SHIPMENTS_API}/${id}` : SHIPMENTS_API,
    null,
    request
  );
}

function viewShipment(id) {
  return make("GET", `${SHIPMENTS_API}/${id}`);
}

function deleteShipment(id) {
  return make("DELETE", `${SHIPMENTS_API}/${id}`);
}
