import React from 'react';
import Slider from 'rc-slider';


const Range = Slider.Range;
class RangeSlider extends React.Component {
  
  render () {
    return (
      <div>
        {this.props.slider && (
          <div>
            <div className={`slider-label ${this.props.rangestyle}`}><span>{this.props.labelmaxvalue}</span></div>
            <Slider min={this.props.minvalue} max={this.props.maxvalue} defaultValue={this.props.defaultvalue} className={this.props.rangestyle} />
          </div>
        )}
        {this.props.range && (
          <div>
            <div className={`range-label ${this.props.rangestyle}`}><span>{this.props.labelminvalue}</span><span>{this.props.labelmaxvalue}</span></div>
            <Range allowCross={false} defaultValue={[`${this.props.minvalue}`, `${this.props.maxvalue}`]} className={this.props.rangestyle} />
          </div>
        )}
      </div>
    )
  }
}

export default RangeSlider;
