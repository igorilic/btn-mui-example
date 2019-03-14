import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
var palette = {
  common: {
    black: '#000',
    white: '#FFF'
  },
  background: {
    paper: '#FFFFFF',
    default: '#00374D'
  },
  primary: {
    main: '#29AAFF',
    contrastText: '#FFF'
  },
  secondary: {
    main: '#7F9BA6',
    light: '#B2C3C9',
    dark: '#00374D',
    contrastText: '#FFF'
  },
  text: {
    primary: '#00374D',
    secondary: '#29AAFF'
  }
};
var shadows = ['none', 'none', '0px 2px 2px 0px rgba(0,0,0,0.06),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)', '0px 2px 8px 0px rgba(0,0,0,0.06),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)', '0px 4px 8px 0px rgba(0,0,0,0.1),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)', '0px 6px 8px 0px rgba(0,0,0,0.12),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)', '0px 6px 18px 0px rgba(0,0,0,0.12),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)', '0px 6px 28px 0px rgba(0,0,0,0.12),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)', '0px 8px 32px 0px rgba(0,0,0,0.12),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)', // end of styleguide
'0px 8px 32px 0px rgba(0,0,0,0.12),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)', '0px 8px 32px 0px rgba(0,0,0,0.12),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)', '0px 8px 32px 0px rgba(0,0,0,0.12),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)', '0px 8px 32px 0px rgba(0,0,0,0.12),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)', '0px 8px 32px 0px rgba(0,0,0,0.12),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)', '0px 8px 32px 0px rgba(0,0,0,0.12),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)', '0px 8px 32px 0px rgba(0,0,0,0.12),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)', '0px 8px 32px 0px rgba(0,0,0,0.12),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)', '0px 8px 32px 0px rgba(0,0,0,0.12),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)', '0px 8px 32px 0px rgba(0,0,0,0.12),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)', '0px 8px 32px 0px rgba(0,0,0,0.12),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)', '0px 8px 32px 0px rgba(0,0,0,0.12),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)', '0px 8px 32px 0px rgba(0,0,0,0.12),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)', '0px 8px 32px 0px rgba(0,0,0,0.12),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)', '0px 8px 32px 0px rgba(0,0,0,0.12),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)', '0px 8px 32px 0px rgba(0,0,0,0.12),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)'];
var typography = {
  // Supertitle
  headline: {
    color: '#000',
    fontSize: '2.57rem',
    fontWeight: 500,
    lineHeight: '1.1667em'
  },
  // Header 1
  h1: {
    color: '#000',
    fontSize: '1.29rem',
    fontWeight: 700,
    lineHeight: '1.1667em'
  },
  // Header 2
  h2: {
    color: '#000',
    fontSize: '1.14rem',
    fontWeight: 500,
    lineHeight: '1.1875em'
  },
  // Subtitle
  subheading: {
    color: '#000',
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: '1.2143em'
  },
  // Body
  body1: {
    color: '#000',
    fontSize: '1.14rem',
    fontWeight: 400,
    lineHeight: '1.375em'
  },
  body1Next: {
    color: '#000',
    fontSize: '1.14rem',
    fontWeight: 400,
    lineHeight: '1.375em'
  },
  // Paragraph
  body2: {
    color: '#000',
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: '1.7143em'
  },
  body2Next: {
    color: '#000',
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: '1.7143em'
  },
  // Caption
  caption: {
    color: '#000',
    fontSize: '0.86rem',
    fontWeight: 400,
    lineHeight: '1.1667em'
  },
  captionNext: {
    color: '#000',
    fontSize: '0.86rem',
    fontWeight: 400,
    lineHeight: '1.1667em'
  },
  // Caption Bold
  subtitle1: {
    color: '#000',
    fontSize: '0.86rem',
    fontWeight: 700,
    lineHeight: '1.1667em'
  },
  // Caption 2
  subtitle2: {
    color: '#000',
    fontSize: '0.86rem',
    fontWeight: 700,
    lineHeight: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  }
};
var theme = createMuiTheme({
  palette: palette,
  shadows: shadows,
  typography: _objectSpread({}, typography, {
    fontFamily: ['"Roboto"', 'sans-serif'].join(','),
    useNextVariants: true
  })
}); // Override Component default Props

