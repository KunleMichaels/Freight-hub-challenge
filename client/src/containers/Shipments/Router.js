import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loading from "../../common/PreLoader";

const NotFound = lazy(() => import("../Page404/Page404"));
const ViewShipments = lazy(() => import("./Shipments"));
const ViewShipment = lazy(() => import("./Shipment"));
const ShipmentForm = lazy(() => import("./ShipmentForm"));

const Shipments = ({ match }) => {
  return (
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path={match.url} component={ViewShipments} />
            <Route path={`${match.url}/view/:id`} component={ViewShipment} />
            <Route path={`${match.url}/edit/:id`} component={ShipmentForm} />
            <Route path={`${match.url}/new`} component={ShipmentForm} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
  );
};

export default Shipments;
