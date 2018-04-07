declare module 'toolbar' {
    import * as React from 'react';

    export type BadgeIcon = string | {
        name?: string;
        color?: string;
        size?: number;
    };

    export interface BadgeStyle {
        container?: any;
    }

    export interface BadgeProps {
        /**
         * The badge will be added relativelty to this node
         */
        children?: React.ReactNode;
        /**
         * This is the content rendered within the badge
         */
        text?: string;
        /**
         * When the icon is set, the content will be <Icon name={icon} /> element
         */
        icon?: BadgeIcon;
        /**
         * Just sugar for style={{ container: { width: size, height: size, borderRadius: size / 2 }}}
         */
        size?: number;
        /**
         * You can specify stroke for badge. Note that if you use stroke it swaps container and
         * strokeContainer. So if you override styles of container you probably need to override
         * strokeContainer instead the container. Because if you use stroke then the strokeContainer
         * will be wrapper of whole badge component.
         */
        stroke?: number;
        style?: BadgeStyle;
    }

    export default class Badge extends React.PureComponent<BadgeProps, any> {
        render(): JSX.Element;

    }

}

