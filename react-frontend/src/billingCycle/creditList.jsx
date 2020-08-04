import React from 'react';
import Grid from '../common/layout/Grid';
import { Field } from 'redux-form';
import Input from '../common/form/Input';

class CreditList extends React.Component {
    renderRows() {
        const credits = this.props.credits || []
        return (
            credits.map((_, index) => {
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
                        <td></td>
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

export default CreditList;