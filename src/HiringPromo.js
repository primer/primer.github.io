import React from 'React'
import {Box, Heading, Text, Link} from 'primer-react'
import AtomImage from './AtomImage'
import ButtonFill from './ButtonFill'
import ButtonOutline from './ButtonOutline'
import LinkLight from './LinkLight'
import Octicon, {RadioTower} from '@githubprimer/octicons-react'



const HiringPromo = props => (

  <Box align="center" width={[1, 1, 6/12]} pb={3} className="container-xl p-responsive">

    <Heading fontSize={5}  mb={2} color="blue.4">
    <Octicon className="mr-3" icon={RadioTower} size='40' verticalAlign='top' />Join our team!</Heading>
    <Text is="p" fontSize={3} mb={4}>GitHub is looking for a Production Designer to join the design systems team. This role will tackle high visibility design projects and build a system of design assets for use in presentations.</Text>
    <LinkLight fontSize={2} mr={4} href="https://github.com/about/careers">View all open positions</LinkLight>
    <ButtonOutline href="https://boards.greenhouse.io/github/jobs/1272610">Apply →</ButtonOutline>


  </Box>

)

export default HiringPromo
