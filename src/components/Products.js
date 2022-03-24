import React from 'react' ;
import styled from "styled-components";
import {products} from '../data';
import Product from './Product' ;
import {Link} from 'react-router-dom' ;
const Container = styled.div`
padding : 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;  

`
function Products() {
  return (
    <Container>
      {products.map((item) => (
        <Link to={{ pathname: `/Product/${item.Id}` }}>
          <Product item={item} key={item.Id} />
        </Link>
      ))}
    </Container>
  );
}

export default Products