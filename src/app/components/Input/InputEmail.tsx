import { Input } from 'antd';
import React from 'react';

type InputEmailProps = {
  label?: string; // ป้ายกำกับของ Input
  value?: string; // ค่าปัจจุบันใน Input
  onChange?: any; // Callback เมื่อเปลี่ยนค่า
  placeholder?: string; // Placeholder ใน Input
  errorMessage?: string; // ข้อความแสดง Error
  style?: any;
};

const InputEmail: React.FC<InputEmailProps> = ({
  label,
  value,
  onChange,
  placeholder,
  errorMessage,
  style,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange?.(inputValue); // เรียก Callback เมื่อเปลี่ยนค่า
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ display: 'block', marginBottom: '.5rem' }}>{label}</label>
      <Input
        type="email"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '0.5rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          ...(errorMessage ? { borderColor: 'red' } : {}), // เปลี่ยนสีกรอบเมื่อมี Error
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

export default InputEmail;
