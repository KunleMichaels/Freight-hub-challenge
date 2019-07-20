import React from "react";
import { Spinner } from "reactstrap";
import { Button, Col, Row, } from 'antd';
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const Shipment = props => {
  const { shipment, shipmentId, fetchData } = props;
  const foundShipment = shipment.response && !shipment.loading;

  return (
    <section className='route_section'>
        {
          foundShipment ? (
              <Row className="project-summary">
                <Row>
                <Col span={20}>
                  <div className="card__title">
                    <h4 className="bold-text">
                      {shipment.response.name}: {shipment.response.id}
                      <br />
                      <small>
                        Shipment from {shipment.response.origin} to{" "}
                        {shipment.response.destination}
                      </small>
                    </h4>
                  </div>
                </Col>
                <Col span={4}>
                  <Button type='primary'>
                    <Link
                      to={`/shipments/edit/${shipmentId}`}
                      className="btn btn-sm btn-outline-secondary project-summary__btn"
                    >
                      Edit
                    </Link>
                  </Button>
                </Col>
                </Row>
                <Row>
                <Col span={8}>
                  <Row>
                    <Col span={6} className="bold-text">User ID</Col>
                    <Col span={18}>
                      <p>{shipment.response.userId}</p>
                    </Col>

                    <Col span={6} className="bold-text">Mode</Col>
                    <Col span={18}>
                      <p>{shipment.response.mode}</p>
                    </Col>

                    <Col span={6} className="bold-text">Type</Col>
                    <Col span={18}>
                      <p>{shipment.response.type}</p>
                    </Col>

                    <Col span={6} className="bold-text">Status</Col>
                    <Col span={18}>
                      <p>{shipment.response.status}</p>
                    </Col>

                    <Col span={6} className="bold-text">Total</Col>
                    <Col span={18}>
                      <p>{shipment.response.total}</p>
                    </Col>
                  </Row>
                </Col>
                <Col md={16}>
                  <Row >
                    <Col span={4} className="bold-text">Cargo</Col>
                    <Col span={20}>
                      {shipment.response.cargo &&
                      shipment.response.cargo.length ? (
                        shipment.response.cargo.map((cargo, index) => (
                          <Row  key={index}>
                            <Col span={4} className="bold-text">Type</Col>
                            <Col span={20}>
                              <p>{cargo.type}</p>
                            </Col>
                            <Col span={4} className="bold-text">Description</Col>
                            <Col span={20}>
                              <p>{cargo.description}</p>
                            </Col>
                            <Col span={4} className="bold-text">Volume</Col>
                            <Col span={20}>
                              <p>{cargo.volume}</p>
                            </Col>
                          </Row>
                        ))
                      ) : (
                        <p className="text-muted">-- No cargo found --</p>
                      )}
                    </Col>
                    <Col span={4} className="bold-text">Services</Col>
                    <Col span={20}>
                      {shipment.response.services &&
                      shipment.response.services.length ? (
                        shipment.response.services.map((service, index) => (
                          <Row  key={index}>
                            <Col span={4} className="bold-text">Type</Col>
                            <Col span={20}>
                              <p>{service.type}</p>
                            </Col>
                          </Row>
                        ))
                      ) : (
                        <p className="text-muted">-- No service found --</p>
                      )}
                    </Col>
                  </Row>
                </Col>
              </Row>
              </Row>
              )
             : (
            <div className="text-center">
              {shipment && shipment.loading ? (
                <div>
                  <Spinner
                    color="success"
                    className="my-4"
                    style={{ width: "6rem", height: "6rem" }}
                  />
                  <h4 className="text-secondary">
                    Fetching Shipment with ID: ({shipmentId})
                  </h4>
                </div>
              ) : (
                <div>
                  <h4 className="text-danger">
                    {shipment.error
                      ? `Something went wrong. Could not fetch shipment with ID: (${shipmentId})`
                      : `Shipment with ID (${shipmentId}) not found`}
                  </h4>
                  <Button color="primary" outline size="sm" onClick={fetchData}>
                    Try Again
                  </Button>
                </div>
              )}
            </div>
          )}
          {shipment && !shipment.loading ? (
            <h5 className="bold-text mt-4">
              <Link to="/shipments">
                <MdArrowBack size={20} /> Back to shipments
              </Link>
            </h5>
          ) : null}
    </section>
  );
};

export default Shipment;
