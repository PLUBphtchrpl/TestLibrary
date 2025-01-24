import { Input } from 'antd';
import React from 'react';

type InputTelephoneProps = {
  label?: string; // ป้ายกำกับที่จะแสดง
  placeholder?: string; // ข้อความ Placeholder
  value?: string; // ค่าปัจจุบันใน Input
  onChange?: (value: string) => void; // Callback เมื่อค่าใน Input เปลี่ยน
  errorMessage?: string; // ข้อความแสดงข้อผิดพลาด
  maxLength?: number; // จำนวนตัวอักษรสูงสุด
  style?: any;
};

const InputTelephone: React.FC<InputTelephoneProps> = ({
  label,
  placeholder,
  value = '',
  onChange,
  errorMessage,
  maxLength, // ตัวเลขสูงสุดที่อนุญาต
  style,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // ตรวจสอบให้มีเฉพาะตัวเลขและเครื่องหมาย +
    const cleanedValue = inputValue.replace(/[^0-9+]/g, '');
    if (onChange) {
      onChange(cleanedValue);
    }
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ display: 'block', marginBottom: '.5rem', fontWeight: 'bold' }}>
        {label}
      </label>
      <Input
        type="tel"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
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

export default InputTelephone;
