import React, { Component } from 'react'
// import logo from '../assets/images/logo.svg'
import '../styles/dist/App.css'
import FormLayout from './FormLayout'
import Text from './Text'
import Heading from './Heading'

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.StrictMode>
          <Heading value="React Mjolnir" />
          <div className="site-text-heading--label slds-m-top--none">
            Salesforce Lightning Design System implemented in React
          </div>

          <div className="slds-grid slds-wrap">
          
            <div className="slds-col slds-size_1-of-2">
              <span>
                <Text value="Hello"/>
              </span>
            </div>
            <div className="slds-col slds-size_1-of-2">
              <FormLayout />
            </div>
            
          </div>
        </React.StrictMode>
      </div>
    )
  }
}

export default App
