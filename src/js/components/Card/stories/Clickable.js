import React from 'react';
import { storiesOf } from '@storybook/react';

import { Bluetooth as Memory, Storage, Trigger } from 'grommet-icons';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Chart,
  Grid,
  Grommet,
  Text,
} from 'grommet';

const theme = {
  themeMode: 'dark',
  global: {
    font: {
      family: `-apple-system,
           BlinkMacSystemFont, 
           "Segoe UI"`,
    },
    colors: {
      blue: '#00C8FF',
      green: '#17EBA0',
      teal: '#82FFF2',
      purple: '#F740FF',
      red: '#FC6161',
      orange: '#FFBC44',
      yellow: '#FFEB59',
    },
  },
  card: {
    container: {
      background: '#FFFFFF12',
      elevation: 'none',
    },
    footer: {
      pad: { horizontal: 'medium', vertical: 'small' },
      background: '#FFFFFF06',
    },
  },
};

const gradient = [
  { value: 0, color: 'status-ok' },
  { value: 28, color: 'status-ok' },
  { value: 50, color: 'status-warning' },
  { value: 80, color: 'status-critical' },
];

const data = [
  {
    icon: <Memory size="large" />,
    title: 'Memory (EEC)',
    subTitle: '8 GB @ 400Hz',
    message: 'Past 24hrs',
  },
  {
    icon: <Storage size="large" />,
    title: 'Storage',
    subTitle: 'Sub-system and Devices',
    message: '36.8 TB available',
  },
  {
    icon: <Trigger size="large" />,
    title: 'Power (Watts)',
    subTitle: '720 Watt Service',
    message: 'Past 12hrs',
  },
];

const LineChartPreview = () => {
  return (
    <Box>
      <Chart
        type="line"
        dash
        round
        thickness="xsmall"
        bounds={[
          [0, 6],
          [0, 100],
        ]}
        values={[
          { value: [6, 100], label: 'one hundred' },
          { value: [5, 70], label: 'seventy' },
          { value: [4, 40], label: 'sixty' },
          { value: [3, 80], label: 'eighty' },
          { value: [2, 25], label: 'forty' },
          { value: [1, 50], label: 'thirty' },
          { value: [0, 25], label: 'sixty' },
        ]}
        aria-label="Card with analytics"
        color={gradient}
        size={{ height: 'xsmall' }}
      />
    </Box>
  );
};

const Identifier = ({ children, title, subTitle, size, ...rest }) => (
  <Box gap="small" align="center" direction="row" pad="small" {...rest}>
    {children}
    <Box>
      <Text size={size} weight="bold">
        {title}
      </Text>
      <Text size={size}>{subTitle}</Text>
    </Box>
  </Box>
);

export const Example = () => (
  <Grommet theme={theme} full>
    <Box pad="large" background="dark-1" height="100%">
      <Grid gap="medium" rows="small" columns={{ count: 'fit', size: 'small' }}>
        {data.map(value => (
          <Card
            key={value.title}
            onClick={() => {
              // eslint-disable-next-line no-alert
              alert('Card was Clicked!');
            }}
          >
            <CardBody pad="small">
              <Identifier
                title={value.title}
                subTitle={value.subTitle}
                size="small"
              >
                {value.icon}
              </Identifier>
              <LineChartPreview />
            </CardBody>
            <CardFooter pad={{ horizontal: 'medium', vertical: 'small' }}>
              <Text size="xsmall">{value.message}</Text>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </Box>
  </Grommet>
);

storiesOf('Card', module).add('Clickable', () => <Example />);
