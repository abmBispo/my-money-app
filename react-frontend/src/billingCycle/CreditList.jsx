import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from '../common/layout/Grid';
import { Field, arrayInsert, arrayRemove } from 'redux-form';
import Input from '../common/form/Input';

class CreditList extends React.Component {
    add(index, item = {}) {
        this.props.arrayInsert('billingCycleForm', 'credits', index, item);
    }

    remove(index) {
        if (this.props.credits.length > 1) {
            this.props.arrayRemove('billingCycleForm', 'credits', index)
        }
    }

    renderRows() {
        const credits = this.props.credits || []
        return (
            credits.map((credit, index) => {
                return (
                    <tr key={index}>
                        <td>
                            <Field
                                name={`credits[${index}].name`}
                                component={Input}
                                placeholder='Credit name' />
                        </td>
                        <td>
                            <Field
                                name={`credits[${index}].value`}
                                component={Input}
                                placeholder='Credit value' />
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
                    <legend>Credits</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
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
export default connect(null, mapDispatchToProps)(CreditList);