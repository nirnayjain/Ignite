const initState={
    popular : [],
    newGames : [],
    upcoming : [],
    searched:[]

}


export const gameReducer=(state=initState,action) => {
    switch (action.type){
        case "FETCH GAMES":
        return {...state,
            popular:action.payload.popular,
            newGames:action.payload.newGames,
            upcoming:action.payload.upcoming  }
        case "FETCH_SEARCHED":
            return{
                ...state,
                searched:action.payload.searched
            }
            case "CLEAR GAMES":
                return{
                    ...state,
                    searched:[]
                }

            default:
        return {...state}
    }

}
