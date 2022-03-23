import React, { Children } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputText } from './InputText';
import styles from './inputText.module.scss'

export default {
  title: 'Component/InputText',
  component: InputText,
  argTypes: {
    children: {
      name: 'children',
      type: { name: 'string', required: false },
      defaultValue: 'Button',
      description: 'The content of the button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: {
        type: 'text'
      }
    }

  },
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />;



export const Cancel = Template.bind({});
Cancel.args = {
  variant: 'text',
  color: 'secondary',
  children: 'Cancel'
};

export const Previous = Template.bind({});
Previous.args = {
  variant: 'contained',
  color: 'default',
  children: 'Previous'
};

export const Next = Template.bind({});
Next.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Next'
};
export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  color: 'primary'
};
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'contained',
  color: 'secondary'
};
export const Default = Template.bind({});
Default.args = {
  variant: 'contained',
};

export const All = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <h3>Sizes</h3>
        <div className={styles['content-wrap']}>
          <div className={styles['sub-content']}>
            <div className={styles.label}>Small</div>
          </div>

        </div>
      </div>
    </div>

  );
};

