import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {loadGames} from '../actions/gameAction'
import Game from '../Components/Game'
import styled from 'styled-components'
import {motion,AnimatePresence,AnimateSharedLayout} from 'framer-motion'
import GameDetail from '../Components/GameDetail'
import {useLocation} from 'react-router-dom'
const Home=()=>{
    const location=useLocation();
    const pathid=location.pathname.split("/")[2];
     const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(loadGames())
  },[dispatch])
  const {popular,newGames,upcoming,searched}=useSelector((state)=>state.games)


  return(
      
      <GameList>
          
           {pathid && <GameDetail pathId={pathid} />}
           {searched.length?(
           <div className="searched">
               <h2>Searched Games</h2>
           <Games>
              {searched.map((game)=><Game name={game.name} date={game.released} image={game.background_image} id={game.id} key={game.id}/>)}
          </Games>
          </div>):''}
          {!searched.length?(
           <div className="list">
          <h2>Upcoming Games</h2>
          <Games>
              {upcoming.map((game)=><Game name={game.name} date={game.released} image={game.background_image} id={game.id} key={game.id}/>)}
          </Games>
          <h2>Popular Games</h2>
          <Games>
              {popular.map((game)=><Game name={game.name} date={game.released} image={game.background_image} id={game.id} key={game.id}/>)}
          </Games>
          <h2>New Games</h2>
          <Games>
              {newGames.map((game)=><Game name={game.name} date={game.released} image={game.background_image} id={game.id} key={game.id}/>)}
          </Games>
          </div>
          ):''}
         
      </GameList>
      
  )
}
const GameList=styled(motion.div)`
padding: 0rem 5rem;
h2{
    padding:5rem 0rem;
}

`
const Games=styled(motion.div)`
min-height:80vh;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(500px,1fr));
grid-column-gap:3rem;
grid-row-gap:5rem;
 @media screen and (max-width:767px)
  {
    width:100%;
  }
`
export default Home;