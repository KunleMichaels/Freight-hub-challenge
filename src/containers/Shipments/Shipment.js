import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'antd';
import Shipment from './components/Shipment';
import { viewShipment, resetViewShipment } from "./actions/shipmentsActions";

class ShipmentContainer extends React.Component {

    componentDidMount(){
        const { id } = this.props.match.params
        const { viewShipment, resetViewShipment } = this.props;
        if (id) {
            viewShipment(id);
          } else {
            resetViewShipment();
          }
    }

    fetchShipment() {
        this.props.viewShipment(this.props.match.params.id);
      }

    render(){
        const { match, shipment } = this.props;
        return (
            <Row>
                <Shipment
                    shipmentId={match.params.id}
                    shipment={shipment}
                    fetchData={this.fetchShipment}
                />
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shipment: state.viewShipment
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        viewShipment: (id) => dispatch(viewShipment(id)),
        resetViewShipment: () => dispatch(resetViewShipment(

        ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShipmentContainer);