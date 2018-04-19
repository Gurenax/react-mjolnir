import React from 'react'

const AbsoluteCenter = ({
  children
}) => {
  return (
    <div class="slds-align_absolute-center" style={{'height':'5rem'}}>
      { children }
    </div>
  )
}

export default AbsoluteCenter