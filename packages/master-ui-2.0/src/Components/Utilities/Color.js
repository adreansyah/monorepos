import React from 'react'

class Color extends React.Component {
  render () {
    return (
      <div>
        <h1 className="title">Color</h1>
        <h1>Text Color</h1>
        <ul className="u-ds-flex u-fx-wrap">
          <li>
            <p className="u-tx-primary u-p-12 u-mb-8">Text Color Primary</p>
          </li>
          <li>
            <p className="u-tx-secondary-green u-p-12 u-mb-8">Text Color Secondary Green</p>
          </li>
          <li>
            <p className="u-tx-secondary-red u-p-12 u-mb-8">Text Color Secondary Red</p>
          </li>
          <li>
            <p className="u-tx-success u-p-12 u-mb-8">Text Color Success</p>
          </li>
          <li>
            <p className="u-tx-danger u-p-12 u-mb-8">Text Color Danger</p>
          </li>
          <li>
            <p className="u-tx-warning u-p-12 u-mb-8">Text Color Warning</p>
          </li>
          <li>
            <p className="u-tx-info u-p-12 u-mb-8">Text Color Info</p>
          </li>
          <li>
            <p className="u-tx-light u-p-12 u-mb-8">Text Color Light</p>
          </li>
          <li>
            <p className="u-tx-white u-bg-primary u-p-12">Text Color white</p>
          </li>
          <li>
            <p className="u-tx-dark u-p-12 u-mb-8">Text Color Dark</p>
          </li>
        </ul>
        <code>
          &lt;p className="u-tx-primary"&gt;Text Color Primary&lt;/p&gt;<br/>
          &lt;p className="u-tx-secondary-green"&gt;Text Color Secondary Green&lt;/p&gt;<br/>
          &lt;p className="u-tx-secondary-red"&gt;Text Color Secondary Red&lt;/p&gt;<br/>
          &lt;p className="u-tx-success"&gt;Text Color Success&lt;/p&gt;<br/>
          &lt;p className="u-tx-danger"&gt;Text Color Danger&lt;/p&gt;<br/>
          &lt;p className="u-tx-warning"&gt;Text Color Warning&lt;/p&gt;<br/>
          &lt;p className="u-tx-info"&gt;Text Color Info&lt;/p&gt;<br/>
          &lt;p className="u-tx-light"&gt;Text Color Light&lt;/p&gt;<br/>
          &lt;p className="u-tx-white"&gt;Text Color White&lt;/p&gt;<br/>
          &lt;p className="u-tx-dark"&gt;Text Color Dark&lt;/p&gt;
        </code>

        <h1>Background Color</h1>
        <ul className="u-ds-flex u-fx-wrap">
          <li className="u-bg-primary u-tx-white u-p-12 u-m-12">Background Color Primary</li>
          <li className="u-bg-secondary-green u-tx-white u-p-12 u-m-12">Background Color Secondary Green</li>
          <li className="u-bg-secondary-red u-tx-white u-p-12 u-m-12">Background Color Secondary Red</li>
          <li className="u-bg-success u-tx-white u-p-12 u-m-12">Background Color Success</li>
          <li className="u-bg-danger u-tx-white u-p-12 u-m-12">Background Color Danger</li>
          <li className="u-bg-warning u-tx-white u-p-12 u-m-12">Background Color Warning</li>
          <li className="u-bg-info u-tx-white u-p-12 u-m-12">Background Color Info</li>
          <li className="u-bg-light u-tx-white u-p-12 u-m-12">Background Color Light</li>
          <li className="u-bg-white u-p-12 u-m-12">Background Color white</li>
          <li className="u-bg-dark u-tx-white u-p-12 u-m-12">Background Color Dark</li>
        </ul>
        <code>
          &lt;p className="u-bg-primary"&gt;Background Color Primary&lt;/p&gt;<br/>
          &lt;p className="u-bg-secondary-green"&gt;Background Color Secondary Green&lt;/p&gt;<br/>
          &lt;p className="u-bg-secondary-red"&gt;Background Color Secondary Red&lt;/p&gt;<br/>
          &lt;p className="u-bg-success"&gt;Background Color Success&lt;/p&gt;<br/>
          &lt;p className="u-bg-danger"&gt;Background Color Danger&lt;/p&gt;<br/>
          &lt;p className="u-bg-warning"&gt;Background Color Warning&lt;/p&gt;<br/>
          &lt;p className="u-bg-info"&gt;Background Color Info&lt;/p&gt;<br/>
          &lt;p className="u-bg-light"&gt;Background Color Light&lt;/p&gt;<br/>
          &lt;p className="u-bg-white"&gt;Background Color White&lt;/p&gt;<br/>
          &lt;p className="u-bg-dark"&gt;Background Color Dark&lt;/p&gt;
        </code>
      </div>
    )
  }
}

export default Color;
