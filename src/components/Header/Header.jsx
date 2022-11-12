
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, Logo, NavLink, SocialIcons, Span } from './Header.styles';

const Header = () =>  (
  <Container>
    <Div1>
       <NavLink to="/">
            <Logo>
                <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
            </Logo>
       </NavLink>
    </Div1>
    <Div2>
          <li> 
            <NavLink href='#projects'>
                Projects
            </NavLink>
          </li>
          <li>
            <NavLink href='#tech'>
                Technologies
            </NavLink>
          </li>
          <li>
            <NavLink hrref="#about">
                About
            </NavLink>
          </li>
       </Div2>
       <Div3>
            <SocialIcons href='https://github.com'>
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href='https://linkedin.com'>
                <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href='https://instagram.com'>
                <AiFillInstagram size="3rem" />
            </SocialIcons>
       </Div3>
  </Container>
);

export default Header;
