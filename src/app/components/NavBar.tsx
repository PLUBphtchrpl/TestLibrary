'use client'; // ใช้ Client Component สำหรับ Next.js

import React from 'react';
import 'antd/dist/reset.css';
import { useRouter } from 'next/navigation';
import { NavBar } from 'falcon-library-comp'; // Import Navbar จาก Library หรือ Path ที่ถูกต้อง
import { HomeOutlined, InfoCircleOutlined, PhoneOutlined } from '@ant-design/icons';

const NavigationBar: React.FC = () => {
  const router = useRouter();

  // รายการเมนู
  const navItems = [
    { key: 'home', label: 'Home', icon: <HomeOutlined /> },
    { key: 'about', label: 'About', icon: <InfoCircleOutlined /> },
    { key: 'contact', label: 'Contact', icon: <PhoneOutlined /> },
  ];

  // ฟังก์ชันเมื่อคลิกเมนู
  const handleMenuClick = (key: string) => {
    switch (key) {
      case 'home':
        router.push('/'); // เปลี่ยนเส้นทางไปที่ /home
        console.log("Go to home");
        
        break;
      case 'about':
        router.push('/about'); // เปลี่ยนเส้นทางไปที่ /about
        console.log("Go to about");
        break;
      case 'contact':
        router.push('/contact'); // เปลี่ยนเส้นทางไปที่ /contact
        console.log("Go to contact");
        break;
      default:
        console.log(`Unknown menu key: ${key}`);
    }
  };

  return (
    <NavBar
      items={navItems} // รายการเมนู
      logo="https://example.com/logo.png" // โลโก้ (URL)
      onLogoClick={() => router.push('/')} // คลิกโลโก้ไปหน้าแรก
      mode="horizontal" // โหมดเมนู (horizontal หรือ vertical)
      style={{
        backgroundColor: '#001529', // สีพื้นหลัง
        padding: '10px', // กำหนด Padding
      }}
      onMenuClick={handleMenuClick} // Callback เมื่อคลิกเมนู
    />
  );
};

export default NavigationBar;
