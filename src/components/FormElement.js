import React from 'react'

const FormElement = ({
  label,
  forId,
  groupControl,
  children
}) => {
  if(!groupControl) {
    return (
      <div className="slds-form-element">
        <label className="slds-form-element__label" htmlFor={ forId }>{ label }</label>
        <div className="slds-form-element__control">
          { children }
        </div>
      </div>
    )
  }
  else {
    return (
      <fieldset className="slds-form-element">
        <legend className="slds-form-element__legend slds-form-element__label">{ label }</legend>
        <div className="slds-form-element__control">
          { children }
        </div>
      </fieldset>
    )
  }
}

export default FormElement