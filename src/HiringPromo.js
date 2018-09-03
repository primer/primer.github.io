import React from 'React'
import {Box, Heading, Text, Link} from 'primer-react'
import AtomImage from './AtomImage'
import ButtonFill from './ButtonFill'
import ButtonPromo from './ButtonPromo'
import LinkLight from './LinkLight'
import LinkPromo from './LinkPromo'
import Octicon, {RadioTower} from '@githubprimer/octicons-react'



const HiringPromo = props => (

  <Box align="center" width={[1, 1, 6/12]} className="container-xl p-responsive">
    <Heading fontSize={5}  mb={2} color="orange.3">
    <Octicon className="mr-3" icon={RadioTower} size='40' verticalAlign='top' />Join our team!</Heading>
    <Text is="p" fontSize={3} mb={4} px={[0, 3, 5]} color="orange.1">GitHub is looking for a Production Designer to join the design systems team. This role will tackle high visibility design projects and build a system of design assets for use in presentations.</Text>
    <LinkPromo fontSize={2} mr={4} href="https://github.com/about/careers">View all open positions</LinkPromo>
    <ButtonPromo href="https://boards.greenhouse.io/github/jobs/1272610">Apply →</ButtonPromo>
  </Box>

)

export default HiringPromo
