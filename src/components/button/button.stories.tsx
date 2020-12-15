import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { WPContextProps, WPContextProvider } from '../context'

import { Button, ButtonProps } from './button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const options: WPContextProps = {
  options: {}
}

const Template: Story<ButtonProps> = (args) => <WPContextProvider options={options}> <Button {...args} /> </WPContextProvider>;

export const DefaultFlavor = Template.bind({});
DefaultFlavor.args = {
  color: "#00f",
  content: "Click me!"
};

export const Loading = Template.bind({});
Loading.args = {
  color: "#00f",
  content: "I am loading",
  loading : true
};



