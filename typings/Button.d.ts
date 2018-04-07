declare module 'toolbar' {
    import * as React from 'react';

    export type ButtonIcon = string | React.ReactElement<any>;

    export interface ButtonStyle {
        container?: any;
        text?: any;
    }

    export interface ButtonProps {
        /**
         * If true button will be disabled
         */
        disabled?: boolean;
        /**
         * If true button will be raised
         */
        raised?: boolean;
        /**
         * Called when button is pressed. Text is passed as param
         */
        onPress?: (...args: any[])=>any;
        /**
         * Called when button is long pressed. Text is passed as param
         */
        onLongPress?: (...args: any[])=>any;
        /**
         * Text will be shown on button
         */
        text: string;
        /**
         * Button text will be in uppercase letters
         */
        upperCase?: boolean;
        /**
         * If specified it'll be shown before text
         */
        icon?: ButtonIcon;
        /**
         * You can override any style for this button
         */
        style?: ButtonStyle;
        primary?: boolean;
        accent?: boolean;
    }

    export default class Button extends React.PureComponent<ButtonProps, any> {
        render(): JSX.Element;

    }

}

