import React, { useState, useEffect } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51K50drLJQcpU2qlqinjU8WNUy30WMje6HAiLCQuYiddP3JpH1iTyQ9AdBVQdVIW2QS2vPkDaICVFPG1vu3Ydo1E700dizRHTGo");


export default function Payment() {

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    //Create payment intent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt"}] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
