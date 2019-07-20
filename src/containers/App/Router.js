import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import Loading from "../../common/PreLoader";
import Alert from '../Alert/Alert';

const Dashboard = lazy(() => import("../Dashboard/Router"));
const Shipments = lazy(() => import("../Shipments/Router"));

const Router = ({ alert }) => (
  <Suspense fallback={<Loading />}>
    <Switch>
        <section className='app'>
            <Header />
            <section className='app-body'>
                <Sidebar />
                {
                    alert.visible ? (
                        <div className='alertStyle'>
                            <Alert
                                message={alert.message}
                                type={alert.type}
                                />
                        </div>
                        ) : null
                }
                <main>
                    <div className="main-content">
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/shipments" component={Shipments} />
                    </div>
                </main>
            </section>
        </section>
    </Switch>
  </Suspense>
);

const mapStateToProps = (state) => {
    return {
        alert: state.alert
    }
}


export default connect(mapStateToProps)(Router); 
