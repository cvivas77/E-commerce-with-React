import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { purchasesThunk } from '../store/slice/purchases.slice';
import Table from 'react-bootstrap/Table';

const Purchases = () => {

  const dispatch = useDispatch();
  const purchases = useSelector(state => state.purchases);
  useEffect(() => {
    dispatch(purchasesThunk())
  }, [])

  return (
    <div>
     <Table striped>
      <thead>
        <tr>
          <th>Date</th>
          <th>Name Product</th>
          <th>Price</th>
          <th>Brand</th>
        </tr>
      </thead>
      <tbody>
        {purchases.map((purchases) => (
          <>
            {purchases.cart.products.map((product) => (
                <tr key={product.id}>
                  <td>{product.createdAt}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.brand}</td>
                </tr>
            ))}
          </>
        ))}
      </tbody>
    </Table>
  
    </div>
  );
};

export default Purchases;