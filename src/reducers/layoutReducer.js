export const sidebarShowReducer = (state = { sidebarShow: 'responsive' }, action) => {
    switch (action.type) {
        case 'set':
            return { sidebarShow: action.payload }
        default:
            return state
    }
}