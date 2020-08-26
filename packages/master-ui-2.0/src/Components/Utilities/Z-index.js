import React from 'react';

const Zindex = () => {
  return (
    <div>
      <h1 className="title">Z-index</h1>
        <p className="u-tx-info">Utilize z-index, the CSS property that helps control layout by providing a third axis to arrange content.</p>
        <p className="u-my-24 u-tx-info">Here are all the support classes</p>
        <ul className="list-page">
          <li><span className="u-tx-primary">.u-zx-dropdown</span> </li>
          <li><span className="u-tx-primary">.u-zx-sticky</span> </li>
          <li><span className="u-tx-primary">.u-zx-fixed</span> </li>
          <li><span className="u-tx-primary">.u-zx-modal-backdrop</span> </li>
          <li><span className="u-tx-primary">.u-zx-modal</span> </li>
          <li><span className="u-tx-primary">.u-zx-popover</span> </li>
          <li><span className="u-tx-primary">.u-zx-tooltip</span> </li>
        </ul>
    </div>
  );
};

export default Zindex;