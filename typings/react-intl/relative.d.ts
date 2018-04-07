declare module 'toolbar' {
    import * as React from 'react';

    export interface FormattedRelativeProps {
        style?: any;
        units?: any;
        value: any;
        format?: string;
        updateInterval?: number;
        initialNow?: any;
        children?: (...args: any[]) => any;
    }

    export default class FormattedRelative extends React.Component<FormattedRelativeProps, any> {
        render(): JSX.Element;

    }

}

