declare module 'toolbar' {
    import * as React from 'react';

    export interface ThemeProviderProps {
        children: React.ReactElement<any>;
        uiTheme?: Object;
    }

    export default class ThemeProvider extends React.Component<ThemeProviderProps, any> {
        render(): JSX.Element;

    }

}

