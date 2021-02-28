import axios from 'axios'
import {gameDetailsUrl} from '../Api'
import {screenshotUrl} from '../Api'
export const loadDetails=(id)=> async (dispatch)=>{
    dispatch({
        type:"LOADING_DETAIL"
    })
    const detailsData=await axios.get(gameDetailsUrl(id));
    const screenshot=await axios.get(screenshotUrl(id));
    dispatch({
        type:"GAME-DETAILS",
        payload:{
            details:detailsData.data,
            screen:screenshot.data.results
        }
    })
}