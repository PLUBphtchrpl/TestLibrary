'use client';

import React, { useState } from 'react';
import {InputEmail} from 'falcon-library-comp';
import {InputTelephone} from 'falcon-library-comp';
import {InputNumber} from 'falcon-library-comp';
import {InputPercent} from 'falcon-library-comp';
import {InputCurrency} from 'falcon-library-comp';
import {InputLatitude} from 'falcon-library-comp';
import {InputLongtitude} from 'falcon-library-comp';

const FormExample: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [telephone, setTelephone] = useState<string>('');
  const [number, setNumber] = useState<number | undefined>();
  const [percent, setPercent] = useState<number | undefined>();
  const [currency, setCurrency] = useState<number | undefined>();
  const [latitude, setLatitude] = useState<number | undefined>();
  const [longitude, setLongitude] = useState<number | undefined>();
//   const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      email,
      telephone,
      number,
      percent,
      currency,
      latitude,
      longitude,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Form Example</h1>
      <InputEmail
        label="Email Address"
        value={email}
        onChange={setEmail}
        placeholder="Enter your email"
      />
      <InputTelephone
        label="Telephone"
        value={telephone}
        onChange={setTelephone}
        placeholder="Enter your telephone number"
      />
      <InputNumber
        label="Number"
        value={number}
        onChange={setNumber}
        placeholder="Enter a number"
      />
      <InputPercent
        label="Percent"
        value={percent}
        onChange={setPercent}
        placeholder="Enter percentage"
        allowComma={true}
      />
      <InputCurrency
        label="Currency"
        value={currency}
        onChange={setCurrency}
        placeholder="Enter amount"
        currencySymbol="$"
        allowComma={true}
      />
      <InputLatitude
        label="Latitude"
        value={latitude}
        onChange={setLatitude}
        placeholder="Enter latitude"
      />
      <InputLongtitude
        label="Longitude"
        value={longitude}
        onChange={setLongitude}
        placeholder="Enter longitude"
      />
      <button type="submit" style={{ marginTop: '20px', padding: '10px 20px' }}>
        Submit
      </button>
    </form>
  );
};

export default FormExample;
