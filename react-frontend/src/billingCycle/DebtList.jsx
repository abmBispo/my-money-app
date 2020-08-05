import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from '../common/layout/Grid';
import { Field, arrayInsert, arrayRemove } from 'redux-form';
import Input from '../common/form/Input';

class DebtList extends React.Component {
    add(index, item = {}) {
        this.props.arrayInsert('billingCycleForm', 'debts', index, item);
    }

    remove(index) {
        if (this.props.debts.length > 1) {
            this.props.arrayRemove('billingCycleForm', 'debts', index)
        }
    }

    renderRows() {
        const debts = this.props.debts || []
        return (
            debts.map((debt, index) => {
                return (
                    <tr key={index}>
                        <td>
                            <Field
                                name={`debts[${index}].name`}
                                component={Input}
                                placeholder='Debt name' />
                        </td>
                        <td>
                            <Field
                                name={`debts[${index}].value`}
                                component={Input}
                                placeholder='Debt value' />
                        </td>
                        <td>
                            <Field
                                name={`debts[${index}].status`}
                                component={Input}
                                placeholder='Debt status' />
                        </td>
                        <td>
                            <button type='button' className='btn btn-success' onClick={() => this.add(index + 1)}>
                                <i className='fa fa-plus'></i>
                            </button>
                            <button type='button' className='btn btn-warning' onClick={() => this.add(index + 1, credit)}>
                                <i className='fa fa-clone'></i>
                            </button>
                            <button type='button' className='btn btn-danger' onClick={() => this.remove(index)}>
                                <i className='fa fa-trash-o'></i>
                            </button>
                        </td>
                    </tr>
                )
            })
        );
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Debts</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({arrayInsert, arrayRemove}, dispatch);
export default connect(null, mapDispatchToProps)(DebtList);