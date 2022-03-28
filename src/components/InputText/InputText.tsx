import React, { useState, useCallback, useEffect } from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles'
import Color from "../../common/color.module.scss";
import { debounce } from '../../common/lib/utils';

const inputTheme = createTheme({
  overrides: {
    MuiInputBase: {
      root: {
        color: '#191f28',
        fontSize: '14px',
      },
    },
    MuiOutlinedInput: {
      root: {
        border: 'solid 1px rgba(109, 115, 129, 0.4)',
        '&::-ms-input-placeholder, &::-moz-placeholder, &::-webkit-input-placeholder, &::placeholder': {
          color: 'rgba(56, 58, 63, 0.6)',
        },
        '&.Mui-disabled': {
          color: 'rgba(56, 58, 63, 0.6)',
        },
        '&.Mui-error': {
          border: 'solid 2px #ee5a4b'
        },
        '&.Mui-focused': {
          border: '2px solid #4285f4',
        }
      },
      input: {
        height: '40px',
        padding: '0 10px',
        borderRadius: '4px',
        border: 'none',

      },
      notchedOutline: {
        border: 'none'
      }
    }
  },
});

type InputTextProps = TextFieldProps

/**
 * `InputText`
 */
export const InputText = ({
  variant = 'outlined',
  inputProps,
  ...props
}: InputTextProps) => {
  const [inputValue, setInputValue] = useState<string>(props.value as string || '');

  const dispatchEvent = debounce((event: any) => {
    if (props.onChange instanceof Function) {
      props.onChange(event);
    }
  }, 200);

  const onChangeHanlder = useCallback(
    (e) => {
      e.persist();
      setInputValue(e.target.value);
      dispatchEvent(e);
    },
    [dispatchEvent],
  );
  return (

    <ThemeProvider theme={inputTheme}>
      <TextField
        variant={variant}
        inputProps={{ maxLength: 255, ...inputProps }}
        {...props}
        onChange={onChangeHanlder}
        value={inputValue}
      />
    </ThemeProvider>
  );
};
