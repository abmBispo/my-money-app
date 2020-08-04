import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getList, showUpdate, destroy } from './billingCycleActions';

class BillingCycleList extends React.Component {
    componentDidMount() {
        this.props.getList();
    }

    renderRows() {
        const list = this.props.list || []
        return list.map((billing) => (
            <tr key={billing._id}>
                <td>{billing.name}</td>
                <td>{billing.month}</td>
                <td>{billing.year}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(billing)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.destroy(billing)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        ));
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Month</th>
                            <th>Year</th>
                            <th className='table-actions'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({ list: state.billingCycle.list });
const mapDispatchToProps = (dispatch) => bindActionCreators({ getList, showUpdate, destroy }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);