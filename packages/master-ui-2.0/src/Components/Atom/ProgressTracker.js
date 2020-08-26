import React from 'react'

const Tracker = ({children, step = 0, inline = false, ...props}) => {
  const childrens = React.Children.map(children, (child, index) =>
    React.cloneElement(child, { index, step, inline })
  );

  return (
    <div {...props} className={`tracker ${inline ? 'tracker--inline' : ''}`}>
      {childrens}
    </div>
  )
}

export default Tracker