import { Input } from 'antd';
import React, { useState } from 'react';

type InputLatitudeProps = {
  label?: string; // ป้ายกำกับที่จะแสดง
  value?: string; // ค่าปัจจุบันใน Input
  onChange?: any; // Callback เมื่อค่าใน Input เปลี่ยน
  placeholder?: string; // Placeholder ของ Input
  maxLength?: number; // จำนวนตัวเลขสูงสุด
  errorMessage?: string; // ข้อความแสดง Error
  style?: any;
};

const InputLatitude: React.FC<InputLatitudeProps> = ({
  label,
  value,
  onChange,
  placeholder,
  maxLength,
  errorMessage,
  style,
}) => {
  const [internalValue, setInternalValue] = useState<string>(value?.toString() || '');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[^0-9.-]/g, ''); // กรองเฉพาะตัวเลข, จุดทศนิยม และเครื่องหมายลบ

    // จำกัดความยาวตัวเลข
    if (maxLength && inputValue.length > maxLength) return;

    // อัปเดต State ภายใน
    setInternalValue(inputValue);

    // ส่งค่าออกไปในรูปแบบตัวเลข
    if (onChange) {
      const numericValue = parseFloat(inputValue);
      if (!isNaN(numericValue)) {
        onChange(numericValue);
      } else {
        onChange(0); // กรณีค่าไม่เป็นตัวเลข ให้ส่ง 0
      }
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

export default InputLatitude;
