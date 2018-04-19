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
          <div class="slds-align_absolute-center" style={{'height':'5rem'}}>
            <Heading value="React Mjolnir" />
          </div>
          <div class="slds-align_absolute-center" style={{'height':'5rem'}}>
            <div className="site-text-heading_label slds-m-top_none">
              Run Storybook <span className="color-background-highlight">yarn run storybook</span>
            </div>
          </div>
        </React.StrictMode>
      </div>
    )
  }
}

export default App
