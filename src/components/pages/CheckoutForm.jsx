import React, { useEffect, useState, useContext } from "react";
import EventContext from '../../context/EventContext'
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

export default function CheckoutForm() {

  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const context = useContext(EventContext)
  // console.log(context)
  const compID = context.btn
  console.log(compID)
  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let comp = compID
    let lifterName = document.querySelector('#lifterName').value
    let lifterDob = document.querySelector('#lifterDob').value
    let lifterPhone = document.querySelector('#lifterPhone').value
    let lifterEmail = document.querySelector('#lifterEmail').value
    let formData = { comp, lifterName, lifterDob, lifterPhone, lifterEmail }

    fetch('/event-signup', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(formData)
    })

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/payment-success",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsLoading(false);

  };

  return (

    <form id="payment-form" method="POST" onSubmit={handleSubmit}>
      <div id="eventID">
        { compID }
      </div>
      <div className="lifter-details">
        <div className="signup-form-input">
          <label htmlFor='lifterName'>
          Name <input
                  type='text'
                  id='lifterName'
                  name='lifterName'>
               </input>
          </label>
        </div>

        <div className="signup-form-input">
          <label htmlFor='lifterDob'>
            Date of Birth <input
                            type='date'
                            id='lifterDob'
                            name='lifterDob'>
                          </input>
          </label>
        </div>

        <div className="signup-form-input">
          <label htmlFor='lifterPhone'>
          Phone <input
                  type='tel'
                  id='lifterPhone'
                  name='lifterPhone'>
                </input>
          </label>
        </div>

        <div className="signup-form-input">
          <label htmlFor='lifterEmail'>
          Email <input
                  type='email'
                  id='lifterEmail'
                  name='lifterEmail'>
                </input>
          </label>
        </div>
      </div>

      <div className="stripe-payment">
        <PaymentElement id="payment-element" />
        <button disabled={isLoading || !stripe || !elements} id="submit" type="submit" action="/event-signup" name="confirm">
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </div>
    </form>
  );
}
