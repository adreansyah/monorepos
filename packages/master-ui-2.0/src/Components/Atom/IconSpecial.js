import React from 'react'

class IconSpecial extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <i className={this.props.styles}></i>
      )
  }
}

export default IconSpecial;
