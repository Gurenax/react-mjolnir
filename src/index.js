import React from 'react'
import ReactDOM from 'react-dom'
import './styles/dist/index.css'
import './include/slds'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
