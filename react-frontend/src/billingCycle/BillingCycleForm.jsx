import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../common/form/Input';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { init } from './billingCycleActions';

class BillingCycleForm extends React.Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <div>
                <form role='form' onSubmit={handleSubmit}>
                    <div className='box-body'>
                        <Field
                            name='name'
                            component={Input}
                            label='Name'
                            cols='12 4'
                            placeholder='Type a decription name' />
                        <Field
                            name='month'
                            component={Input}
                            label='Month'
                            cols='12 4'
                            placeholder='mm' />
                        <Field
                            name='year'
                            component={Input}
                            label='Year'
                            cols='12 4'
                            placeholder='yyyy' />
                    </div>
                    <div className='box-footer'>
                        <button type="button" className='btn btn-default' onClick={this.props.init}>Back</button>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);
const mapDispatchToProps = (dispatch) => bindActionCreators({init}, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycleForm);