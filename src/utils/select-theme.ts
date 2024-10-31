import type { Theme } from 'react-select';

const selectTheme = (theme: Theme) => ({
  ...theme,
  borderRadius: 6,
  colors: {
    ...theme.colors,
    primary: 'white',
    primary75: 'white',
    primary50: '#475569',
    primary25: 'black',
    neutral0: '#1e293b',
    neutral20: '#475569',
    neutral50: 'white',
    neutral80: 'white'
  }
});

export { selectTheme };