import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { checkoutCardThunk, deleteProductThunk, getCardThunk } from '../store/slice/card.slice';


const Card = ({show, handleClose}) => {
const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();
  const cardProduct = useSelector(state => state.card)

 useEffect(() => {
  dispatch(getCardThunk())
 }, []) 

 useEffect(() => {
  let total = 0;
  cardProduct.forEach((product) => {
    total += product.price * product.productsInCart.quantity;
  })
  setTotalPrice(total);
 }, [cardProduct])


  return (
    <div>
       <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          {cardProduct.map(product => (
            <div key={product.id}>{product.title}
            <p>Quantity {product.productsInCart.quantity}</p>
            <h3>Price {product.price}</h3>
            <Button onClick={() => dispatch(deleteProductThunk(product.id))}><span className="material-symbols-outlined">delete</span></Button>
            </div>

          ))}

          <h3>Total {totalPrice}</h3>
          <Button onClick={() => dispatch(checkoutCardThunk())}>Buy now</Button>
          </Offcanvas.Body>
      </Offcanvas>  
    </div>
  );
};

export default Card;