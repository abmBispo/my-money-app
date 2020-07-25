import React from 'react';
import ContentHeader from '../common/templates/ContentHeader';
import Content from '../common/templates/Content';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' subtitle='Version 1.0'/>
                <Content>
                    Dashboard
                </Content>
            </div>
        );
    }
}

export default Dashboard;