// 'use client'
// import React from 'react'
// import Styles from './Loader.module.css'
// import { useState } from 'react';

// const [hovered, setHovered] = useState(false);

// const Loader = ({text}) => {
//   return (
// <>
// <div className={`${hovered ? Styles.hovered : ''}flex gap-2 items-center`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>

// <div class={Styles.spinner}></div>
// <p className='text-base'>{text}</p>
// </div>
// </>  )
// }

// export default Loader










'use client'
import React, { useState } from 'react';
import Styles from './Loader.module.css';

const Loader = ({ text }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        className={`${hovered ? Styles.hovered : ''} flex gap-2 items-center`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={Styles.spinner}></div>
        <p className='text-base'>{text}</p>
      </div>
    </>
  );
};

export default Loader;
