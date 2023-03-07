import React from 'react'
import { Logo } from '../0Navbar/NavbarStyles'
import { FtBottomDiv, FtContainer, FtLink, FtLinkCon, FtLogoCon, FtWrapper } from './FooterStyles'

const Footer = () => {
  return (
    <FtContainer>
      <FtWrapper>
        <FtLogoCon>
            <Logo>Logo</Logo>
        </FtLogoCon>
        <FtLinkCon>
            <FtLink>Home</FtLink>
            <FtLink>Pricing</FtLink>
            <FtLink>Contact</FtLink>
            <FtLink>Account</FtLink>
        </FtLinkCon>
        <FtLinkCon>
            <FtLink>Home</FtLink>
            <FtLink>Pricing</FtLink>
            <FtLink>Contact</FtLink>
            <FtLink>Account</FtLink>
        </FtLinkCon>
        <FtLinkCon>
            <FtLink>Home</FtLink>
            <FtLink>Pricing</FtLink>
            <FtLink>Contact</FtLink>
            <FtLink>Account</FtLink>
        </FtLinkCon>
      </FtWrapper>
      <FtBottomDiv/>
    </FtContainer>
  )
}

export default Footer
