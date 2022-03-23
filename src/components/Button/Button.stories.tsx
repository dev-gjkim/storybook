import React, { Children } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import styles from './button.module.scss'

export default {
  title: 'Component/Button',
  component: Button,
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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;



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
            <Button size="small">Button</Button>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles.label}>medium</div>
            <Button size="medium">Button</Button>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles.label}>Large</div>
            <Button size="large">Button</Button>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <h3>Colors</h3>
        <div className={styles['content-wrap']}>
          <div className={styles['sub-content']}>
            <div className={styles.label}>default</div>
            <Button color="default">Button</Button>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles.label}>primary</div>
            <Button color="primary">Button</Button>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles.label}>secondary</div>
            <Button color="secondary">Button</Button>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <h3>Default Buttons</h3>
        <div className={styles['content-wrap']}>
          <div className={styles['sub-content']}>
            <div className={styles.label}>text
              <span className={styles['no-use']}> !현재 정의된 디자인 없음</span>
            </div>
            <Button variant="text" size='small'>Button</Button>
            <Button variant="text">Button</Button>
            <Button variant="text" size='large'>Button</Button>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles.label}>outlined</div>
            <Button variant="outlined" size='small'>Button</Button>
            <Button variant="outlined">Button</Button>
            <Button variant="outlined" size='large'>Button</Button>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles.label}>contained</div>
            <Button variant="contained" size='small'>Button</Button>
            <Button variant="contained">Button</Button>
            <Button variant="contained" size='large'>Button</Button>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles.label}>disabled</div>
            <Button variant="text" disabled>Button</Button>
            <Button variant="outlined" disabled>Button</Button>
            <Button variant="contained" disabled>Button</Button>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <h3>Primary Buttons</h3>
        <div className={styles['content-wrap']}>
          <div className={styles['sub-content']}>
            <div className={styles.label}>text
              <span className={styles['no-use']}> !현재 정의된 디자인 없음</span>
            </div>
            <Button variant="text" size='small' color='primary'>Button</Button>
            <Button variant="text" color='primary'>Button</Button>
            <Button variant="text" size='large' color='primary'>Button</Button>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles.label}>outlined
              <span className={styles['no-use']}> !현재 정의된 디자인 없음</span>
            </div>
            <Button variant="outlined" size='small' color='primary'>Button</Button>
            <Button variant="outlined" color='primary'>Button</Button>
            <Button variant="outlined" size='large' color='primary'>Button</Button>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles.label}>contained</div>
            <Button variant="contained" size='small' color='primary'>Button</Button>
            <Button variant="contained" color='primary'>Button</Button>
            <Button variant="contained" size='large' color='primary'>Button</Button>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles.label}>disabled</div>
            <Button variant="text" color='primary' disabled>Button</Button>
            <Button variant="outlined" color='primary' disabled>Button</Button>
            <Button variant="contained" color='primary' disabled>Button</Button>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <h3>Secondary Buttons</h3>
        <div className={styles['content-wrap']}>
          <div className={styles['sub-content']}>
            <div className={styles.label}>text</div>
            <Button variant="text" color='secondary' size='small'>Button</Button>
            <Button variant="text" color='secondary'>Button</Button>
            <Button variant="text" color='secondary' size='large'>Button</Button>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles.label}>outlined
              <span className={styles['no-use']}> !현재 정의된 디자인 없음</span>
            </div>
            <Button variant="outlined" color='secondary' size='small'>Button</Button>
            <Button variant="outlined" color='secondary'>Button</Button>
            <Button variant="outlined" color='secondary' size='large'>Button</Button>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles.label}>contained</div>
            <Button variant="contained" color='secondary' size='small'>Button</Button>
            <Button variant="contained" color='secondary'>Button</Button>
            <Button variant="contained" color='secondary' size='large'>Button</Button>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles.label}>disabled</div>
            <Button variant="text" color='secondary' disabled>Button</Button>
            <Button variant="outlined" color='secondary' disabled>Button</Button>
            <Button variant="contained" color='secondary' disabled>Button</Button>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <h3>Step Buttons</h3>
        <div className={styles['content-wrap']}>
          <div className={styles['sub-content']}>
            <Button variant="text" color='secondary'>Cancel</Button>
          </div>
          <div className={styles['sub-content']}>
            <Button variant="contained" color='default'>Previous</Button>
          </div>
          <div className={styles['sub-content']}>
            <Button variant="contained" color='primary'>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

