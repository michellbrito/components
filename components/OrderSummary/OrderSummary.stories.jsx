import React from 'react';

import { OrderSummary } from './OrderSummary';

export default {
  title: "OrderSummary",
  component: OrderSummary,
  args: {},
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <OrderSummary {...args} />;

export const Default = Template.bind({});
Default.args = {};
