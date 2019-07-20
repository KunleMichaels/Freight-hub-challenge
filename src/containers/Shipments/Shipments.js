import React from 'react';
import { Link } from "react-router-dom";
import { Typography, Row, Input, Divider, Col, Button } from 'antd';
import { connect } from "react-redux";
import { getShipments, deleteShipment } from "./actions/shipmentsActions";
import Table from './components/ShipmentsTable';
import { MdModeEdit, MdPageview, MdDelete } from "react-icons/md";

const { Title, Text } = Typography;
const { Search } = Input;

class Shipments extends React.Component {

    componentDidMount(){
        const { getShipments } = this.props;
        getShipments();
    }

    render(){
        const { shipments, history, location, deleteShipment } = this.props;

        const columns = [
            {
              title: "Shipment ID",
              dataIndex: "shipmentid",
              key: 'shipmentid',
              sorter: (a, b) => a.shipmentid.localeCompare(b.shipmentid)
            },
            {
              title: "User ID",
              dataIndex: "userid",
              sorter: (a, b) => a.userid.localeCompare(b.userid),
              key: 'userid'
        
            },
            {
              title: "Name",
              dataIndex: "name",
              sorter: (a, b) => { return a.name.localeCompare(b.name)},
              key: 'name'
            },
            {
              title: "Mode",
              dataIndex: "mode",
              sorter: (a, b) => { return a.mode.localeCompare(b.mode)},
              key: 'mode'
            },
            {
              title: "Type",
              dataIndex: "type",
              key: 'type'
            },
            {
              title: "Origin",
              dataIndex: "origin",
              sorter: (a, b) => { return a.origin.localeCompare(b.origin)},
              key: 'origin'
            },
            {
              title: "Destination",
              dataIndex: "destination",
              sorter: (a, b) => { return a.destination.localeCompare(b.destination)},
              key: 'destination'
            },
            {
              title: "Status",
              dataIndex: "status",
              key: 'status'
            },
            {
              title: "Total",
              dataIndex: "total",
              sorter: (a, b) => a.total - b.total,
              key: 'total'
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                  <span className='pointer'>
                    <span onClick={() => history.push(`${location.pathname}/edit/${record.shipmentid}`)}>{MdModeEdit({ size: 20 })}</span>
                    <Divider type="vertical" />
                    <span className='text-green' onClick={() => history.push(`${location.pathname}/view/${record.shipmentid}`)}>{MdPageview({ size: 20 })}</span>
                    <Divider type="vertical" />
                    <span className='text-red' onClick={() => deleteShipment(record.shipmentid)}>{MdDelete({ size: 20 })}</span>
                  </span>
                ),
              },
          ];

          
        const data = shipments.map((shipment, index) => {
            const { id, userId, name, mode, type, origin, destination, status, total } = shipment
            return {
                key: index,
                shipmentid: id,
                userid: userId,
                name,
                mode,
                type,
                origin,
                destination,
                status,
                total
            }
        })
        return (
            <section className='route_section'>
                <Col span={20} className='mt-3'>
                    <Row>
                        <Title level={2}><Text type="secondary">Shipments Table</Text></Title>
                        <Button type='primary'>
                            <Link
                                to="/shipments/new"
                            >
                                Create shipment
                            </Link>
                        </Button>
                    </Row>
                    <Col lg={{ offset: 12, span: 12 }} className='mt-3 mb-3'>
                        <Search placeholder="search by Shipment ID" enterButton />
                    </Col>
                    <Table columns={columns} data={data}/>
                </Col>
            </section>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        shipments: state.shipments.shipments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getShipments: () => dispatch(getShipments()),
        deleteShipment: (id) => dispatch(deleteShipment(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shipments);