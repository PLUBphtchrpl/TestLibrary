'use client';

import React from 'react';
// import { usePathname } from 'next/navigation';
import { BreadCrumb } from 'falcon-library-comp'; // Import จาก Library

const BreadcrumbWithParams: React.FC = () => {
  // const pathname = usePathname();

  // Generate breadcrumb items from URL path
  // const breadcrumbItems = pathname
  //   .split('/')
  //   .filter((segment) => segment) // กรอง Segment ที่ว่าง
  //   .map((segment, index, arr) => {
  //     // กรณีสุดท้ายไม่ต้องมี href
  //     const isLast = index === arr.length - 1;
  //     return {
  //       key: segment,
  //       label: decodeURIComponent(segment.charAt(0).toUpperCase() + segment.slice(1)),
  //       href: isLast ? undefined : '/' + arr.slice(0, index + 1).join('/'),
  //     };
  //   });

  const breadcrumbItems = [
    { key: 'home', label: 'Home', href: '/' },
    { key: 'category', label: 'Category', href: '/category' },
    { key: 'product', label: 'Product' },
  ];

  return (
    // <BreadCrumb
    //   items={[{ key: 'home', label: 'Home', href: '/' }, ...breadcrumbItems]} // เพิ่ม Home เข้าไป
    //   separator=">" // ตัวคั่นระหว่าง Breadcrumb
    //   style={{ marginBottom: '20px' }}
    // />
    <BreadCrumb
      items={breadcrumbItems}
      separator=">"
      style={{ marginBottom: '20px', backgroundColor : 'white' }}
      onItemClick={(key) => console.log(`Breadcrumb clicked: ${key}`)}
    />
  );
};

export default BreadcrumbWithParams;
