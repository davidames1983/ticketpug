import React from 'react';
import { Venue } from './Venue';
import {ReactComponent as Section1} from '../assets/sectionImages/section-1.svg';

export default {
  title: 'Venue',
  component: Venue,
  argTypes: {
    venueName: { control: 'text' }
  },
};

const Template = (args) => (
    <Venue {...args}/>
);

export const Main = Template.bind({});
Main.args = {
    label: 'FivePoint Amphitheatre'
};

