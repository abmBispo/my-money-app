import React from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import Input from '../common/form/Input';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { init } from './billingCycleActions';
import CreditList from './CreditList';
import DebtList from './DebtList';
import Summary from './Summary';

class BillingCycleForm extends React.Component {
    calculateSummary() {
        console.log(this.props.credits);
        return {
            credit: (this.props.credits || [{value: 0}]).map((credit) => (credit.value || 0)).reduce((acc, cur) => acc + cur),
            debt: (this.props.debts || [{value: 0}]).map((debt) => (debt.value || 0)).reduce((acc, cur) => acc + cur),
        }
    }

    render() {
        const { handleSubmit, credits, debts } = this.props
        const summary = this.calculateSummary();
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

                        <Summary {...summary} />
                        
                        <CreditList
                            cols='12 6'
                            credits={credits} />
                        <DebtList 
                            cols='12 6'
                            debts={debts} />
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
const selector = formValueSelector('billingCycleForm');

const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);
const mapStateToProps = (state) => ({ credits: selector(state, 'credits'), debts: selector(state, 'debts')});
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);