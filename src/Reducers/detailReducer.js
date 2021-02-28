const initState={
    game:{
        platforms:[]
    },
    screen:[],
    isLoading:true
        
    
}
export const detailReducer=(state=initState,action)=>{
    switch(action.type)
    {
        case "GAME-DETAILS":
            return{
                ...state,
                game:action.payload.details,
                screen:action.payload.screen,
                isLoading:false,

            }
            case "LOADING_DETAIL":
                return{
                    ...state,
                    isLoading:true

                }
            default :
            return {
                ...state
            }

            
    }
}