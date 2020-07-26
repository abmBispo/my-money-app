import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../common/form/Input';

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
                            label='Name'
                            cols='12 4'
                            placeholder='mm' />
                        <Field
                            name='year'
                            component={Input}
                            label='Name'
                            cols='12 4'
                            placeholder='yyyy' />
                    </div>
                    <div className='box-footer'>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({ form: 'billingCycleForm' })(BillingCycleForm);