import React, { Children, useCallback, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputText } from './InputText';
import styles from './inputText.module.scss'

export default {
  title: 'Component/InputText',
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />;



export const Default = Template.bind({});
Default.args = {
  variant: 'outlined',
  placeholder:'text'
};

export const Example = () => {
  const [inputValue, setInputValue] = useState('')
  const onChangeHanlder = useCallback(({ target: { value } }) => {
    setInputValue(value)
  }, [])

  return (
    <>
      Input Value: {inputValue}
      <InputText
        name="example"
        value={inputValue}
        onChange={onChangeHanlder}
        placeholder={'Enter value'}
      /></>
  );
};

