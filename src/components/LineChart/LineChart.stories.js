import React from 'react';
import LineChart from './LineChart';

export default {
    component: LineChart,
    title: 'LineChart',
}

const Template = args => <LineChart  {...args} />  

export const Default = Template.bind({});