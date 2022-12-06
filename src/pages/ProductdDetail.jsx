import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import { getProductsThunk} from '../store/slice/products.slice';
import {Link} from 'react-router-dom'
import '../components/DetailProduct.css'
import { useState } from 'react';
import { createCardThunk } from '../store/slice/card.slice';
import { Button } from 'react-bootstrap';

const ProductdDetail = () => {

  const {id} = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [])

  const productList = useSelector(state =>state.products);

  const products = productList.find(product => product.id === Number(id));

  const productRelate = productList.filter(productItem =>
    productItem.category?.id === products.category?.id && productItem.id !== products.id);


   
    const [inputValue, setInputValue] = useState("");

  
 
    const addToProduct = () => {
      const product = {
        id: products.id,
       quantity: inputValue,
      } 
      
      dispatch(createCardThunk(product))
       
    }


  return (
    <div>
    <section className='container-detail'>
      <div className='detail'>
        <img src={products?.productImgs?.[0]} alt="" />
        <div className='detail-product'>
        <h1 >{products?.title}</h1>
        <p>{products?.description}</p>
        <p>Price {products?.price}$</p>
        </div>
        <div>
          <input className='input-cart' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value) }  name="" id="" />
          <Button onClick={addToProduct}>Add to Cart</Button>
        </div>
      </div>
      
    </section>
    <section className='prompt'>
      <h2>Explore more</h2>
      <div className='prompt-product'>
        {productRelate.map(products => (
          <li key={products.id}>
            <Link to={`/productd/${products.id}`}>
              {products?.title}
                <br />
                <img src={products?.productImgs?.[0]} alt="" />
                <p>Price {products?.price}$</p>
            </Link>
          </li>
    ))}
      </div>
  </section>
  </div>
  );
};

export default ProductdDetail;