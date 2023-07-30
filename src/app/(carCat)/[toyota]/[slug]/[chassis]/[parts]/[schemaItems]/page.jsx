'use client'

import React from 'react'
import { usePathname } from 'next/navigation';
const SchemaItems = () => {
  const pathname = usePathname();
  console.log('current url :', pathname);
  return (
    <div>SchemaItems</div>
  )
}

export default SchemaItems