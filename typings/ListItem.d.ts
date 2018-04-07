declare module 'toolbar' {
    import * as React from 'react';

    export type ListItemNumberOfLines = 1 | 2 | 3 | "dynamic";

    export interface ListItemStyle {
        container?: any;
        contentViewContainer?: any;
        leftElementContainer?: any;
        centerElementContainer?: any;
        textViewContainer?: any;
        primaryText?: any;
        firstLine?: any;
        primaryTextContainer?: any;
        secondaryText?: any;
        tertiaryText?: any;
        rightElementContainer?: any;
        leftElement?: any;
        rightElement?: any;
    }

    export type ListItemLeftElement = React.ReactElement<any> | string;

    export type ListItemCenterElement = React.ReactElement<any> | string | {
        primaryText: string;
        secondaryText?: string;
        tertiaryText?: string;
    };

    export type ListItemRightElement = React.ReactElement<any> | string | {
        menu?: {
            labels: any[];
        };
    };

    export interface ListItemProps {
        dense?: boolean;
        divider?: boolean;
        onPress?: (...args: any[])=>any;
        onPressValue?: any;
        onLongPress?: (...args: any[])=>any;
        numberOfLines?: ListItemNumberOfLines;
        style?: ListItemStyle;
        leftElement?: ListItemLeftElement;
        onLeftElementPress?: (...args: any[])=>any;
        centerElement?: ListItemCenterElement;
        rightElement?: ListItemRightElement;
        onRightElementPress?: (...args: any[])=>any;
        /**
         * Children passed into the `ListItem`.
         */
        children?: React.ReactNode;
    }

    export default class ListItem extends React.PureComponent<ListItemProps, any> {
        render(): JSX.Element;

    }

}

