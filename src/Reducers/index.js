import {combineReducers} from 'redux'
import {gameReducer} from "./gameReducer"
import {detailReducer} from './detailReducer'
const rootReducer= combineReducers({
    games : gameReducer,
    details: detailReducer,
});
export default rootReducer; 