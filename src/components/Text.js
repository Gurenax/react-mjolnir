import React from 'react'

const Text = ({
  children,
  type,
  size
}) => {
  const className = 'slds-' + type + '-' + size
  return (
    <div className={className}>{ children }</div>
  )
}
export default Text