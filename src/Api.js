const  base_url="https://api.rawg.io/api/";
const getCurrentMonth=()=>{
    const month=new Date().getMonth()+1;
    if(month<10)
    {
    return `0${month}`
    }
    else{
        return month;
    }
}
const getCurrentDay=()=>{
    const day=new Date().getDate();
    if(day<10)
    {
    return `0${day}`
    }
    else{
        return day;
    }
}
const currentYear=new Date().getFullYear();
const currentMonth=getCurrentMonth();
const currentDay=getCurrentDay();
const currentDate=`${currentYear}-${currentMonth}-${currentDay}`
const previousYear=`${currentYear-1}-${currentMonth}-${currentDay}`
const nextYear=`${currentYear+1}-${currentMonth}-${currentDay}`
 

const popularGames=`games?dates=${previousYear},${currentDate}&ordering=-rating&page_size=10&key=8fb5a06509c24378ad37cfbc27225495`;
const upcomingGames=`games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&key=8fb5a06509c24378ad37cfbc27225495`;
const newGames=`games?dates=${previousYear},${currentDate}&ordering=-released&page_size=10&key=8fb5a06509c24378ad37cfbc27225495`;


 export const popularGamesUrl=()=>`${base_url}${popularGames}`;
 export const upcomingGamesUrl=()=>`${base_url}${upcomingGames}`;
 export const newGamesUrl=()=>`${base_url}${newGames}`;
 export const gameDetailsUrl=(game_id)=>`${base_url}games/${game_id}?key=8fb5a06509c24378ad37cfbc27225495`;
 export const screenshotUrl=(game_id)=>`${base_url}games/${game_id}/screenshots?key=8fb5a06509c24378ad37cfbc27225495`;
 export const searchGameUrl=(game_name)=>`${base_url}games?search=${game_name}&page_size=9&key=8fb5a06509c24378ad37cfbc27225495`;