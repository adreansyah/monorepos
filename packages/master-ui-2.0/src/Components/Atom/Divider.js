import React from 'react';

const Divider = (props) => {

    const { direction, size, styles, children } = props;
    const childrenWithProps = React.Children.map(children, child => {
        return React.cloneElement(child, {
          ...props
        });
      });
    return (
        <div className={`${direction ? `dv-${direction}`: ''} ${size ? `dv-${size}`: ''} ${styles}` }>
            {childrenWithProps}
        </div>
    );
};

const Text = (props) => {

    const { size, background, children } = props;
    return (
        <span className={`dv-text ${size ? `u-tx-${size}`:''} ${background ? `u-bg-${background}`:''}`}>{children}</span>
    )
}

Divider.defaultProps = {
    size: 'base',
    background: 'white'
}

Divider.Text = Text;

export default Divider;