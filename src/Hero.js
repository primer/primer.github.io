import React from 'React'
import BoxPro from './BoxPro'
import {Heading, Text, Link} from 'primer-react'
import Image from './Image'
import HeroImage from './HeroImage'
import ButtonFill from './ButtonFill'
import ButtonOutline from './ButtonOutline'

const Hero = props => (
  <BoxPro py={2}>
    <BoxPro my='4' py={0,9} className='container-lg p-responsive container-lg mx-auto p-responsive d-flex flex-items-center flex-wrap flex-md-nowrap flex-md-row-reverse'>
      <BoxPro px={0,6,0} width={[9/12,7/12]} m='auto' className='my-md-4'>
        <HeroImage />
      </BoxPro>
      <BoxPro color='blue.3' my={3,3,0} width={[1, 5/12]}>
        <BoxPro color='blue.4'>
          <Heading mb={4} fontSize='00-light' fontWeight='bold'>Primer</Heading>
        </BoxPro>
        <ButtonFill mr={2} href='https://styleguide.github.com/primer/'>Documentation</ButtonFill>
        <ButtonOutline href='https://github.com/primer/primer'>GitHub</ButtonOutline>
        <Text tag='p' mt={5} mono fontSize={2}>npm i primer@latest</Text>
      </BoxPro>
    </BoxPro>
  </BoxPro>
)

export default Hero
