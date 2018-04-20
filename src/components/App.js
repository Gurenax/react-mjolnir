import React, { Component } from 'react'
// import logo from '../assets/images/logo.svg'
import '../styles/dist/App.css'
import Text from './Text'
import AbsoluteCenter from './AbsoluteCenter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.StrictMode>
          <AbsoluteCenter>
            <Text type="text" size="heading_large">
              React Mjolnir
            </Text>
          </AbsoluteCenter>
          <AbsoluteCenter>
            <div className="site-text-heading_label slds-m-top_none">
              Run Storybook <span className="color-background-highlight">yarn run storybook</span>
            </div>
          </AbsoluteCenter>
        </React.StrictMode>
      </div>
    )
  }
}

export default App
