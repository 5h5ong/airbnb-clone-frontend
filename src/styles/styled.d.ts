import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      mainAirbnbColor: string;
      darkGrayColor: string;
      lightGrayColor: string;
    };
  }
}
