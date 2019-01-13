import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

// may need to modify later, still testing
const PAYMENT_SERVER_URL = process.env.PAYMENT_SERVER_URL || "http://localhost:9000/payment";

const CURRENCY = 'USD';

// stripe takes amount in cents. For example, if the payment to be charged is $ 1.00, the amount should 100
const convertToCents = amount => amount * 100;

const successPayment = data => {
    alert('Payment Successful');
  };
  
  const errorPayment = data => {
    console.log(data)
    alert('Payment Error');
  };

const onToken = (amount, description) => token => {
    console.log(amount, description, token);
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
    // check change description to 1 month/1 year subscription
    <StripeCheckout
        name={name}
        description={description}
        amount={convertToCents(amount)}
        token={onToken(amount, description)}
        currency={CURRENCY}
        stripeKey='pk_test_eDPjJdefeIGEjcCgJ30Z5glO'
    />

export default Checkout;