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
  background: "red",
  backgroundTint: 900,
  content: "Click me!"
};

export const Loading = Template.bind({});
Loading.args = {
  color: "#00f",
  content: "I am loading",
  loading: true
};

export const Colors = () => {

  const buttons : Array<any> = [
    { bg: "gray", bgt: 50 },
    { bg: "gray", bgt: 100 },
    { bg: "gray", bgt: 200 },
    { bg: "gray", bgt: 300 },
    { bg: "gray", bgt: 400 },
    { bg: "gray", bgt: 500 },
    { bg: "gray", bgt: 600 },
    { bg: "gray", bgt: 700 },
    { bg: "gray", bgt: 800 },
    { bg: "gray", bgt: 900 },
    { bg: "red", bgt: 50 },
    { bg: "red", bgt: 100 },
    { bg: "red", bgt: 200 },
    { bg: "red", bgt: 300 },
    { bg: "red", bgt: 400 },
    { bg: "red", bgt: 500 },
    { bg: "red", bgt: 600 },
    { bg: "red", bgt: 700 },
    { bg: "red", bgt: 800 },
    { bg: "red", bgt: 900 },
    { bg: "blue", bgt: 50 },
    { bg: "blue", bgt: 100 },
    { bg: "blue", bgt: 200 },
    { bg: "blue", bgt: 300 },
    { bg: "blue", bgt: 400 },
    { bg: "blue", bgt: 500 },
    { bg: "blue", bgt: 600 },
    { bg: "blue", bgt: 700 },
    { bg: "blue", bgt: 800 },
    { bg: "blue", bgt: 900 },
    { bg: "yellow", bgt: 50 },
    { bg: "yellow", bgt: 100 },
    { bg: "yellow", bgt: 200 },
    { bg: "yellow", bgt: 300 },
    { bg: "yellow", bgt: 400 },
    { bg: "yellow", bgt: 500 },
    { bg: "yellow", bgt: 600 },
    { bg: "yellow", bgt: 700 },
    { bg: "yellow", bgt: 800 },
    { bg: "yellow", bgt: 900 },
    { bg: "green", bgt: 50 },
    { bg: "green", bgt: 100 },
    { bg: "green", bgt: 200 },
    { bg: "green", bgt: 300 },
    { bg: "green", bgt: 400 },
    { bg: "green", bgt: 500 },
    { bg: "green", bgt: 600 },
    { bg: "green", bgt: 700 },
    { bg: "green", bgt: 800 },
    { bg: "green", bgt: 900 },
    { bg: "indigo", bgt: 50 },
    { bg: "indigo", bgt: 100 },
    { bg: "indigo", bgt: 200 },
    { bg: "indigo", bgt: 300 },
    { bg: "indigo", bgt: 400 },
    { bg: "indigo", bgt: 500 },
    { bg: "indigo", bgt: 600 },
    { bg: "indigo", bgt: 700 },
    { bg: "indigo", bgt: 800 },
    { bg: "indigo", bgt: 900 },
    { bg: "purple", bgt: 50 },
    { bg: "purple", bgt: 100 },
    { bg: "purple", bgt: 200 },
    { bg: "purple", bgt: 300 },
    { bg: "purple", bgt: 400 },
    { bg: "purple", bgt: 500 },
    { bg: "purple", bgt: 600 },
    { bg: "purple", bgt: 700 },
    { bg: "purple", bgt: 800 },
    { bg: "purple", bgt: 900 },
    { bg: "pink", bgt: 50 },
    { bg: "pink", bgt: 100 },
    { bg: "pink", bgt: 200 },
    { bg: "pink", bgt: 300 },
    { bg: "pink", bgt: 400 },
    { bg: "pink", bgt: 500 },
    { bg: "pink", bgt: 600 },
    { bg: "pink", bgt: 700 },
    { bg: "pink", bgt: 800 },
    { bg: "pink", bgt: 900 },
  ];

  return <div>
    {
      buttons.map((b, i) => (
        <div key={i}>
          <Button background={b.bg} backgroundTint={b.bgt}> I am gray 500 </Button>
        </div>
      ))
    }
  </div>
};