import React from 'React'
import LinkLight from './LinkLight'
import {Block} from 'primer-react'

const NavLink = props => (
  <LinkLight fontSize={1} ml={3}>
    {props.title}
  </LinkLight>
)

export default NavLink
