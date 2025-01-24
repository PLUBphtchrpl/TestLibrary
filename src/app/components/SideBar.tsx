'use client';

import React from 'react';
import {SideBar} from 'falcon-library-comp';
import { HomeOutlined, InfoCircleOutlined, PhoneOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const App: React.FC = () => {
  const router = useRouter();

  // รายการเมนู
  const sideBarItems = [
    { key: 'home', label: 'Home', icon: <HomeOutlined /> },
    { key: 'about', label: 'About Us', icon: <InfoCircleOutlined /> },
    { key: 'contact', label: 'Contact', icon: <PhoneOutlined /> },
  ];

  // ฟังก์ชันเมื่อคลิกเมนู
  const handleItemClick = (key: string) => {
    switch (key) {
      case 'home':
        router.push('/');
        break;
      case 'about':
        router.push('/about');
        break;
      case 'contact':
        router.push('/contact');
        break;
      default:
        console.log(`Unknown menu key: ${key}`);
    }
  };

  return (
      <div style={{
          width: '250px', // กำหนดความกว้าง Sidebar
          backgroundColor: '#001529',
          height: '100%', // เต็มความสูงหน้าจอ
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
      }}>
      {/* SideBar */}
      <SideBar
        items={sideBarItems}
        logo={<img src="https://example.com/logo.png" alt="Logo" style={{ height: '40px' }} />}
        header={<div>My App</div>}
        footer={<div>© 2025 My App</div>}
        onItemClick={handleItemClick}
        style={{
          // backgroundColor: '#001529',
          color: '#fff',
        }}
      />

    </div>
  );
};

export default App;
