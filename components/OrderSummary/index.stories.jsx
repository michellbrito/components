import React from 'react';
import { OrderSummary } from './index';

export default {
  title: "Order Summary",
  component: OrderSummary,
  args: {},
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <OrderSummary {...args} />;

export const Default = Template.bind({});
Default.args = {};
