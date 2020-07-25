import React from 'react';
import ContentHeader from '../common/templates/ContentHeader';
import Content from '../common/templates/Content';
import ValueBox from '../common/widget/ValueBox';
import Row from '../common/layout/Row';
import { connect } from 'react-redux';
import { getSummary } from './dashboardActions';
import { bindActionCreators } from 'redux';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.getSummary();
    }

    render() {
        const { credit, debt } = this.props
        return (
            <div>
                <ContentHeader title='Dashboard' subtitle='Version 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total de créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} text='Total de débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money' value='R$ 10,00' text='Valor Consolidado' />
                    </Row>
                </Content>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ credit: state.dashboard.summary.credit, debt: state.dashboard.summary.debt });
const mapDispatchToProps = (dispatch) => bindActionCreators({ getSummary }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);