import React from 'react'

class Container extends React.Component {
  render () {
    return (
      <div>
        <h1 className="title">Layout</h1>
        <h1>Container</h1>
        <ul className="list-page">
            <li><span className="u-tx-primary">.container</span> </li>
            <li><span className="u-tx-primary">.container-fluid</span> </li>
        </ul>
        <h1>Grid</h1>
        <ul className="list-page">
            <li><span className="u-tx-primary">.row</span> </li>
            <li><span className="u-tx-primary">.col</span> </li>
            <li><span className="u-tx-primary">.col-1</span> </li>
            <li><span className="u-tx-primary">.col-2</span> </li>
            <li><span className="u-tx-primary">.col-3</span> </li>
            <li><span className="u-tx-primary">.col-4</span> </li>
            <li><span className="u-tx-primary">.col-5</span> </li>
            <li><span className="u-tx-primary">.col-6</span> </li>
            <li><span className="u-tx-primary">.col-7</span> </li>
            <li><span className="u-tx-primary">.col-8</span> </li>
            <li><span className="u-tx-primary">.col-9</span> </li>
            <li><span className="u-tx-primary">.col-10</span> </li>
            <li><span className="u-tx-primary">.col-11</span> </li>
            <li><span className="u-tx-primary">.col-12</span> </li>
        </ul>
        <div className="row u-bd">
          <div className="col u-bd-right u-p-8">.Col</div>
          <div className="col u-bd-right u-p-8">.Col</div>
          <div className="col u-p-8">.Col</div>
        </div>
        <div className="row u-bd u-mt-24">
          <div className="col-3 u-bd-right u-p-8">.Col-3</div>
          <div className="col-6 u-bd-right u-p-8">.Col-6</div>
          <div className="col-3 u-p-8">.Col-3</div>
        </div>
      </div>
    )
  }
}

export default Container;
