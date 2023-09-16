import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './cart-dropdown.styles.scss';

import Button from '../button/button.component';

const CartDropdown = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
