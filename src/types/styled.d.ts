import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
    };
    font: {
      color: {
        primary: string;
      };
      weight: {
        small: string;
        large: string;
      };
    };
  }
}
