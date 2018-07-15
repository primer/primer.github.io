import React from 'react'
import {Box, Block, Heading, Text} from 'primer-react'
import Octicon, {iconsByName} from '@githubprimer/octicons-react'
import BoxPro from '../src/BoxPro'
import Nav from '../src/Nav'


export default () =>
<React.Fragment>
  <BoxPro bg='black'>
    <Nav />
    <BoxPro>
      some text
    </BoxPro>
  </BoxPro>
</React.Fragment>
