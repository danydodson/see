import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'

import withErrorHandler from 'errorHandling'
import { App as ErrorBoundaryFallback } from 'errorHandling/Fallbacks'

import Layout from 'sections/Layout'
import { ThemeProvider } from 'theme'
import { StoreProvider } from 'store'

import { BrowserRouter as Router } from 'react-router-dom'

import { datadogRum } from '@datadog/browser-rum'

datadogRum.init({
  applicationId: 'bb43f1e6-94fb-418e-bf58-1ee838f734bc',
  clientToken: 'puba970fe54efad4e948a2db5627b07ea4e',
  site: 'datadoghq.com',
  service: 'nonce',
  //  env: 'production',
  //  version: '1.0.0',
  sampleRate: 100,
  trackInteractions: true
})

function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Box display="flex">
          <CssBaseline />
          <Router>
            <Layout />
          </Router>
        </Box>
      </ThemeProvider>
    </StoreProvider>
  )
}

export default withErrorHandler(App, ErrorBoundaryFallback)
