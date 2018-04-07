declare module 'toolbar' {
    import * as React from 'react';

    export interface AvatarStyle {
        container?: any;
        content?: any;
    }

    export interface AvatarProps {
        showAsRound?: boolean;
        facebookId?: string;
        /**
         * {uri:${src}}
         */
        src?: string;
        /**
         * If passed in, this component will render image.
         */
        image?: string;
        /**
         * If passed in, this component will render icon element inside avatar.
         */
        icon?: string;
        /**
         * If passed in, this component will render an icon with this color.
         */
        iconColor?: string;
        /**
         * If passed in, this component will render an icon with this size.
         */
        iconSize?: number;
        /**
         * If passed in, this component will render text element inside avatar.
         */
        text?: string;
        /**
         * It's just sugar for: style: { width: size, height: size, borderRadius: size / 2 }
         */
        size?: number;
        /**
         * Inline style of avatar
         */
        style?: AvatarStyle;
    }

    export default class Avatar extends React.PureComponent<AvatarProps, any> {
        render(): JSX.Element;

    }

}

