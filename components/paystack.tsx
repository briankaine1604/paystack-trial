"use client";
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

const Paystack = () => {
  const publicKey = process.env.PAYSTACK_PUBLIC_TEST_KEY;
  console.log(publicKey);
  const amount = 1000000;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const resetForm = () => {
    setEmail("");
    setName("");
    setPhone("");
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
      custom_fields: [
        {
          display_name: "Name",
          variable_name: "name",
          value: name,
        },
        {
          display_name: "Phone Number",
          variable_name: "phone_number",
          value: phone,
        },
      ],
    },
    publicKey,
    text: "Buy Now",
    onSuccess: ({ reference }: any) => {
      alert(
        `Your purchase was successful! Transaction reference: ${reference}`
      );
      resetForm();
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <div className="overlay-effect"></div>
          <div className="item-details">
            <p className="item-details__title">Coconut Oil</p>
            <p className="item-details__amount">NGN {amount / 100}</p>
          </div>
        </div>
        <div className="checkout">
          <div className="checkout-form">
            <div className="checkout-field">
              <label>Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Phone</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paystack;
