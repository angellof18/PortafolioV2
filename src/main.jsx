import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bulma/css/bulma.min.css'
import 'bulma-dashboard/dist/bulma-dashboard.min.css'
import 'bulma-list/css/bulma-list.css'
import 'bulma-quickview/dist/css/bulma-quickview.min.css'
//import 'bulma-quickview/dist/js/bulma-quickview.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'animate.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
