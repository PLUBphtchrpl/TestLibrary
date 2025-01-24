import { Input } from 'antd';
import React, { useState } from 'react';

type InputPercentProps = {
    label?: string; // ป้ายกำกับที่จะแสดง
    value?: string; // ค่าปัจจุบันใน Input
    onChange?: any; // Callback เมื่อค่าใน Input เปลี่ยน
    placeholder?: string; // Placeholder ของ Input
    allowComma?: boolean; // กำหนดว่าจะใช้คอมม่าหรือไม่
    maxLength?: number; // จำนวนตัวเลขสูงสุดที่สามารถกรอกได้
    errorMessage?: string; // ข้อความแสดง Error
    style?: any;
};

const InputPercent: React.FC<InputPercentProps> = ({
    label,
    value= '',
    onChange,
    placeholder,
    allowComma,
    maxLength,
    errorMessage,
    style,
}) => {

    // ฟังก์ชันสำหรับฟอร์แมตตัวเลขด้วยคอมม่า
    const formatWithComma = (num: string): string => {
        return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const [internalValue, setInternalValue] = useState<string>(
        allowComma ? formatWithComma(value) : value
      );

    // ฟังก์ชันจัดการเมื่อค่าใน Input เปลี่ยน
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
            <div style={{ display: 'flex', alignItems: 'center' }}>
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
                <span style={{ marginLeft: '0.5rem', fontWeight: 'bold' }}>%</span>
            </div>
            {errorMessage && (
                <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '.5rem' }}>
                    {errorMessage}
                </p>
            )}
        </div>
    );
};

export default InputPercent;
