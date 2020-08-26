import React from 'react'

class Margin extends React.Component {
  render () {
    return (
      <div>
        <h1 className="title">Spacing</h1>
        <h1>How it works</h1>
        <p className="u-tx-info">Assign responsive-friendly <span className="u-tx-primary u-fw-regular">margin</span> or <span className="u-tx-primary u-fw-regular ">padding</span> values
           to an element or a subset of its sides with shorthand classes. 
           Includes support for individual properties, all properties, and 
           vertical and horizontal properties. </p>
        <h1>Notation</h1>
        <p className="u-tx-info">The classes are named using the format <span className="u-tx-primary u-fw-regular ">{"{property}{sides}-{size}"}</span></p>
        <h2 className="u-my-12">Where property is one of:</h2>
        <ul className="list-page">
          <li><span className="u-tx-primary">u-m</span> - for classes that set <span className="u-tx-primary">margin</span></li>
          <li><span className="u-tx-primary">u-p</span> - for classes that set <span className="u-tx-primary">padding</span></li>
        </ul>
        <h2 className="u-my-12">Where sides is one of:</h2>
        <ul className="list-page">
          <li><span className="u-tx-primary">t</span> - for classes that set <span className="u-tx-primary">margin-top</span> or <span className="u-tx-primary">padding-top</span></li>
          <li><span className="u-tx-primary">b</span> - for classes that set <span className="u-tx-primary">margin-bottom</span> or <span className="u-tx-primary">padding-bottom</span></li>
          <li><span className="u-tx-primary">l</span> - for classes that set <span className="u-tx-primary">margin-left</span> or <span className="u-tx-primary">padding-left</span></li>
          <li><span className="u-tx-primary">r</span> - for classes that set <span className="u-tx-primary">margin-right</span> or <span className="u-tx-primary">padding-right</span></li>
          <li><span className="u-tx-primary">x</span> - for classes that set both <span className="u-tx-primary">*-left</span> and <span className="u-tx-primary">*-right</span></li>
          <li><span className="u-tx-primary">y</span> - for classes that set both <span className="u-tx-primary">*-top</span> and <span className="u-tx-primary">*-bottom</span></li>
        </ul>
        <h2 className="u-my-12">Where size is one of:</h2>
        <ul className="list-page">
          <li><span className="u-tx-primary">0</span> - for classes that set the <span className="u-tx-primary">margin</span> or <span className="u-tx-primary">padding</span> to 0</li>
          <li><span className="u-tx-primary">4</span> - for classes that set the <span className="u-tx-primary">margin</span> or <span className="u-tx-primary">padding</span> to 4px</li>
          <li><span className="u-tx-primary">8</span> - for classes that set the <span className="u-tx-primary">margin</span> or <span className="u-tx-primary">padding</span> to 8px</li>
          <li><span className="u-tx-primary">12</span> - for classes that set the <span className="u-tx-primary">margin</span> or <span className="u-tx-primary">padding</span> to 12px</li>
          <li><span className="u-tx-primary">16</span> - for classes that set the <span className="u-tx-primary">margin</span> or <span className="u-tx-primary">padding</span> to 16px</li>
          <li><span className="u-tx-primary">20</span> - for classes that set the <span className="u-tx-primary">margin</span> or <span className="u-tx-primary">padding</span> to 20px</li>
          <li><span className="u-tx-primary">24</span> - for classes that set the <span className="u-tx-primary">margin</span> or <span className="u-tx-primary">padding</span> to 24px</li>
          <li><span className="u-tx-primary">32</span> - for classes that set the <span className="u-tx-primary">margin</span> or <span className="u-tx-primary">padding</span> to 32px</li>
          <li><span className="u-tx-primary">40</span> - for classes that set the <span className="u-tx-primary">margin</span> or <span className="u-tx-primary">padding</span> to 40px</li>
          <li><span className="u-tx-primary">56</span> - for classes that set the <span className="u-tx-primary">margin</span> or <span className="u-tx-primary">padding</span> to 56px</li>
          <li><span className="u-tx-primary">80</span> - for classes that set the <span className="u-tx-primary">margin</span> or <span className="u-tx-primary">padding</span> to 80px</li>
        </ul>
        <h1 className="u-my-12">Example</h1>
        <code>
          &lt;p className="u-p-4"&gt;Padding 4px&lt;/p&gt;<br/>
          &lt;p className="u-pt-8"&gt;Padding Top 8px&lt;/p&gt;<br/>
          &lt;p className="u-py-12"&gt;Padding Top & Bottom 12px&lt;/p&gt;<br/>
          &lt;p className="u-px-16"&gt;Padding Right & Left 16px&lt;/p&gt;<br/>
          &lt;p className="u-m-20"&gt;Margin 20px&lt;/p&gt;<br/>
          &lt;p className="u-mt-24"&gt;Margin Top 24px&lt;/p&gt;<br/>
          &lt;p className="u-my-32"&gt;Margin Top & Bottom 32px&lt;/p&gt;<br/>
          &lt;p className="u-mx-40"&gt;Margin Right & Left 40px&lt;/p&gt;<br/>
          &lt;p className="u-m-auto"&gt;Margin Auto&lt;/p&gt;<br/>
        </code>
      </div>
    )
  }
}

export default Margin;
