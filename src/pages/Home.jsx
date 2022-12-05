import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProductsThunk, getProductsThunk, filterNameThunk } from '../store/slice/products.slice';
import {Link} from 'react-router-dom'
import "../components/Home.css"
import { useState } from 'react';
import axios from 'axios';
import { Button, InputGroup, Form} from 'react-bootstrap';

const Home = () => {

  const [categoriesList, setCategoriesList] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProductsThunk());

    axios.get(`https://e-commerce-api.academlo.tech/api/v1/products/categories`)
      .then(res => setCategoriesList(res.data.data.categories))
  }, [])

  

  return (
    <div>
      <section className='container-category'>
        {categoriesList.map(categories => (
          
            <Button key={categories.id} onClick={() => 
              dispatch(filterProductsThunk(categories.id))}>{categories.name}</Button>
          
        ))}
      </section>
      <section className='container-input'>
        <InputGroup className="mb-3">
          <Form.Control  
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={inputSearch} onChange={(e) => setInputSearch(e.target.value)}/>
            
        <Button variant="outline-secondary" id="button-addon2"
          onClick={() => dispatch(filterNameThunk(inputSearch))}>
          Search
        </Button>
      </InputGroup>
      </section>

      
      <section className='container-card'>

      {products.map(product => (
        <li key={product.id} className="card">
        <Link to={`/productd/${product.id}`}>
        <img className='img' src={product.productImgs?.[0]} alt="" />
        <br />
        <p>{product.title}</p>
        <p>{product.price}$</p>
        </Link>
        </li>
      ))}
      </section>
    </div>
  );
};

export default Home;