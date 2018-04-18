import React, { Component } from 'react'
// import logo from '../assets/images/logo.svg'
import '../styles/dist/App.css'
import FormLayout from './FormLayout'
import Text from './Text'

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.StrictMode>
          <div class="slds-grid slds-wrap">
            <div class="slds-col">
              <span>
                <Text value="Hello"/>
              </span>
            </div>
            <div class="slds-col">
              <FormLayout />
            </div>
            
          </div>
        </React.StrictMode>
      </div>
    )
  }
}

export default App
