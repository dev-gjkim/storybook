import { createTheme } from '@material-ui/core';
import Color from "../../common/color.module.scss";
export const theme = createTheme({
    overrides: {
        MuiButton: {
            root: {
                height: 32,
                borderRadius: '4px',
                textTransform: 'none',
            },
            outlined: {

            },
            outlinedPrimary: {

            },
            outlinedSecondary: {

            },
            contained: {

            },
            containedPrimary: {
                backgroundColor: Color.primaryBlue,
                '&:hover': {
                    backgroundColor: '#2557a0',
                }, '&:disabled': {
                    opacity: 0.2,
                }

            },
            containedSecondary: {

            },
            text: {

            },
            textPrimary: {

            },
            textSecondary: {

            }
        }
    }
})

export const PreviousTheme = createTheme({
    overrides: {
        MuiButton: {
            containedPrimary: {
                backgroundColor: '#e8f3fd !important',
                color: `${Color.primaryBlue} !important`,
            },
        }
    }
})
export default theme