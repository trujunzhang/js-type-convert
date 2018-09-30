    import * as React from 'react';

    export type CheckboxValue = string | number;

    export interface CheckboxStyle {
        container?: any;
        icon?: any;
        label?: any;
    }

    export interface CheckboxProps {
        /**
         * Text will be shown after Icon
         */
        label: string;
        /**
         * Value will be returned when onCheck is fired
         */
        value: CheckboxValue;
        /**
         * True if it's check
         */
        checked?: boolean;
        /**
         * Is checkbox active
         */
        disabled?: boolean;
        /**
         * Will be shown when checked is false
         */
        uncheckedIcon?: string;
        /**
         * Will be shown when checked is true
         */
        checkedIcon?: string;
        /**
         * Event that is called when state is changed
         */
        onCheck: (...args: any[])=>any;
        style?: CheckboxStyle;
        /**
         * Size of icon
         */
        size?: number;
    }
