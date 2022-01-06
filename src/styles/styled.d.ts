import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      mainAirbnbColor: string;
      darkGrayColor: string;
      lightGrayColor: string;
      basicButtonHoverColor: string;
    };
    /**
     * 공통적으로 사용되는 수치
     * @remarks
     * 수치는 숫자가 아닌 문자열로 기록됨. 사용할 때 px를 붙이지 않고
     * 바로 사용하는 게 좋다고 생각했기 때문임.
     */
    size: {
      maxWidth: string;
    };
  }
}