theme.props = {
  MuiButtonBase: {
    disableRipple: true
  },
  MuiButton: {
    variant: 'outlined'
  },
  MuiFormControl: {
    variant: 'outlined'
  },
  MuiSvgIcon: {
    fontSize: 'small'
  } // Override Component default styles

};
theme.overrides = {
  MuiCssBaseline: {
    '@global': {
      body: {
        background: "radial-gradient(circle at 49% 55%, #00638A, ".concat(theme.palette.background.default, ")")
      }
    }
  },
  MuiTypography: {
    root: {
      fontFamily: ['"Roboto"', 'sans-serif'].join(',')
    }
  },
  MuiButton: {
    root: {
      borderRadius: '29px',
      textTransform: 'initial',
      fontSize: '1rem',
      lineHeight: 1.19,
      fontWeight: 500
    },
    outlined: {
      padding: '10px 40px 11px 40px',
      '&:hover': {
        boxShadow: theme.shadows[4]
      },
      '&:active': {
        boxShadow: theme.shadows[0]
      }
    },
    outlinedPrimary: {
      backgroundColor: theme.palette.primary.main,
      border: 'none',
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: 'rgba(41, 170,255, 0.8)',
        border: 'none',
        color: 'rgba(255, 255, 255, 0.96)'
      },
      '&$disabled': {
        backgroundColor: theme.palette.secondary.light,
        border: 'none',
        color: 'rgba(255, 255, 255, 0.4)'
      }
    },
    outlinedSecondary: {
      color: theme.palette.secondary.dark,
      borderColor: theme.palette.secondary.main,
      '&:hover': {
        borderColor: theme.palette.secondary.dark
      },
      '&:active': {
        borderColor: theme.palette.secondary.light
      }
    }
  },
  MuiIconButton: {
    root: {
      border: '1px solid currentColor',
      boxShadow: '0 0 1px 0px currentColor inset, 0 0 1px 0px currentColor'
    }
  },
  MuiInputLabel: {
    root: {
      //TODO: use Color Variable
      color: 'rgba(0, 55, 77, 0.6)'
    },
    outlined: {
      transform: 'translate(14px, 13px) scale(1)'
    }
  },
  MuiOutlinedInput: {
    root: {
      //TODO: use Color Variable
      background: '#fafafa',
      borderRadius: '29px'
    },
    input: {
      padding: '13px 13px 9px'
    },
    multiline: {
      padding: '13px 13px 9px'
    },
    adornedStart: {
      paddingLeft: 8
    },
    inputAdornedStart: {
      borderTopRightRadius: 29,
      borderBottomRightRadius: 29
    },
    adornedEnd: {
      paddingRight: 8
    },
    inputAdornedEnd: {
      borderTopLeftRadius: 29,
      borderBottomLeftRadius: 29
    }
  },
  MuiSelect: {
    outlined: {
      borderRadius: '29px',
      '&:focus': {
        borderRadius: '29px'
      }
    }
  },
  MuiCheckbox: {
    root: {
      border: 'none'
    }
  },
  MuiPrivateNotchedOutline: {
    root: {
      borderRadius: '29px'
    }
  },
  MuiInputAdornment: {
    root: {
      //TODO: use Color Variable
      color: '#7f9ba6',
      '& >*': {
        padding: 2,
        color: 'rgba(255, 255, 255, 0.96)',
        background: '#7f9ba6',
        borderRadius: '50%'
      }
    }
  },
  MuiTab: {
    labelContainer: {
      '&:hover:after': {
        content: 'bla',
        width: '100%',
        borderBottom: "2px solid ".concat(theme.palette.primary.main)
      }
    }
  },
  MuiPrivateTabIndicator: {
    root: {
      borderLeft: "12px solid ".concat(theme.palette.common.white),
      borderRight: "12px solid ".concat(theme.palette.common.white)
    }
  }
};
export default function withTheme(WrappedComponent) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "render",
        value: function render() {
          return React.createElement(MuiThemeProvider, {
            theme: theme
          }, React.createElement(CssBaseline, null), React.createElement(WrappedComponent, this.props));
        }
      }]);

      return _class;
    }(React.Component)
  );
}
export { theme };