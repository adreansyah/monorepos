import React from 'react'

class SelectButton extends React.Component {
  render () {
    return (
      <div>
        <button className={`btn-select ${this.props.styles}`}>{this.props.label}</button>
      </div>
    )
  }
}

export default SelectButton;
