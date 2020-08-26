import React from 'react'
import { Icon } from './'

const Tracker = ({children, index, step, label, inline, ...props}) => {
  const number = index < step
    ? <Icon iwidth={`i ${!inline ? 'i--large' : ''}`} name="check" width="16" height="16" fill="#FFFFFF" class="add-document"/>
    : index + 1
  const active = index === step ? 'track__label--active' : ''
  const finished = index < step ? 'track__label--finished' : ''

  return (
    <div className="track">
      <div className={`track__label ${active} ${finished}`}>
        <span>{number}</span>
        <h1 className="u-m-0">{label}</h1>
      </div>
      <span className="track__divider" />
      {children && (
        <div className="track__description">
          {children}
        </div>
      )}
    </div>
  )
}

export default Tracker
