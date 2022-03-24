import React,{useEffect} from 'react' ;
import styled from "styled-components";
//import {categories} from '../data' ;
import CategoryItem from './CategoryItem' ;
import { useSelector,useDispatch } from "react-redux"
import {getallcategories } from "../Redux/actions/Action" ;
const Container = styled.div`
padding : 20px;
display: flex;
justify-content: space-between ;
`
function Categories() {
  const dispatch= useDispatch()
  useEffect(() => {
    dispatch(getallcategories())
  }, []) 
  
  const categories =useSelector(state=> state.counterReducer.categories )
  return (
    <Container>
     {categories?.map((item) =>(
         <CategoryItem item={item} key={item.id}/>
     ))}
    </Container>
  )
}

export default Categories 
