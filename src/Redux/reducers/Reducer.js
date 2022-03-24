import {  GET_CATEGORIES,SIGNUP, SIGNIN, GET_PRODUCT, GET_ONE_PRODUCT, UPDATE_CART, ADD_TO_CART} from "../types/Types";

const initialState = {
    products:[],
    product: {},
    cart: [],
    categories: [],
    user: {}
};

 const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {...state, 
        products:action.payload} ;
        case GET_ONE_PRODUCT:
    return {...state,
       product:action.payload}
      case GET_CATEGORIES:
        return {...state, 
          categories:action.payload} ;
      case SIGNUP:
            return{
               ...state,
               user:action.payload
           }
           case SIGNIN:
         return{
            ...state,
            user:action.payload
        };
        case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, {...action.data, qte: action.qte}],
      };
    case UPDATE_CART:
      return {
        ...state,
        cart: [...action.data],
      };
    default:
      return state;
  }

};
export default counterReducer; 