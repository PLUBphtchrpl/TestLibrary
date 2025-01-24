'use client';

import React, { useState } from 'react';
import { SelectLocation } from 'falcon-library-comp';

import InputCurrency from '../components/Input/InputCurrency';
import InputEmail from '../components/Input/InputEmail';
import InputLatitude from '../components/Input/InputLatitude';
import InputLongtitude from '../components/Input/InputLongtitude';
import InputNumber from '../components/Input/InputNumber';
import InputPercent from '../components/Input/InputPercent';
import InputTelephone from '../components/Input/InputTelephone';

// import {InputEmail} from 'falcon-library-comp';
// import {InputTelephone} from 'falcon-library-comp';
// import {InputNumber} from 'falcon-library-comp';
// import {InputPercent} from 'falcon-library-comp';
// import {InputCurrency} from 'falcon-library-comp';
// import {InputLatitude} from 'falcon-library-comp';
// import {InputLongtitude} from 'falcon-library-comp';

import { Form } from 'antd';

const FormExample: React.FC = () => {
  // const [email, setEmail] = useState<string>('');
  // const [telephone, setTelephone] = useState<string>('');
  // const [number, setNumber] = useState<number | undefined>();
  // const [percent, setPercent] = useState<number | undefined>();
  // const [currency, setCurrency] = useState<number | undefined>();
  // const [latitude, setLatitude] = useState<number | undefined>();
  // const [longtitude, setLongtitude] = useState<number | undefined>();
  // const [location, setLocation] = useState<{label: string; value:string} | undefined>();
  //   const [error, setError] = useState<string | null>(null);

  const [form] = Form.useForm()
  const handleSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
    console.log(e);
  };

  return (
    <Form form={form} onFinish={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Form Example</h1>
      <Form.Item label="Email Address" name={"Email Address"}>
      <InputEmail
        // label="Email Address"
        // // value={email}
        // // onChange={setEmail}
        // placeholder="Enter your email"
      />
      </Form.Item>
      <Form.Item label="Telephone" name={"Telephone"}>
      <InputTelephone
        // label="Telephone"
        // // value={telephone}
        // // onChange={setTelephone}
        // placeholder="Enter your telephone number"
        maxLength={10}
      />
      </Form.Item>
      <Form.Item label="Number" name={"Number"}>
      <InputNumber
        // label="Number"
        // value={number}
        // onChange={setNumber}
        // placeholder="Enter a number"
      />
      </Form.Item>
      <Form.Item label="Percent" name={"Percent"}>
      <InputPercent
        // label="Percent"
        // // value={percent}
        // // onChange={setPercent}
        // placeholder="Enter percentage"
        // allowComma={true}
      />
      </Form.Item>
      <Form.Item label="Currency" name={"Currency"}>
      <InputCurrency
        // label="Currency"
        // value={currency}
        // onChange={setCurrency}
        // placeholder="Enter amount"
        currencySymbol="$"
        allowComma={true}
      />
      </Form.Item>
      <Form.Item label="Latitude" name={"Latitude"}>
        <InputLatitude
          // label="Longtitude"
          // value={longtitude}
          // onChange={setLongtitude}
          // placeholder="Enter latitude"
          // maxLength={10}
        />
        </Form.Item>
      <Form.Item label="Longtitude" name={"Longtitude"}>
        <InputLongtitude
          // label="Longtitude"
          // value={longtitude}
          // onChange={setLongtitude}
          // placeholder="Enter longtitude"
        />
      </Form.Item>
      <Form.Item label="เลือกจังหวัด" name={"SelectLocation"}>
        <SelectLocation
        // onChange={(selectedLocation: { label: string; value: string }) => setLocation(selectedLocation)} // อัปเดต state location
        // placeholder="Select a location"
        />

      </Form.Item>

      <button type="submit" style={{ marginTop: '20px', padding: '10px 20px' }}>
        Submit
      </button>
    </Form>
  );
};

export default FormExample;
