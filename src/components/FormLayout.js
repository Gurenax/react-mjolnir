import React from 'react'
import FormElement from './FormElement'

const FormLayout = ({
  type
}) => {
  const formClassName = 'slds-form slds-form_' + type
  return (
    <div className={formClassName}>
      <FormElement label="Text Input" forId="input-id-01">
        <input type="text" id="input-id-01" className="slds-input" placeholder="Placeholder Text" />
      </FormElement>
      
      <FormElement label="Textarea Label" forId="input-id-02">
        <textarea id="input-id-02" className="slds-textarea" placeholder="Placeholder Text"></textarea>
      </FormElement>
      
      <FormElement label="Checkbox Group label" groupControl="true">
        <span className="slds-checkbox">
          <input type="checkbox" name="default" id="checkbox-3" value="on" />
          <label className="slds-checkbox__label" htmlFor="checkbox-3">
            <span className="slds-checkbox_faux"></span>
            <span className="slds-form-element__label">All opportunities owned by you</span>
          </label>
        </span>
        <span className="slds-checkbox">
          <input type="checkbox" name="default" id="checkbox-4" value="on" />
          <label className="slds-checkbox__label" htmlFor="checkbox-4">
            <span className="slds-checkbox_faux"></span>
            <span className="slds-form-element__label">All contacts in the account owned by you</span>
          </label>
        </span>
      </FormElement>
      
      <FormElement label="Radio Group label" groupControl="true">
        <span className="slds-radio">
          <input type="radio" id="radio-3" name="options" value="on" />
          <label className="slds-radio__label" htmlFor="radio-3">
            <span className="slds-radio_faux"></span>
            <span className="slds-form-element__label">Lead Generation</span>
          </label>
        </span>
        <span className="slds-radio">
          <input type="radio" id="radio-4" name="options" value="on" />
          <label className="slds-radio__label" htmlFor="radio-4">
            <span className="slds-radio_faux"></span>
            <span className="slds-form-element__label">Education Leads</span>
          </label>
        </span>
      </FormElement>
    </div>
  )
}

export default FormLayout