import { combineReducers } from 'redux';
import dashboardReducer from '../dashboard/dashboardReducer';
import tabReducer from '../common/tab/tabReducer';
import billingCycleReducer from '../billingCycle/billingCycleReducer';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import AuthReducer from '../auth/authReducer';

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer,
    billingCycle: billingCycleReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer
});

export default rootReducer;