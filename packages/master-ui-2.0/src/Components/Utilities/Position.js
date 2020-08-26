import React from 'react';

const Position = () => {
  return (
    <div>
      <h1 className="title">Display</h1>
        <p className="u-tx-info">Use these shorthand utilities for quickly configuring the position of an element.</p>
        <p className="u-my-24 u-tx-info">Here are all the support classes</p>
        <ul className="list-page">
          <li><span className="u-tx-primary">.u-ps-relative</span> </li>
          <li><span className="u-tx-primary">.u-ps-absolute</span> </li>
          <li><span className="u-tx-primary">.u-ps-static</span> </li>
          <li><span className="u-tx-primary">.u-ps-fixed</span> </li>
          <li><span className="u-tx-primary">.u-ps-fixed-top</span> </li>
          <li><span className="u-tx-primary">.u-ps-fixed-bottom</span> </li>
          <li><span className="u-tx-primary">.u-ps-sticky</span> </li>
          <li><span className="u-tx-primary">.u-ps-sticky-top</span> </li>
        </ul>
    </div>
  );
};

export default Position;