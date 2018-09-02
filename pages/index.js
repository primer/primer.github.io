import React from 'react'
import {Box, Block, Heading, Text} from 'primer-react'
import Octicon, {iconsByName} from '@githubprimer/octicons-react'
import BoxPro from '../src/BoxPro'
import Nav from '../src/Nav'
import Hero from '../src/Hero'
import PrimerCSS from '../src/PrimerCSS'
import Divider from '../src/Divider'


export default () =>
<React.Fragment>
  <BoxPro bg='black'>
    <Nav />
    <Hero />
    <Divider my={4} />
    <PrimerCSS />
    <Divider my={4} />
  </BoxPro>
</React.Fragment>
