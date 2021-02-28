import {createGlobalStyle} from 'styled-components'
const GlobalStyles=createGlobalStyle `
padding:0;
margin:0;
box-sizing:border-box;
body{
    font-family: 'Montserrat', sans-serif;
    width:100%;
}
h2{
    font-family: 'Abril Fatface', cursive;
    font-size:3rem;
    font-weight:lighter;
}
h3{
    font-size:1.3rem;
    color:#333;
    
}
p{
    font-size:1.2rem;
    line-height:200%;
    color:#696969
}
a{
    text-decoration:none;
    color:#333;
}
html{
    &::-webkit-scrollbar{
        width:0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color:darkgray;

    }
}
img{
    display:block;
    
}

` 
export default GlobalStyles;