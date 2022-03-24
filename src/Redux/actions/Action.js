import {GET_CATEGORIES,SIGNUP,SIGNIN,GET_PRODUCT,GET_ONE_PRODUCT, UPDATE_CART, ADD_TO_CART} from "../types/Types";
import axios from "axios" ;

export const getallproduct=()=>async(dispatch)=>{

    try {
        
        const res =  await axios.get('http://localhost:8000/Get/Get')
        console.log(res)
    dispatch({type:GET_PRODUCT, payload: res.data.collectionProduct})
    
    
    } catch (error) {
        console.log(error)
    }
    
    
    }; 

export const getallcategories=()=>  async (dispatch)=>{

  try {
      
      const res =  await axios.get('http://localhost:8000/ShowCategories')
      console.log(res)
  dispatch({type:GET_CATEGORIES, payload: res.data.collectionCategories})
  
  
  } catch (error) {
      console.log(error)
  }
  
  
  } ;

export const SignUp = (userData)=>async(dispatch) =>{
    try {
        const user = await axios.post('http://localhost:8000/signup',userData);
        dispatch({
            type:SIGNUP,
            payload:user.data
        })
        
    } catch (error) {
        console.log(error)
    }

} ;
export const SignIn = (userData)=>async(dispatch) =>{
  try {
      const user = await axios.post('http://localhost:8000/signin',userData);
      dispatch({
          type:SIGNIN,
          payload:user.data
      })
      
  } catch (error) {
      console.log(error)
  }

} ;

export const addNewProduct=(newProduct)=>  async (dispatch)=>{

    try {
        
const res=  await  axios.post('/Add',  newProduct )
dispatch(getallproduct())

    } catch (error) {
        console.log(error)
    }

};

export const getOneProduct=(id)=>async(dispatch)=>{

    try {
        const res=  await axios.get(`/Get/${id}`)
        dispatch({type:GET_ONE_PRODUCT, payload:res.data.collectionproduct})
        
    } catch (error) {
        console.log(error)
    }
} ;


export const updateCartHandler = (cart) => {
    return { type: UPDATE_CART, data: cart };
  };
  
  export const addToCartHandler = (product, qte) => {
    return { type: ADD_TO_CART, data: product, qte: qte };
  };