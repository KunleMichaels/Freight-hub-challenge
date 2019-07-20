import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../Layout/index";
import Loading from "../../common/PreLoader";

const Dashboard = lazy(() => import("../Dashboard/Router"));
// const Shipments = lazy(() => import("../Shipments/Router"));

const Router = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
        <main>
          <div>
            <Layout />
            <div className="container__wrap">
              <Route exact path="/" component={Dashboard} />
            </div>
          </div>
        </main>
    </Switch>
  </Suspense>
);

export default Router;
