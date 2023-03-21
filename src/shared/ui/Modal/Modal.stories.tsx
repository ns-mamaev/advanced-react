import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis scelerisque dolor, eget volutpat ante. Fusce eu orci arcu. Maecenas id blandit sem. Vestibulum augue nunc, placerat id sollicitudin at, egestas sit amet elit. ',
  isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis scelerisque dolor, eget volutpat ante. Fusce eu orci arcu. Maecenas id blandit sem. Vestibulum augue nunc, placerat id sollicitudin at, egestas sit amet elit.',
  isOpen: true,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
