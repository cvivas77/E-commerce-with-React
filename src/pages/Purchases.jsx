import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { purchasesThunk } from '../store/slice/purchases.slice';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom'
import "../components/Purchases.css"

const Purchases = () => {

  const dispatch = useDispatch();
  const purchases = useSelector(state => state.purchases);


  useEffect(() => {
    dispatch(purchasesThunk())
  }, [])

  return (
    <div>
      <div className='container-table'>
        <ul>
          <li>Date</li>
          <li>Name Product</li>
          <li>Price</li>
          <li>Quantity</li>
        </ul>
      </div>
    <div className='container-purchase'>
        {purchases.map((purchase) => (
          <div key={purchase.id}>
          <>
            {purchase.cart.products.map((product) => (
              <div className='purchase' key={product.id}>
                <ul >
                  <Link to={`/detail/${product.id}`}>
                    <li  >{product.createdAt}</li>
                    <li>{product.title}</li>
                    <li>{product.price}</li>
                    <li>{product.productsInCart.quantity}</li>
                  </Link>
                </ul>
                </div> 
            ))}
          </>
          </div>
        ))}
     </div>
  
    </div>
  );
};

export default Purchases;