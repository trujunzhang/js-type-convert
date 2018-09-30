    import * as React from 'react';

    export type IconToggleStyle = {
        container?: any;
        icon?: any;
    } | any[];

    export interface IconToggleProps {
        color?: string;
        /**
         * The color of the underlay that will show when the touch is active.
         */
        underlayColor?: string;
        /**
         * Max opacity of ripple effect
         */
        maxOpacity?: number;
        /**
         * Size of underlayColor
         */
        percent?: number;
        /**
         * If true, the interaction will be forbidden
         */
        disabled?: boolean;
        /**
         * Size of icon (default is 24 - see spacing in palette)
         */
        size?: number;
        /**
         * Name of icon to show
         */
        name: string;
        /**
         * It'll be used instead of icon (see props name) if exists
         */
        children?: React.ReactElement<any>;
        /**
         * Call when icon was pressed
         */
        onPress?: (...args: any[])=>any;
        style?: IconToggleStyle;
    }


