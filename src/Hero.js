import React from 'React'
import {Box, Heading, Text, Link} from 'primer-react'
import Image from './Image'
import HeroImage from './HeroImage'

const Hero = props => (
  <Box py={2}>
    <Box my='4' py={0,9} className='container-xl p-responsive mx-auto p-responsive d-flex flex-items-center flex-wrap flex-md-nowrap flex-md-row-reverse'>
      <Box px={0,6,0} width={[1, 10/12, 7/12]} m='auto'>
        <HeroImage />
      </Box>
      <Box my={[4,3,0]} width={[1, 1, 5/12]}>
        <Heading color="blue.4" mb={1} fontSize={7} fontWeight='bold'>Primer</Heading>
        <Text color="blue.2" pr={[0,3,5]} is='p' fontSize={5}>Resources, tooling, and design guidelines for building interfaces with GitHub&#8217;s design system</Text>
      </Box>
    </Box>
  </Box>
)

export default Hero
