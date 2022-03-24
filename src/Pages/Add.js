import React, {useState}  from 'react'
import styled from "styled-components";
import { useDispatch } from "react-redux" ;
import { useHistory } from "react-router" ;
import {addNewProduct} from "../Redux/actions/Action"


const Container = styled.div`
width:100vw;
height:100vh;
display:flex ;
align-items :center;
justify-content :center;
`
const Wrapper = styled.div`
width:40%;
padding:20px;
background-color:white;
` ;
const Title = styled.h1`
font-size :24px; 
font-weight: 300 bold;
` ;
const Form = styled.form`
display:flex ;
flex-direction : column;
` ;
const Input = styled.input`
flex:1;
min-width:40%;
margin :20px 10px 0px 0px;
padding:10px;
` ;

const Button = styled.button`
width:40%;
border:none ;
padding:15px 20px;
background-color:gray;
color: white ;
cursor: pointer ;
` ;


function Add() {
    const [name, setName]=useState("")
    const [category, setCategory] = useState("")
    const [img, setImg]=useState("")
    const [price, setPrice] = useState("")
    const dispatch=useDispatch()
    const history= useHistory()
    
  return (
    <Container>
     <Wrapper>
         <Title>ADD NEW ARTICLE</Title>
         <Form>
             <Input placeholder =" Article Name" onChange={(e)=>setName(e.target.value)} />
             <Input placeholder ="Category" onChange={(e)=>setCategory(e.target.value)} />
             <Input placeholder ="Image" onChange={(e)=>setImg(e.target.value)}  />
             <Input placeholder ="Price"onChange={(e)=>setPrice(e.target.value)}  />
             </Form>
             <br/>
             <Button onClick={()=>  {dispatch(addNewProduct({name,category,img,price})) ;   history.push('/ProductList')   } }   >Add</Button>
         
     </Wrapper>

    </Container>
  )
}

export default Add
