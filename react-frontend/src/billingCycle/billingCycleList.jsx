import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getList } from './billingCycleActions';

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
const mapDispatchToProps = (dispatch) => bindActionCreators({ getList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);