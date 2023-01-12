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
    <VenueSection {...args}><SectionSVG/></VenueSection>
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
