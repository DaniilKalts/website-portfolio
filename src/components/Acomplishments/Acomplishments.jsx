import React, { useState } from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import CountUp from 'react-countup'
import  ScrollTrigger from 'react-scroll-trigger'

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => {

  const [ counterOn, setCounterOn ] = useState(false)

  return (
    <Section>
      <SectionTitle>Personal Acomplishmnets</SectionTitle>
      <ScrollTrigger onEnter={() => setCounterOn(true)}>
        <Boxes>
          {counterOn && data.map((card, index) => (
            <Box key={index}>
              <BoxNum><CountUp start={0} end={card.number} duration={1} delay={0} />+</BoxNum>
              <BoxText>{card.text}</BoxText>
            </Box>
          ))}
        </Boxes>
      </ScrollTrigger>
    </Section>
  );
};

export default Acomplishments;
