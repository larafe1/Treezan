import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'Card',
  component: Card
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = ({
  w = '500px',
  h = '500px',
  title = 'Lorem ipsum',
  ...props
}) => (
  <Card w={w} h={h} title={title} {...props}>
    Content
  </Card>
);
