import axios from "axios"
import {newGamesUrl, popularGamesUrl, upcomingGamesUrl,searchGameUrl} from '../Api'
 export const loadGames=()=> async(dispatch)=>{
     const poupularData=await axios.get(popularGamesUrl());
     const upcomingData=await axios.get(upcomingGamesUrl());
     const newData=await axios.get(newGamesUrl());
     dispatch({
         type:"FETCH GAMES",
         payload: {
             popular:poupularData.data.results,
             newGames:newData.data.results,
             upcoming:upcomingData.data.results
         },
     })
 }
 export const fetchSearch=(game_name)=>async(dispatch)=>{
     const searchGames=await axios.get(searchGameUrl(game_name))
     dispatch({
         type:"FETCH_SEARCHED",
         payload:{
             searched:searchGames.data.results
         }
     })
 }
