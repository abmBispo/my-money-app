import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectTab, showTabs } from '../common/tab/tabActions'
import { create } from './billingCycleActions';

import ContentHeader from '../common/templates/ContentHeader';
import Content from '../common/templates/Content';
import Tabs from '../common/tab/Tabs';
import TabsHeader from '../common/tab/TabsHeader';
import TabsContent from '../common/tab/TabsContent';
import TabHeader from '../common/tab/TabHeader';
import TabContent from '../common/tab/TabContent';
import List from './billingCycleList';
import Form from './BillingCycleForm';

class BillingCycles extends React.Component {

    componentDidMount() {
        this.props.selectTab('tabList');
        this.props.showTabs('tabList', 'tabAdd');
    }

    render() {
        return (
            <div>
                <ContentHeader title='Billing Cycles' subtitle='register' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='list' icon='bars' target='tabList' />
                            <TabHeader label='Add' icon='plus' target='tabAdd' />
                            <TabHeader label='Edit' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Delete' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabAdd'>
                                <Form onSubmit={this.props.create} />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                Tab update.
                            </TabContent>
                            <TabContent id='tabDelete'>
                                Tab Delete.
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({ selectTab, showTabs, create }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycles);