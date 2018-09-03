import React from 'React'
import {Box, Heading, Text, Link} from 'primer-react'
import AtomImage from './AtomImage'
import ButtonFill from './ButtonFill'
import ButtonOutline from './ButtonOutline'

const AtomPlugins = props => (
  <Box>
    <Box my={[0, 3, 6]} className='container-xl p-responsive mx-auto p-responsive d-flex flex-items-center flex-wrap flex-md-nowrap flex-md-row-reverse'>
      <Box px={0,6,0} width={[1, 10/12, 6/12]} m='auto'>
        <AtomImage />
      </Box>
      <Box my={[4,3,0]} width={[1, 1, 6/12]} pr={[0,3,5]} >
        <Heading color="blue.4" mb={3} fontSize={5} lineHeight="1.25" fontWeight='bold'>A better development experience with Atom</Heading>
        <Text color="blue.2" is='p' fontSize={3} mb={4}>Install this custom Atom package to autocomplete classnames for Primer CSS and rails helpers for Octicons</Text>
        <ButtonFill mr={2} href='https://atom.io/packages/autocomplete-primer'>Install package</ButtonFill>
        <ButtonOutline href='https://atom.io/'>Get Atom</ButtonOutline>

        <Text is="p" fontSize={2} mt={4} color="blue.3" className="text-mono">apm install autocomplete-primer</Text>

      </Box>
    </Box>
  </Box>
)

export default AtomPlugins
