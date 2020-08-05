import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';

const BASE_URL = 'http://localhost:3000/api';
const INITIAL_VALUES = { credits: [{}], debts: [{}] }

export function init() {
    return [
        showTabs('tabList', 'tabAdd'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}

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
                dispatch(init())
            })
            .catch((err) => err.response.data.errors.forEach((error) => toastr.error('Got errors on billing cycle creation: ', error)))
    }
}

export function update(values) {
    return (dispatch) => {
        axios.put(`${BASE_URL}/billingCycles/${values._id}`, values)
            .then((res) => {
                toastr.success('Updated billing cycle successfully')
                dispatch(init())
            })
            .catch((err) => err.response.data.errors.forEach((error) => toastr.error('Got errors on billing cycle update: ', error)))
    }
}

export function destroy(values) {
    return (dispatch) => {
        axios.delete(`${BASE_URL}/billingCycles/${values._id}`, values)
            .then((res) => {
                toastr.success('Deleted billing cycle successfully')
                dispatch(init())
            })
            .catch((err) => err.response.data.errors.forEach((error) => toastr.error('Got errors on billing cycle delete: ', error)))
    }
}
export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ];
}