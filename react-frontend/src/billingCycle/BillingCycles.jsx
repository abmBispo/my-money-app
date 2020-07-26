import React from 'react';
import ContentHeader from '../common/templates/ContentHeader';
import Content from '../common/templates/Content';
import Tabs from '../common/tab/Tabs';
import TabsHeader from '../common/tab/TabsHeader';
import TabsContent from '../common/tab/TabsContent';
import TabHeader from '../common/tab/TabHeader';

class BillingCycles extends React.Component {
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

                        </TabsContent>
                    </Tabs>
                    Billing Cycles.
                </Content>
            </div>
        )
    }
}

export default BillingCycles;