import React from 'react' ;
import styled from "styled-components";
import Navbar from "../components/Navbare" ;
import Announcement from "../components/Announcement" ;
import Products from '../components/Products' ;
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer' ;
import { useState } from 'react' ;
const Container = styled.div`

` ;

const Title = styled.h1`
margin:20px;
` ;
const FilterContainer = styled.div`
display: flex;
justify-content:space-between;
` ;
const Filter = styled.div`
margin:20px;
` ;
const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;

`;
const Select = styled.select`
padding:20px;
margin-right:20px;
`;
const Option = styled.option``;
function ProductList() {
  const [filter,setFilter] = useState({}) ;
 const handleFilter =(e) => {
const value = e.target.value;
setFilter ({
  ...filter,
  [e.target.name]:value
})
 }
  return (
    <Container>
        <Navbar/>
        <br/>
        <Announcement/>
        <Title>Products</Title>
        <FilterContainer>
         <Filter>
           <FilterText>Filter Products:</FilterText>
           <Select name="category" onChange={handleFilter}>
           <Option default value>
             Category
           </Option>
           <Option>Lady Troc</Option>
           <Option>Baby Troc</Option>
           <Option>Home Troc</Option>
           </Select>
         <Select name="color" onChange={handleFilter}>
           <Option default value>
             Color
           </Option>
           <Option>Black</Option>
           <Option>White</Option>
           <Option>Brown</Option>
           <Option>Nude</Option>
         </Select>
         <Select name="size" onChange={handleFilter}>
         <Option default value>
             Size
           </Option>
           <Option>S</Option>
           <Option>M</Option>
           <Option>L</Option>
           <Option>XL</Option>
         </Select>
         </Filter>
         <Filter><FilterText>Sort Products:</FilterText>
         <Select>
           <Option selected>Newest</Option>
           <Option>Price (asc)</Option>
           <Option>Price (desc)</Option>
         </Select>
         </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList

