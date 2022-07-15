import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from './Modal';

export default {
  title: 'Modal',
  component: Modal
} as ComponentMeta<typeof Modal>;

export const Default: ComponentStory<typeof Modal> = ({
  w = '500px',
  h = '500px',
  title = 'Lorem ipsum',
  ...props
}) => (
  <Modal w={w} h={h} title={title} {...props}>
    Content
  </Modal>
);
