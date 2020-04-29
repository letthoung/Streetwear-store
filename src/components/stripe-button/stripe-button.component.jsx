import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_rkgRKEF8tgECBfZqcSLsXfoQ00Ry8miAL0';
    const onToken = token => {
        console.log(token);
        alert('Pay successfully');
    }
    return (
    <StripeCheckout 
    label='Pay Now' 
    billingAddress 
    shippingAddress 
    image='https://svgshare.com/i/CUz.svg' 
    stripeKey={publishableKey} 
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    />);
}

export default StripeCheckoutButton;


