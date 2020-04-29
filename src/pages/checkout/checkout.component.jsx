import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './checkout.styles.scss';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, cartTotal}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(item => (<CheckoutItem item={item} key={item.id}></CheckoutItem>))}
        <div className='total'>
            <span>{`Total: $ ${cartTotal}`}</span>
        </div>
        <div className='pay-button'>
            <StripeCheckoutButton price={cartTotal} />
        </div>
        <div className='test-warning'>
            *Please use this card for testing purposes:
            <br />
            4242 4242 4242 4242, any date, any CCV
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);