import React from 'react'
import GenuineParts from '@/app/components/GenuineParts'


const page = ({ params }) => {
// console.log("main page params:",params);
  return (
    <div>
      <GenuineParts params={params}/>
    </div>
  );
}

export default page