import React from 'react';
import { VenueSection } from './VenueSection';
import {ReactComponent as SectionSVG} from '../assets/sectionImages/section-1.svg';

export default {
  title: 'VenueSection',
  component: VenueSection,
  argTypes: {
    selected: { control: 'boolean' },
    available: { control: 'boolean' },
    label: { control: 'text' },
    labelX: { control: 'number' },
    labelY: { control: 'number' },
    labelSize: { control: 'number' },
  },
};

const Template = (args) => (
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="900.000000pt" height="864.000000pt" viewBox="0 0 900.000000 864.000000" preserveAspectRatio="xMidYMid meet">
    <VenueSection {...args}>
      <SectionSVG/>
    </VenueSection>
  </svg>
);

export const Main = Template.bind({});
Main.args = {
    available: true,
    selected: false,
    label: "1",
    rotateLabel: false,
    labelX: 2800,
    labelY: -7000,
    labelSize: 3000,
    onClick: undefined
};
