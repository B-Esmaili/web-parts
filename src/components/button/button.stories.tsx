import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button ,ButtonProps} from './button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const DefaultFlavor = Template.bind({});
DefaultFlavor.args = {
  color:"#00f",
  content:"Click me!"
};

