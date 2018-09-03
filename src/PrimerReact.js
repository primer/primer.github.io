import React from 'React'
import {Box, Heading, Text, Link} from 'primer-react'
import ButtonFill from './ButtonFill'
import LinkLight from './LinkLight'
import ReactIcon from './ReactIcon'



const PrimerReact = props => (

  <Box align="center" width={[1, 1, 6/12]} className="container-xl p-responsive">
    <ReactIcon />
    <Heading fontSize={5}  mb={4} color="blue.4">Primer React.js components coming soon!
    </Heading>
    <ButtonFill fontSize={3} href="https://primer.github.io/primer-react/">Component library</ButtonFill>
    <Text is="p" fontSize={2} mt={4} color="blue.3" className="text-mono">npm i @primer/components@1.0.0-beta</Text>
  </Box>

)

export default PrimerReact
