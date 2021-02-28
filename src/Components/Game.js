import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {loadDetails} from '../actions/detailAction'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import {smallImage} from '../util.js'
const Game=({name,date,image,id})=>{
    const stringPathId=id.toString();
    const dispatch=useDispatch();
    const loadDetailHandler=()=>{
        dispatch(loadDetails(id))
        document.body.style.overflow="hidden";

    }

   
    return(
        <Link to={`/game/${id}`}>
        <StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
            <motion.h3 layoutID={`title${stringPathId}`}>{name}</motion.h3>
            <p>{date}</p>
            <motion.img src={smallImage(image,640)} alt="image" />
        </StyledGame>
        </Link>
    )
}
const StyledGame=styled(motion.div)`
min-height:30vh;
box-shadow:0px 5px 20px rgba(0,0,0,0.2);
text-align:center;
border-radius:1rem;
cursor: pointer;
overflow:hidden;

img{
    width:100%;
    height:40vh;
    object-fit: cover;
    
}`
export default Game;