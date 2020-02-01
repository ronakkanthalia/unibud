const initialState = {
    suggetions:[],
    bookList:[]
};



const Reducers = (state = initialState, action) => {
    switch(action.type){
        case 'SET_SUGGETION':
            return {...state,suggetions:action.suggetions};
        case 'SET_LIST':
            return {...state,suggetions:[],bookList:[...state.bookList, action.book]};
        default :
        return state;
    }
}

export default Reducers;