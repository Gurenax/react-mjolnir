import React from 'react'

const FormElement = ({
  label,
  forId,
  groupControl,
  singleCheckbox,
  children
}) => {
  if(!!groupControl) {
    return (
      <fieldset className="slds-form-element">
        <legend className="slds-form-element__legend slds-form-element__label">{ label }</legend>
        <div className="slds-form-element__control">
          { children }
        </div>
      </fieldset>
    )
  }
  else if(!!singleCheckbox) {
    return (
      <div className="slds-form-element">
        <span className="slds-checkbox">
          <input type="checkbox" name="options" id={ forId } value="on" />
          <label className="slds-checkbox__label" htmlFor={ forId }>
            <span className="slds-checkbox_faux"></span>
            <span className="slds-form-element__label">{ label }</span>
          </label>
        </span>
      </div>
    )
  }
  else {
    return (
      <div className="slds-form-element">
        <label className="slds-form-element__label" htmlFor={ forId }>{ label }</label>
        <div className="slds-form-element__control">
          { children }
        </div>
      </div>
    )
  }
}

export default FormElement