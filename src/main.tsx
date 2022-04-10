import React from 'react'
import ReactDOM from 'react-dom'
import 'styles/index.css'
import App from 'App'
import AdminApp from 'AdminApp'
import theme from 'theme'
import { ThemeProvider } from '@mui/material'

const IS_ADMIN = import.meta.env.VITE_IS_ADMIN

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>{IS_ADMIN ? <AdminApp /> : <App />}</ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
