import React, { Component } from 'react';

import Grid from '../common/layout/Grid';
import Row from '../common/layout/Row';
import ValueBox from '../common/widget/ValueBox';

export default ({ credit, debt }) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox
                    cols='12 4'
                    color='green'
                    icon='bank'
                    value={`R$ ${credit}`}
                    text='Credit amount' />

                <ValueBox
                    cols='12 4'
                    color='red'
                    icon='credit-card'
                    value={`R$ ${debt}`}
                    text='Debt amount' />

                <ValueBox
                    cols='12 4'
                    color='blue'
                    icon='money'
                    value={`R$ ${credit - debt}`}
                    text='Consolidated amount' />
            </Row>
        </fieldset>
    </Grid>
);