import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {useHistory} from 'react-router-dom'
import {smallImage} from '../util'
import playstation from '../img/playstation.svg'
import gamepad from '../img/gamepad.svg'
import apple from '../img/apple.svg'
import nintendo from '../img/nintendo.svg'
import xbox from '../img/xbox.svg'
import starempty from '../img/star-empty.png'
import starfull from '../img/star-full.jpg'
import starhalf from '../img/star-half.png'

const GameDetail=({pathId})=>{
    const history=useHistory();
    const {game,screen,isLoading}=useSelector((state)=>state.details)
    const closeGameDetail=(e)=>{
        
      const element=e.target;
     if(element.classList.contains("shadow"))
     {
        document.body.style.overflow="auto"
       history.push("/")
     }
    }
    const renderStars=()=>{
        const stars=[];
        const s=game.rating;
        for(let i=1;i<=Math.floor(s);i++)
        {
            if(s>=i)
            stars.push(<img src={starfull} key={i} alt="star"></img>)

            else
            stars.push(<img src={starempty} key={i} alt="star"></img>)

        }
        if(!Number.isInteger(s))
        stars.push(<img src={starhalf} key={pathId} alt="star"></img>)
        for(let i=Math.ceil(s);i<5;i++)
        {
            stars.push(<img src={starempty} key={i} alt="star"></img>)
        }

        return stars;
    }
    const closeGame=()=>{
         document.body.style.overflow="auto"
       history.push("/")
    }
    const getPlatform=(name)=>{
        switch(name){
            case "Playstation 4":
                return playstation
            case "Xbox One":
                return xbox
            case "Nintendo Switch":
                return nintendo
           case "Pc":
               return apple
               default:
                   return gamepad
        }
    }
   
    return(
        <>
        {!isLoading && (
        
        <CardShadow className="shadow" onClick={closeGameDetail}>
            
            <Detail layoutId={pathId}>
                 <Close>
                    <button onClick={closeGame}>X</button>
                    </Close>
               
               
                <Stats>
                    <Rating>
                        <motion.h3 layoutId={`title${pathId}`}>{game.name}</motion.h3>
                        <p>Rating:{game.rating}</p>
                        {renderStars()}
                    </Rating>
                   <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            {game.platforms.map((data)=>
                            (
                             <img src={getPlatform(data.platform.name)} alt=""></img>
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <motion.img src={smallImage(game.background_image,1280)} alt=""/>
                </Media>
                <Description>
           <p>{game.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screen.map((photos)=>
                    (
                        <img src={smallImage(photos.image,1280)} key={photos.id} alt=""/>
                    ))}
                </div>
            </Detail>
        </CardShadow>
        )}
        </>
    )
}
const CardShadow=styled(motion.div)`
width:100%;
min-height:100vh;
overflow-y:scroll;

position:fixed;
background:rgba(0,0,0,0.5);
top:0;
left:0;
  &::-webkit-scrollbar{
        width:0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color:#ff7676;

    }
    &::-webkit-scrollbar-track{
        background:white;
    }


`
const Detail=styled(motion.div)`
border-radius:1rem;
width:80%;
margin-top:3rem;
padding:2rem ;
background:white;
position:absolute;
left:7.3%;

color:black;
img{
    width:100%;
}
`
const Stats=styled(motion.div)`
display:flex;
align-items:center;
justify-content:space-between;`
const Rating=styled(motion.div)`
img{
    display: inline;
    height:2rem;
    width:2rem;
}

`
const Info=styled(motion.div)`
text-align:center;

`
const Platforms=styled(motion.div)`

display:flex;

justify-content:space-evenly;
img{
    margin-left:3rem;
}

`
const Media=styled(motion.div)`
margin-top:5rem;
img{
    width:100%;
    
   
}

`
const Description=styled(motion.div)`
 margin:5rem 0rem;
 `
 const Close=styled(motion.div)`
 
 padding-left:98%;
 
 
 button{
     border:none;
     height:2rem;
     width:2rem;
     text-align:center;
     font-size:1rem;
     font-weight:bolder;
     background:#f01023;
         color:white;
     
     
     
     &:hover{
         background-color:#ac1717
        
         
     }

 }
 `
export default GameDetail;