import React from 'react';
import { Table } from 'antd';
import { connect } from "react-redux";

class ShipmentsTable extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        const { loading, data, columns } = this.props;
        return (
            <Table columns={columns} dataSource={data} loading={loading} size='small' pagination={ {pageSize: 20 }} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.shipments.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShipmentsTable);