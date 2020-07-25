const INITIAL_STATE = { summary: { credit: 100, debt: 0 } };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'BILLING_SUMMARY_FETCH':
            return { ...state, summary: action.payload.data }
        default:
            return state;
    }
}