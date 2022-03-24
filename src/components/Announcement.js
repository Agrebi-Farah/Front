import React from 'react' ;
import styled from "styled-components";
import {Link} from 'react-router-dom' ;
import {useDispatch} from 'react-redux'
import {getallproduct} from "../Redux/actions/Action"
const Container = styled.div`
height:50px;
background-color: black ;
color: #ebdcc7  ;
display: flex ;
align-items :center;
justify-content :center;
font-size: 20px;
font-weight:500;
`

const MenuItem = styled.div`
cursor: pointer;
margin-left :25px;
text-decoration: none;
`
function Announcement() {
  
  const dispatch=useDispatch()
  return (
    <Container>
        <Link to="/"><MenuItem className="color">HOME</MenuItem></Link>
        <Link to="/ProductList" onClick={()=> dispatch(getallproduct())    }  ><MenuItem className="color">PRODUCT LIST </MenuItem></Link>
        <Link to="/Product/"><MenuItem className="color">PRODUCT </MenuItem></Link>
        <Link to="/Cart" ><MenuItem className="color">CART</MenuItem> </Link>
        <Link to="/Add" ><MenuItem className="color">ADD</MenuItem> </Link>

        
    </Container>
  )
}

export default Announcement