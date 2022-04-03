import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        palette: {
            navbar: {
                height: string;
            },
            text: {
                primary: string;
                secondary: string;
            }
            bg: string;
            white: string;
            black: string;
            border: string;
        }
    }
}