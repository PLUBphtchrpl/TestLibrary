import { Input } from 'antd';
import React, { useState } from 'react';

type InputNumberType = {
  label?: string; // ป้ายกำกับ
  value?: string ; // ค่าปัจจุบัน
  onChange?: any; // Callback เมื่อค่าเปลี่ยน
  placeholder?: string; // Placeholder ของ Input
  allowComma?: boolean; // กำหนดว่าจะใช้คอมม่าหรือไม่
  maxLength?: number; // จำนวนตัวเลขสูงสุด
  errorMessage?: string; // ข้อความแสดง Error
  style?: any;
};

const InputNumber: React.FC<InputNumberType> = ({
  label,
  value,
  onChange,
  placeholder,
  allowComma,
  maxLength,
  errorMessage,
  style,
}) => {
  const [internalValue, setInternalValue] = useState<string>(
    value ? value.toString() : ''
  );

  const formatWithComma = (num: string): string => {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, ''); // กรองเฉพาะตัวเลข
    if (maxLength && inputValue.length > maxLength) return; // ตรวจสอบ maxLength

    const formattedValue = allowComma ? formatWithComma(inputValue) : inputValue;

    setInternalValue(formattedValue); // อัพเดตค่าใน State ภายใน
    if (onChange) {
      onChange(inputValue); // ส่งค่ากลับไปในรูปแบบตัวเลข
    }
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ display: 'block', marginBottom: '.5rem', fontWeight: 'bold' }}>
        {label}
      </label>
      <Input
        type="text"
        value={internalValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '0.5rem',
          border: errorMessage ? '1px solid red' : '1px solid #ccc',
          borderRadius: '4px',
          ...style
        }}
      />
      {errorMessage && (
        <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '.5rem' }}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputNumber;
