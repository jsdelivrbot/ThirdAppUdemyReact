import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
    switch (action.type){
        case FETCH_WEATHER:
            //Object.assign([], action.payload.data, state); I prefer to use the ... 
            return [ action.payload.data, ...state ];
        default:
            return state;
    }
}
