import React from 'react'

class Typography extends React.Component {
  render () {
    return (
      <div >
       <h1 className="title">Typography</h1>
        <div className="u-ds-flex u-tx-info">
        <p className="u-pr-24">These styles map as much as possible to functional 
            roles so you know when each can be used.
        </p>
        <p>Each type are divided to 2-3 level. Consider the background 
            color and hierarchy when decide the text style to 
            keep the UI clear and easily recognizable when scanning the page.
        </p>
        </div>
        <h1>Basic</h1>
        <div className="th-bg-light u-p-24 u-mt-24">
        <div className="row">
            <div className="col-4 u-fx-column">
                <span className="u-tx-d1">D1</span>
                <span className="u-tx-d1 u-tx-white">D1</span>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Properties</h2>
                <ul className="u-tx-info">
                    <li className="u-mb-4">Font size: 42 px</li>
                    <li className="u-mb-4">Font weight: 500</li>
                    <li className="u-mb-4">Line height: 44</li>
                    <li className="u-mb-4">Color: B7/fff</li>
                </ul>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Suggested Usage</h2>
                <p className="u-tx-info">Main display titles, use only once per page.</p>
            </div>
        </div>
        <div className="row u-mt-24">
            <div className="col-4 u-fx-column">
                <span className="u-tx-d2">D2</span>
                <span className="u-tx-d2 u-tx-light">D2</span>
                <span className="u-tx-d2 u-tx-white">D2</span>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Properties</h2>
                <ul className="u-tx-info">
                    <li className="u-mb-4">Font size: 28 px</li>
                    <li className="u-mb-4">Font weight: 500</li>
                    <li className="u-mb-4">Line height: 30</li>
                    <li className="u-mb-4">Color: B7/B5/fff</li>
                </ul>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Suggested Usage</h2>
                <p className="u-tx-info">Lower display titles, use only once per page.</p>
            </div>
        </div>
        <div className="row u-mt-24">
            <div className="col-4 u-fx-column">
                <span className="u-tx-d3">D3</span>
                <span className="u-tx-d3 u-tx-light">D3</span>
                <span className="u-tx-d3 u-tx-white">D3</span>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Properties</h2>
                <ul className="u-tx-info">
                    <li className="u-mb-4">Font size: 24 px</li>
                    <li className="u-mb-4">Font weight: Regular</li>
                    <li className="u-mb-4">Line height: 26</li>
                    <li className="u-mb-4">Color: B7/B5/fff</li>
                </ul>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Suggested Usage</h2>
                <p className="u-tx-info">Lower display titles, use for headings that identify key functionality</p>
            </div>
        </div>
        <div className="row u-mt-24">
            <div className="col-4 u-fx-column">
                <span className="u-tx-d4">D4</span>
                <span className="u-tx-d4 u-tx-light">D4</span>
                <span className="u-tx-d4 u-tx-white">D4</span>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Properties</h2>
                <ul className="u-tx-info">
                    <li className="u-mb-4">Font size: 20 px</li>
                    <li className="u-mb-4">Font weight: Regular</li>
                    <li className="u-mb-4">Line height: 22</li>
                    <li className="u-mb-4">Color: B7/B5/fff</li>
                </ul>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Suggested Usage</h2>
                <p className="u-tx-info">Lowest display titles, use for sub-section and field group headings.</p>
            </div>
        </div>
        </div>
        <p className="u-my-24 u-tx-info">Here are all the support classes</p>
        <ul className="list-page">
        <li><span className="u-tx-primary">.u-tx-d1</span> </li>
        <li><span className="u-tx-primary">.u-tx-d2</span> </li>
        <li><span className="u-tx-primary">.u-tx-d3</span> </li>
        <li><span className="u-tx-primary">.u-tx-d4</span> </li>
        </ul>
        <div className="th-bg-light u-p-24 u-mt-24">
        <div className="row">
            <div className="col-4 u-fx-column">
                <h1>H1</h1>
                <h1 className="u-tx-white">H1</h1>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Properties</h2>
                <ul className="u-tx-info">
                    <li className="u-mb-4">Font size: 16 px</li>
                    <li className="u-mb-4">Font weight: 500</li>
                    <li className="u-mb-4">Line height: 18</li>
                    <li className="u-mb-4">Color: B7/fff</li>
                </ul>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Suggested Usage</h2>
                <p className="u-tx-info">Used for heading up a paragraph.</p>
            </div>
        </div>
        <div className="row u-mt-24">
            <div className="col-4 u-fx-column">
                <h2>H2</h2>
                <h2 className="u-tx-white">H2</h2>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Properties</h2>
                <ul className="u-tx-info">
                    <li className="u-mb-4">Font size: 14 px</li>
                    <li className="u-mb-4">Font weight: 500</li>
                    <li className="u-mb-4">Line height: 16</li>
                    <li className="u-mb-4">Color: B7/B5/fff</li>
                </ul>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Suggested Usage</h2>
                <p className="u-tx-info">Used for heading up a paragraph.</p>
            </div>
        </div>
        <div className="row u-mt-24">
            <div className="col-4 u-fx-column">
                <h3>H3</h3>
                <h3 className="u-tx-white">H3</h3>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Properties</h2>
                <ul className="u-tx-info">
                    <li className="u-mb-4">Font size: 12 px</li>
                    <li className="u-mb-4">Font weight: 500 ALLCAPS</li>
                    <li className="u-mb-4">Line height: 14</li>
                    <li className="u-mb-4">Color: B7/fff</li>
                </ul>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Suggested Usage</h2>
                <p className="u-tx-info">Heading up a group of list items. And it should be allcaps.</p>
            </div>
        </div>
        <div className="row u-mt-24">
            <div className="col-4 u-fx-column">
                <h4>H4</h4>
                <h4 className="u-tx-light">H4</h4>
                <h4 className="u-tx-white">H4</h4>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Properties</h2>
                <ul className="u-tx-info">
                    <li className="u-mb-4">Font size: 10 px</li>
                    <li className="u-mb-4">Font weight: 500</li>
                    <li className="u-mb-4">Line height: 12</li>
                    <li className="u-mb-4">Color: B7/B5/fff</li>
                </ul>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Suggested Usage</h2>
                <p className="u-tx-info">Heading up a group of list items. And it should be allcaps.</p>
            </div>
        </div>
        </div>
        <p className="u-my-24 u-tx-info">Here are all the support classes</p>
        <ul className="list-page">
        <li><span className="u-tx-primary">h1</span> </li>
        <li><span className="u-tx-primary">h2</span> </li>
        <li><span className="u-tx-primary">h3</span> </li>
        <li><span className="u-tx-primary">h4</span> </li>
        </ul>
        <div className="th-bg-light u-p-24 u-mt-24">
        <div className="row">
            <div className="col-4 u-fx-column">
                <div>B1(Body 1)</div>
                <div className="u-tx-info">B1(Body 1)</div>
                <div className="u-tx-black40">B1(Body 1)</div>
                <div className="u-tx-light">B1(Body 1)</div>
                <div className="u-tx-white">B1(Body 1)</div>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Properties</h2>
                <ul className="u-tx-info">
                    <li className="u-mb-4">Font size: 14 px</li>
                    <li className="u-mb-4">Font weight: Regular/500</li>
                    <li className="u-mb-4">Line height: 16</li>
                    <li className="u-mb-4">Color: B7/B5/B4/B3/fff</li>
                </ul>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Suggested Usage</h2>
                <p className="u-tx-info">Use this style for defining single-line body text. Or it could be a title for a paragraph with using a medium (500) weight.</p>
            </div>
        </div>
        <div className="row u-mt-24">
            <div className="col-4 u-fx-column">
                <div className="u-tx-b2">B2(Body 2)</div>
                <div className="u-tx-white u-tx-b2">B2(Body 2)</div>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Properties</h2>
                <ul className="u-tx-info">
                    <li className="u-mb-4">Font size: 12 px</li>
                    <li className="u-mb-4">Font weight: Regular</li>
                    <li className="u-mb-4">Line height: 14</li>
                    <li className="u-mb-4">Color: B5/fff</li>
                </ul>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Suggested Usage</h2>
                <p className="u-tx-info">Mostly used for the help text. Suggested actions or helpful info that gives added context or helps a user understand next steps.</p>
            </div>
        </div>
        <div className="row u-mt-24">
            <div className="col-4 u-fx-column">
                <div className="u-tx-b3">B3(Body 3)</div>
                <div className="u-tx-white u-tx-b3">B3(Body 3)</div>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Properties</h2>
                <ul className="u-tx-info">
                    <li className="u-mb-4">Font size: 10 px</li>
                    <li className="u-mb-4">Font weight: Regular</li>
                    <li className="u-mb-4">Line height: 12</li>
                    <li className="u-mb-4">Color: B7/fff</li>
                </ul>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Suggested Usage</h2>
                <p className="u-tx-info">Heading up a group of list items. And it should be allcaps.</p>
            </div>
        </div>
        <div className="row u-mt-24">
            <div className="col-4 u-fx-column">
                <div className="u-tx-b4">B4(Body 4)</div>
                <div className="u-tx-b4 u-tx-light">B4(Body 4)</div>
                <div className="u-tx-b4 u-tx-white">B4(Body 4)</div>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Properties</h2>
                <ul className="u-tx-info">
                    <li className="u-mb-4">Font size: 10 px</li>
                    <li className="u-mb-4">Font weight: 500</li>
                    <li className="u-mb-4">Line height: 12</li>
                    <li className="u-mb-4">Color: B7/B5/fff</li>
                </ul>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Suggested Usage</h2>
                <p className="u-tx-info">Used for the subtle text at a card modules.</p>
            </div>
        </div>
        <div className="row u-mt-24">
            <div className="col-4 u-ds-flex">
                <div className="u-mr-24">
                    <p>P1</p>
                    <p className="u-tx-light">P1</p>
                    <p className="u-tx-white">P1</p>
                </div>
                <div>
                    <p className="u-tx-p2">P2</p>
                    <p className="u-tx-p2 u-tx-light">P2</p>
                    <p className="u-tx-p2 u-tx-white">P2</p>
                </div>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Properties</h2>
                <ul className="u-tx-info">
                    <li className="u-mb-4">Font size: 14/12 px</li>
                    <li className="u-mb-4">Font weight: Regular/500</li>
                    <li className="u-mb-4">Line height: 21/18</li>
                    <li className="u-mb-4">Color: B7/B5/fff</li>
                </ul>
            </div>
            <div className="col-4">
                <h2 className="u-mb-12">Suggested Usage</h2>
                <p className="u-tx-info">Used for paragraph/bodytext. And use the Medium/Bold font weight for highlighting important pieces of information.</p>
            </div>
        </div>
        </div>
        <p className="u-my-24 u-tx-info">Here are all the support classes</p>
        <ul className="list-page">
        <li><span className="u-tx-primary">.u-tx-b1 (default)</span> </li>
        <li><span className="u-tx-primary">.u-tx-b2</span> </li>
        <li><span className="u-tx-primary">.u-tx-b3</span> </li>
        <li><span className="u-tx-primary">.u-tx-b3</span> </li>
        <li><span className="u-tx-primary">.u-tx-p1</span> </li>
        <li><span className="u-tx-primary">.u-tx-p2</span> </li>
        </ul>
        <h1>Text Link</h1>
        <h1>Alert Text</h1>
        <h1>Button Label</h1>
        <a href="">tag a</a>
        <a href="" className="u-tx-secondary-green">tag b</a>
      </div>
    )
  }
}

export default Typography;
