import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './Hero.styles.';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Our Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of Imaon is to help people get mobile apps and web sites! <br />
        Our company has built over 1000 projects using numerous dev tools! <br />
        If you wanna have your own application - contact us.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;