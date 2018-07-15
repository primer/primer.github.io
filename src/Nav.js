import React from 'React'
import BoxPro from './BoxPro'
import NavLink from './NavLink'
import {Link} from 'primer-react'
import LinkLight from './LinkLight'
import Octicon, {MarkGithub} from '@githubprimer/octicons-react'

const Nav = props => (
  <BoxPro bg='gray.9' py={2}>
    <div className='d-flex flex-items-center flex-wrap flex-md-nowrap p-responsive'>
      <LinkLight nounderline pl={2} mt={1} href='https://primer.github.io'>
        <BoxPro color='blue.2' inline>
          <Octicon icon={MarkGithub} ariaLabel="GitHub Primer home" size='medium' />
        </BoxPro>
      </LinkLight>
      <div className='flex-auto pr-3 pr-lg-4 text-right'>
        <NavLink
          href='https://styleguide.github.com/primer/'
          title='Docs'
        />
        <NavLink
          href='https://github.com/primer/primer#install'
          title='Install'
        />
        <NavLink
          href='https://primer.github.io/storybook/'
          title='Storybook'
        />
        <NavLink
          href='https://github.com/primer/primer/blob/master/CHANGELOG.md'
          title='Changelog'
        />
      </div>
    </div>
  </BoxPro>
)

export default Nav
