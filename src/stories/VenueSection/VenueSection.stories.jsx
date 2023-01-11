import React from 'react';
import { VenueSection } from './VenueSection';
import {ReactComponent as SectionSVG} from '../assets/sectionImages/section-1.svg';

export default {
  title: 'VenueSection',
  component: VenueSection,
  argTypes: {
    label: { control: 'text' },
    selected: { control: 'boolean' },
    available: { control: 'boolean' },
    xPos: { control: 'number' },
    yPos: { control: 'number' },
    labelX: { control: 'number' },
    labelY: { control: 'number' },
  },
};

const Template = (args) => (
    <VenueSection {...args}><SectionSVG/></VenueSection>
);

export const Main = Template.bind({});
Main.args = {
    label: '301',
    available: true,
    selected: false,
    rotateLabel: false,
    labelX: 160,
    labelY: 140,
    xPos: 0,
    yPos: 0,
    onClick: undefined
};