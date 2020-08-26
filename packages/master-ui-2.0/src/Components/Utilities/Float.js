import React from 'react';

const Float = () => {
  return (
    <div>
      <h1 className="title">Float</h1>
      <p className="u-tx-info">These utility classes float an element to the left or right,
         or disable floating, based on the current viewport size using 
         the <span className="u-tx-primary u-fw-regular">CSS float property</span>. !important is included to avoid specificity
          issues. These use the same viewport breakpoints as our grid system. 
          Please be aware float utilities have no affect on flex items.</p>
        <p className="u-my-24 u-tx-info">Here are all the support classes</p>
        <ul className="list-page">
          <li><span className="u-tx-primary">.u-fl-left</span> </li>
          <li><span className="u-tx-primary">.u-fl-right</span> </li>
          <li><span className="u-tx-primary">.u-fl-none</span> </li>
        </ul>
    </div>
  );
};

export default Float;