import React from 'react';
import ContentHeader from '../common/templates/ContentHeader';
import Content from '../common/templates/Content';
import ValueBox from '../common/widget/ValueBox';
import Row from '../common/layout/Row';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' subtitle='Version 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value='R$ 10,00' text='Total de créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card' value='R$ 10,00' text='Total de débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money' value='R$ 10,00' text='Valor Consolidado' />
                    </Row>
                </Content>
            </div>
        );
    }
}

export default Dashboard;