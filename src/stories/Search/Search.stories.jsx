import React from 'react';

import { Search } from './Search';

export default {
  title: 'Search',
  component: Search,
  argTypes: {
    placeholder: { control: 'text' },
  },
};

const Template = (args) => <Search {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Search'
};

