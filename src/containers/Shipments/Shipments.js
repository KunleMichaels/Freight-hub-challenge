import React from 'react';
import { Link } from "react-router-dom";
import { Typography, Row, Input, Icon, Divider, Col, Button } from 'antd';
import { connect } from "react-redux";
import { getShipments, deleteShipment } from "./actions/shipmentsActions";
import Table from './components/ShipmentsTable';
import Highlighter from 'react-highlight-words';
import { MdModeEdit, MdPageview, MdDelete } from "react-icons/md";

const { Title, Text } = Typography;

class Shipments extends React.Component {
    state = {
        searchText: ''
    }
    componentDidMount(){
        const { getShipments } = this.props;
        getShipments();
    }

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                this.searchInput = node;
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Button
              type="primary"
              onClick={() => this.handleSearch(selectedKeys, confirm)}
              icon="search"
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
              Search
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </div>
        ),
        filterIcon: filtered => (
          <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
          record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => this.searchInput.select());
          }
        },
        render: text => (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[this.state.searchText]}
            autoEscape
            textToHighlight={text.toString()}
          />
        ),
      });

      handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
      };
    
      handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
      };

    render(){
        const { shipments, history, location, deleteShipment } = this.props;

        const columns = [
            {
              title: "Shipment ID",
              dataIndex: "shipmentid",
              key: 'shipmentid',
              ...this.getColumnSearchProps('shipmentid'),
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
                    <Row className='mb-3'>
                        <Title level={2}><Text type="secondary">Shipments Table</Text></Title>
                        <Button type='primary'>
                            <Link
                                to="/shipments/new"
                            >
                                Create shipment
                            </Link>
                        </Button>
                    </Row>
                    <Table columns={columns} data={data}/>
                </Col>
            </section>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        shipments: state.shipments.response
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getShipments: () => dispatch(getShipments()),
        deleteShipment: (id) => dispatch(deleteShipment(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shipments);