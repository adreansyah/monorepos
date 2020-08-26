import React from 'react'
import uploadImage from '../../assets/images/ic_large_upload.svg'

class DropZone extends React.Component {
  render () {
    return (
      <div>
        <div className="dropzone-wrap">
            {this.props.icon && (
              <div>
                <div className={`dropzone ${this.props.stylesdropzone}`}>
                  <input type="file" className="inputfile" id="fileElem" multiple accept="image/*" onChange={this.props.handleFiles} />
                  <label className="button" htmlFor="fileElem"><img src={uploadImage} /><p>Drag & drop or <span className="u-tx-primary u-fw-bold">Browser</span></p></label>
                </div>
              </div>
            )}
            {this.props.default && (
              <div>
                <div className={`dropzone dropzone--default ${this.props.stylesdropzone}`}>
                <input type="file" className="inputfile" id="fileElem" multiple accept="image/*" onChange={this.props.handleFiles} />
                <label className="btn u-tx-info u-bd-light" htmlFor="fileElem">Unggah Document</label>
                </div>
              </div>
            )}
          {this.props.note && (
            <ul className="note">
              <li>Image requirement: format PNG,JPG,PDF.</li>
              <li>Maximum size 3MB</li>
            </ul>
          )}
        </div>


      </div>
    )
  }
}

export default DropZone;
