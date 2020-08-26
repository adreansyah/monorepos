import React from 'react';

const VerticalAlign = () => {
  return (
    <div>
      <h1 className="title">Vertical Align</h1>
        <p className="u-tx-info">Change the alignment of elements with
         the vertical-alignment utilities. Please note that vertical-align
          only affects inline, inline-block, inline-table, and table cell elements.</p>
        <p className="u-my-24 u-tx-info">Here are all the support classes</p>
        <ul className="list-page">
          <li><span className="u-tx-primary">.u-yal-baseline</span> </li>
          <li><span className="u-tx-primary">.u-yal-top</span> </li>
          <li><span className="u-tx-primary">.u-yal-middle</span> </li>
          <li><span className="u-tx-primary">.u-yal-bottom</span> </li>
          <li><span className="u-tx-primary">.u-yal-text-top</span> </li>
          <li><span className="u-tx-primary">.u-yal-text-bottom</span> </li>
        </ul>
    </div>
  );
};

export default VerticalAlign;