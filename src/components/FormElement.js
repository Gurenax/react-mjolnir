import React from 'react'

const FormElement = ({
  label,
  forId,
  groupControl,
  singleCheckbox,
  children,
  inlineHelp,
  tooltip
}) => {
  const useTag = "<use xlink:href=\"/icons/utility-sprite/svg/symbols.svg#info\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" />"

  if(!!groupControl) {
    return (
      <fieldset className="slds-form-element">
        <legend className="slds-form-element__legend slds-form-element__label">{ label }
        {
          !!tooltip &&
          <div className="slds-form-element__icon">
            <button aria-describedby="help" className="slds-button slds-button_icon">
              <svg className="slds-icon slds-icon_x-small slds-icon-text-default"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{__html: useTag}} />
              <span className="slds-assistive-text">Help</span>
            </button>
            <div className="slds-popover slds-popover_tooltip slds-nubbin_bottom-left" role="tooltip" id="help" style={{"position": "absolute", "top": "-45px", "left": "-15px", "width": "170px"}}>
              <div className="slds-popover__body">{ tooltip }</div>
            </div>
          </div>
        }
        </legend>
        <div className="slds-form-element__control">
          { children }
        </div>
        { !!inlineHelp && <div className="slds-form-element__help">{ inlineHelp }</div> }
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
          {
            !!tooltip &&
            <div className="slds-form-element__icon">
              <button aria-describedby="help" className="slds-button slds-button_icon">
                <svg className="slds-icon slds-icon_x-small slds-icon-text-default"
                      aria-hidden="true"
                      dangerouslySetInnerHTML={{__html: useTag}} />
                <span className="slds-assistive-text">Help</span>
              </button>
              <div className="slds-popover slds-popover_tooltip slds-nubbin_bottom-left" role="tooltip" id="help" style={{"position": "absolute", "top": "-45px", "left": "-15px", "width": "170px"}}>
                <div className="slds-popover__body">{ tooltip }</div>
              </div>
            </div>
          }
          { !!inlineHelp && <div className="slds-form-element__help">{ inlineHelp }</div> }
        </span>
      </div>
    )
  }
  else {
    return (
      <div className="slds-form-element">
        <label className="slds-form-element__label" htmlFor={ forId }>{ label }</label>
        {
          !!tooltip &&
          <div className="slds-form-element__icon">
            <button aria-describedby="help" className="slds-button slds-button_icon">
              <svg className="slds-icon slds-icon_x-small slds-icon-text-default"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{__html: useTag}} />
              <span className="slds-assistive-text">Help</span>
            </button>
            <div className="slds-popover slds-popover_tooltip slds-nubbin_bottom-left" role="tooltip" id="help" style={{"position": "absolute", "top": "-45px", "left": "-15px", "width": "170px"}}>
              <div className="slds-popover__body">{ tooltip }</div>
            </div>
          </div>
        }
        <div className="slds-form-element__control">
          { children }
        </div>
        { !!inlineHelp && <div className="slds-form-element__help">{ inlineHelp }</div> }
      </div>

    )
  }
}

export default FormElement