export default(state, action)=>{
    switch(action.type){
       
        case 'DELETE_BOOKING':
            return{
                ...state,
                data:state.data.filter(data=>data.id!==
                action.payload)
            }
        case 'ADD_BOOKING':
                return{
                    ...state,
                    data:[action.payload,...state.data]
                }
        default:
                return state;
    }
}