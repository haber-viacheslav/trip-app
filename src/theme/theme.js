export const theme = Object.freeze({
  fonts: {
    main: `'Montserrat', sans-serif;`,
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  colors: {
    backdrop: '#42424279',
    darkGrey: '#262626',
    lightGrey: '#9A9A9A',
    white: '#FDF7F2',
    light: '#f0f0f0',
    clearWhite: '#FFFFFF',
    black: '#000000',
    darkBlue: '#100E3A',
    lightBlue: '#4DC0B2',
    transparent: 'transparent',
    currentColor: 'currentColor',
  },
  shadows: {
    mainShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
    secondShadow: '7px 13px 14px rgba(116, 177, 232, 0.24)',
  },
  media: {
    sm: '(min-width: 320px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1280px)',
    smToMd: '(min-width: 320px) and (max-width: 767.99px)',
    mdToLg: '(min-width: 768px) and (max-width: 1279.99px)',
    toMd: '(max-width: 767.99px)',
    smToLg: '(min-width: 320px) and (max-width: 1279.99px)',
  },
});
