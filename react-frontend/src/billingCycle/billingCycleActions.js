import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';

const BASE_URL = 'http://localhost:3000/api';

export function getList() {
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: axios.get(`${BASE_URL}/billingCycles`)
    }
}

export function create(values) {
    return (dispatch) => {
        axios.post(`${BASE_URL}/billingCycles`, values)
        .then((res) => {
            toastr.success('Saved billing cycle successfully')
            dispatch([
                resetForm('billingCycleForm'),
                getList(),
                selectTab('tabList'),
                showTabs('tabList', 'tabAdd')
            ])
        })
        .catch((err) => err.response.data.errors.forEach((error) => toastr.error('Got errors on billing cycle creation: ', error)))        
    }
}