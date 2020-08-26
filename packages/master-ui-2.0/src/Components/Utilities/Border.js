import React from 'react'

class Border extends React.Component {
  render () {
    return (
      <div>
          <h1 className="title">Border</h1>
        <h1>Border Color</h1>
          <ul className="u-ds-flex u-fx-wrap">
            <li className="u-bd u-bd-primary u-p-12 u-m-12">Border Color Primary</li>
            <li className="u-bd u-bd-secondary-green u-p-12 u-m-12">Border Color Secondary Green</li>
            <li className="u-bd u-bd-secondary-red u-p-12 u-m-12">Border Color Secondary Red</li>
            <li className="u-bd u-bd-success u-p-12 u-m-12">Border Color Success</li>
            <li className="u-bd u-bd-danger u-p-12 u-m-12">Border Color Danger</li>
            <li className="u-bd u-bd-warning u-p-12 u-m-12">Border Color Warning</li>
            <li className="u-bd u-bd-info u-p-12 u-m-12">Border Color Info</li>
            <li className="u-bd u-bd-light u-p-12 u-m-12">Border Color Light</li>
            <li className="u-bd u-bd-white u-p-12 u-m-12">Border Color white</li>
            <li className="u-bd u-bd-dark u-p-12 u-m-12">Border Color Dark</li>
          </ul>
          <code>
            &lt;p className="u-bd-primary"&gt;Border Color Primary&lt;/p&gt;<br/>
            &lt;p className="u-bd-secondary-green"&gt;Border Color Secondary Green&lt;/p&gt;<br/>
            &lt;p className="u-bd-secondary-red"&gt;Border Color Secondary Red&lt;/p&gt;<br/>
            &lt;p className="u-bd-success"&gt;Border Color Success&lt;/p&gt;<br/>
            &lt;p className="u-bd-danger"&gt;Border Color Danger&lt;/p&gt;<br/>
            &lt;p className="u-bd-warning"&gt;Border Color Warning&lt;/p&gt;<br/>
            &lt;p className="u-bd-info"&gt;Border Color Info&lt;/p&gt;<br/>
            &lt;p className="u-bd-light"&gt;Border Color Light&lt;/p&gt;<br/>
            &lt;p className="u-bd-white"&gt;Border Color White&lt;/p&gt;<br/>
            &lt;p className="u-bd-dark"&gt;Border Color Dark&lt;/p&gt;<br/>
          </code>


          <h1>Border Additive</h1>
          <ul className="u-ds-flex u-fx-wrap">
            <li className="u-bd u-p-12 u-m-12">Border</li>
            <li className="u-bd-top u-p-12 u-m-12">Border Top</li>
            <li className="u-bd-right u-p-12 u-m-12">Border Right</li>
            <li className="u-bd-bottom u-p-12 u-m-12">Border Bottom</li>
            <li className="u-bd-left u-p-12 u-m-12">Border Left</li>
          </ul>
          <code>
            &lt;p className="u-bd"&gt;Border&lt;/p&gt;<br/>
            &lt;p className="u-bd-top"&gt;Border Top&lt;/p&gt;<br/>
            &lt;p className="u-bd-right"&gt;Border Right&lt;/p&gt;<br/>
            &lt;p className="u-bd-bottom"&gt;Border Bottom&lt;/p&gt;<br/>
            &lt;p className="u-bd-left"&gt;Border Left&lt;/p&gt;<br/>
          </code>

          <h1>Border Subtractive</h1>
          <ul className="u-ds-flex u-fx-wrap">
            <li className="u-bd-0 u-p-12 u-m-12">Border None</li>
            <li className="u-bd u-bd-top-0 u-p-12 u-m-12">Border Top None</li>
            <li className="u-bd u-bd-right-0 u-p-12 u-m-12">Border Right None</li>
            <li className="u-bd u-bd-bottom-0 u-p-12 u-m-12">Border Bottom None</li>
            <li className="u-bd u-bd-left-0 u-p-12 u-m-12">Border Left None</li>
          </ul>
          <code>
            &lt;p className="u-bd-0"&gt;Border None&lt;/p&gt;<br/>
            &lt;p className="u-bd-top-0"&gt;Border Top None&lt;/p&gt;<br/>
            &lt;p className="u-bd-right-0"&gt;Border Right None&lt;/p&gt;<br/>
            &lt;p className="u-bd-bottom-0"&gt;Border Bottom None&lt;/p&gt;<br/>
            &lt;p className="u-bd-left-0"&gt;Border Left None&lt;/p&gt;<br/>
          </code>

          <h1>Border Radius</h1>
          <ul className="u-ds-flex u-fx-wrap">
            <li className="u-bd u-rnd u-p-12 u-m-12">Border Rounded</li>
            <li className="u-bd u-rnd-top u-p-12 u-m-12">Border Rounded Top</li>
            <li className="u-bd u-rnd-right u-p-12 u-m-12">Border Rounded Right</li>
            <li className="u-bd u-rnd-bottom u-p-12 u-m-12">Border Rounded Bottom</li>
            <li className="u-bd u-rnd-left u-p-12 u-m-12">Border Rounded Left</li>
            <li className="u-bd u-rnd-circle u-p-12 u-m-12" style={{width:"40px",height:"40px"}}></li>
            <li className="u-bd u-rnd-0 u-p-12 u-m-12">Border Rounded 0</li>
          </ul>
          <code>
            &lt;p className="u-bd u-rnd"&gt;Border Rounded&lt;/p&gt;<br/>
            &lt;p className="u-bd u-rnd-top"&gt;Border Rounded Top&lt;/p&gt;<br/>
            &lt;p className="u-bd u-rnd-right"&gt;Border Rounded Right&lt;/p&gt;<br/>
            &lt;p className="u-bd u-rnd-bottom"&gt;Border Rounded Bottom&lt;/p&gt;<br/>
            &lt;p className="u-bd u-rnd-left"&gt;Border Rounded&lt;/p&gt;<br/>
            &lt;p className="u-bd u-rnd-circle"&gt;Border Circle&lt;/p&gt;<br/>
            &lt;p className="u-bd u-rnd-0"&gt;Border Rounded 0&lt;/p&gt;<br/>
          </code>
      </div>
    )
  }
}

export default Border;
