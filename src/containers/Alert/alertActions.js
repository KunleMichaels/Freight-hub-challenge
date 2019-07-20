export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

export const showAlert = (type, message, dispatch) => {
    setTimeout(() => (
        dispatch(hideAlert())
    ), 7000)
    return {
        type: SHOW_ALERT,
        payload: {
            type,
            message
        }
    }
}

export const hideAlert = () => {
    return {
        type: HIDE_ALERT
    }
}
