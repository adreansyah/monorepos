import React from "react";

class OutsideAlerter extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = null;
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.onOutsideClick(event);
    }
  };

  render() {
    return <div ref={this.setWrapperRef}>{this.props.children}</div>;
  }
}

export default OutsideAlerter;
