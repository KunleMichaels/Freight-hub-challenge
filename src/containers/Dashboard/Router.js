import React, { Suspense, lazy } from "react";
import { Container, Row } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import Loading from "../../common/PreLoader";

const NotFound = lazy(() => import("../Page404/Page404"));
const DashboardComponent = lazy(() => import("./Dashboard"));

const Dashboard = ({ match }) => (
  <Container>
    <Row>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={match.url} component={DashboardComponent} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Row>
  </Container>
);

export default Dashboard;
