import React from 'react';

const Display = () => {
  return (
    <div>
        <h1 className="title">Display</h1>
        <p className="u-tx-info">Change the value of the <span className="u-fw-bold">display property </span>with 
        our responsive display utility classes. We purposely support only a 
        subset of all possible values for <span className="u-tx-primary u-fw-regular">display</span>. Classes can be combined 
        for various effects as you need.</p>
        <p className="u-my-24 u-tx-info">Here are all the support classes</p>
        <ul className="list-page">
          <li><span className="u-tx-primary">.u-ds-none</span> </li>
          <li><span className="u-tx-primary">.u-ds-block</span> </li>
          <li><span className="u-tx-primary">.u-ds-inline-block</span> </li>
          <li><span className="u-tx-primary">.u-ds-inline</span> </li>
          <li><span className="u-tx-primary">.u-ds-table</span> </li>
          <li><span className="u-tx-primary">.u-ds-flex</span> </li>
          <li><span className="u-tx-primary">.u-ds-inline-flex</span> </li>
          <li><span className="u-tx-primary">.u-ds-table-cell</span> </li>
          <li><span className="u-tx-primary">.u-ds-table-row</span> </li>
          <li><span className="u-tx-primary">.u-ov-hidden</span> </li>
          <li><span className="u-tx-primary">.u-ov-scroll</span> </li>
          <li><span className="u-tx-primary">.u-ov-auto</span> </li>
          <li><span className="u-tx-primary">.u-ov-x-hidden</span> </li>
          <li><span className="u-tx-primary">.u-ov-y-scroll</span> </li>
          <li><span className="u-tx-primary">.u-cr-pointer</span> </li>
          <li><span className="u-tx-primary">.u-ds-print-none</span> </li>
          <li><span className="u-tx-primary">.u-ds-print-inline </span> </li>
          <li><span className="u-tx-primary">.u-ds-print-inline-block</span> </li>
          <li><span className="u-tx-primary">.u-ds-print-block</span> </li>
          <li><span className="u-tx-primary">.u-ds-print-table</span> </li>
          <li><span className="u-tx-primary">.u-ds-print-table-row </span> </li>
          <li><span className="u-tx-primary">.u-ds-print-table-cell</span> </li>
          <li><span className="u-tx-primary">.u-ds-print-flex</span> </li>
          <li><span className="u-tx-primary">.u-ds-print-inline-flex</span> </li>
        </ul>
    </div>
  );
};

export default Display;