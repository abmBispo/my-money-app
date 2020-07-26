export function selectTab(tabId) {
    console.log('TeSte');
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}