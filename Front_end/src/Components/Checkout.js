import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

// may need to modify later, still testing
const PAYMENT_SERVER_URL = process.env.PAYMENT_SERVER_URL || "http://localhost:9000/payment";

const CURRENCY = 'USD';

const convertToCents = amount => amount * 100;

const successPayment = data => {
    alert('Payment Successful');
  };
  
  const errorPayment = data => {
    alert('Payment Error');
  };

const onToken = (amount, description) => token => {
    axios.post(PAYMENT_SERVER_URL, {
        description,
        source: token.id,
        currency: CURRENCY,
        amount: convertToCents(amount)
    })
    .then(successPayment)
    .catch(errorPayment);
}

const Checkout = ({name, description, amount}) => 
    <StripeCheckout
        name={name}
        description={description}
        amount={convertToCents(amount)}
        token={onToken(amount, description)}
        currency={CURRENCY}
        stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
    />

export default Checkout;