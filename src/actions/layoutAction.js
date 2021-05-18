export const changeSidebarState = (val) => async (dispatch) => {
    dispatch({ type: 'set', payload: val });
}