import React from 'react'

const FormLayout = ({
  type
}) => {
  const formClassName = 'slds-form slds-form_' + type
  return (
    <div className={formClassName}>
      <div className="slds-form-element">
        <label className="slds-form-element__label" htmlFor="input-id-01">Text Input</label>
        <div className="slds-form-element__control">
          <input type="text" id="input-id-01" className="slds-input" placeholder="Placeholder Text" />
        </div>
      </div>
      <div className="slds-form-element">
        <label className="slds-form-element__label" htmlFor="input-id-02">Textarea Label</label>
        <div className="slds-form-element__control">
          <textarea id="input-id-02" className="slds-textarea" placeholder="Placeholder Text"></textarea>
        </div>
      </div>
      <fieldset className="slds-form-element">
        <legend className="slds-form-element__legend slds-form-element__label">Checkbox Group label</legend>
        <div className="slds-form-element__control">
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
        </div>
      </fieldset>
      <fieldset className="slds-form-element">
        <legend className="slds-form-element__legend slds-form-element__label">Checkbox Group label</legend>
        <div className="slds-form-element__control">
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
        </div>
      </fieldset>
    </div>
  )
}

export default FormLayout