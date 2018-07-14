import React from 'react'
import {Block, Text} from 'primer-react'
import {ThemeProvider} from 'styled-components'
import theme from './theme'

const Page = props => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Block color='gray-dark'>
        {props.children}
      </Block>
    </React.Fragment>
  </ThemeProvider>
)

export default Page
