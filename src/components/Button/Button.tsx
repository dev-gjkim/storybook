import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Color from "../../common/color.module.scss";

import theme from './theme';
const useStyles = makeStyles({
  root: {
    height: 32,
    borderRadius: '4px',
    textTransform: 'none',
    fontWeight: 500,
    boxShadow: 'none',
    padding: '6px 12px',
  },
  sizeSmall: {
    height: '24px'
  },
  outlined: {
    borderRadius: '3px',
    border: 'solid 1px #d8d8d8',
    backgroundColor: '#fff',
    color: '#58657f !important',
    '&:hover': {
      backgroundColor: 'rgba(137, 149, 174, 0.21)'
    },
    '&:disabled': {
      opacity: 0.4
    }
  },
  outlinedSizeSmall: {
    fontSize: '12px'
  },
  outlinedPrimary: {

  },
  outlinedSecondary: {

  },
  contained: {
    backgroundColor: '#e8f3fd',
    color: Color.primaryBlue,
    '&:hover': {
      boxShadow: 'none',
    },
  },
  containedPrimary: {
    color: '#ffffff !important',
    backgroundColor: `${Color.primaryBlue} !important`,
    '&:hover': {
      backgroundColor: '#2557a0 !important',
    },
    '&:disabled': {
      opacity: 0.2,
    }

  },
  containedSecondary: {
    color: '#58657f !important',
    backgroundColor: '#dbdee4 !important',
    '&:hover': {
      backgroundColor: '#ecedf0 !important',
    },
    '&:disabled': {
      opacity: 0.5,
    }
  },
  text: {
    backgroundColor: 'transparent'
  },
  textPrimary: {

  },
  textSecondary: {
    color: '#58657f',
    '&:hover': {
      backgroundColor: '#dbdee4',
    },
    '&:disabled': {
      backgroundColor: '#dbdee4',
      opacity: 0.5,
    }
  }
})

type ButtonProps = Pick<MuiButtonProps, "size" | "color" | "variant" | "disabled"
// "children"  | "endIcon" | "startIcon" | "fullWidth"
> & {
  children: string
};

/**
 * `Button`
 */
export const Button = ({
  children,
  ...props
}: ButtonProps) => {
  const classes = useStyles()
  return (
    <MuiButton
      classes={classes}
      type="button"
      {...props}
    >
      {children}
    </MuiButton>
  );
};
