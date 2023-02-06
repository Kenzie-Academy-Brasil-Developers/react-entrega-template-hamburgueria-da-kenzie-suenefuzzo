import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

    :root{
        --color-primary: #27ae60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;

        --grey-100: #333333;
        --grey-50: #828282;
        --grey-20: #E0E0E0;
        --grey-0: #F5F5F5;

        --color-negative: #e60000;
        --color-warning: #FFCD07;
        --color-sucess: #168821;
        --color-information: #155BCB;
        --color-white: #ffffff;

        --font-size-1: 1.625rem; /*26px*/
        --font-size-2: 1.375rem; /*22px*/
        --font-size-3: 1.125rem; /*18px*/
        --font-size-4: 1rem; /*16px*/
        --font-size-5: 0.875rem; /*14px*/
        --font-size-6: 0.75rem; /*12px*/
       
        --font-weight-1: 700;
        --font-weight-2: 600;
        --font-weight-3: 500;
        --font-weight-4: 400;
        
        --radius-default: 8px;
        --radius-secondary: 5px;
    }

    #root{
        width: 100vw;
        height: 100vh;
    }

    body{
        font-family: 'Inter', sans-serif;
    }

    button{
        cursor: pointer;
    }
`;
