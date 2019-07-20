import {
    SHOW_ALERT,
    HIDE_ALERT
} from './alertActions';

const initialState = {
    visible: false,
    message: '',
    type: ''
}
export default function alert(state=initialState, action){
    switch (action.type) {
        case SHOW_ALERT:
            return (
                Object.assign({}, state, {
                    visible: true,
                    message: action.payload.message,
                    type: action.payload.type
                })
            );
        case HIDE_ALERT:
            return (
                Object.assign({}, state, {
                    visible: false,
                    message: '',
                    type: ''
                })
            );
        default:
            return state;
    }
}