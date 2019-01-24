import React, { Component } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'reactstrap';

// may need to modify later, still testing
const PAYMENT_SERVER_URL = process.env.REACT_APP_PAYMENT_SERVER_URL || "http://localhost:9000/payment";

// Publishable key is solely for identifying our Stripe account. Safe to be pushed.
const STRIPE_PUBLISHABLE_KEY = 'pk_test_48apY3K7i1kB09oFAezAYI9Q';

const CURRENCY = 'USD';

// stripe takes amount in cents. For example, if the payment to be charged is $ 1.00, the amount should 100
const convertToCents = amount => amount * 100;

class Checkout extends Component {
    constructor(props){
        super(props);
    }
    successPayment = data => {
        alert('Payment Successful');
    };
    errorPayment = error => {
        console.log(error);
        alert('Payment Error');
    };
    onToken = (amount, description) => token => {
        axios.post(PAYMENT_SERVER_URL, {
            description,
            source: token.id,
            currency: CURRENCY,
            amount: convertToCents(amount)
        })
        .then(() => {
            this.successPayment();
            this.props.changeSubscriptionStatus();
        })
        .catch(this.errorPayment);
    }
    render(){
        return(
            <StripeCheckout
                label="Subscribe"
                name={this.props.name}
                description={this.props.description}
                token={this.onToken(this.props.amount, this.props.description)}
                currency={CURRENCY}
                panelLabel='Subscribe'
                amount={convertToCents(this.props.amount)}
                stripeKey={STRIPE_PUBLISHABLE_KEY}
            />
        )
    }
}
// const Checkout = ({name, description, amount}, props) => 
//     // variable to change description to 1 month/1 year subscription?
  
   

export default Checkout;