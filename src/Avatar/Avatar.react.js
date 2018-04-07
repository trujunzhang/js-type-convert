/* eslint-disable import/no-unresolved, import/extensions */
import React, {
    PureComponent
} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import {
    ViewPropTypes
} from '../utils';
/* eslint-enable import/no-unresolved, import/extensions */
import Icon from '../Icon';

function getStyles(props, context) {
    const {
        avatar,
    } = context.uiTheme;
    const {
        size,
    } = props;

    const local = {};

    if (size) {
        local.container = {
            height: size,
            width: size,
            borderRadius: size / 2,
        };
    }

    return {
        container: [
            avatar.container,
            local.container,
            props.style.container,
        ],
        content: [
            avatar.content,
            local.content,
            props.style.content,
        ],
    };
}

class Avatar extends PureComponent {
    render() {
        const {
            image,
            src,
            size,
            icon,
            iconSize,
            iconColor,
            text,
            showAsRound,
        } = this.props;

        let content = null;
        const {
            avatar,
            spacing,
        } = this.context.uiTheme;
        const styles = getStyles(this.props, this.context);

        if (icon) {
            const color = iconColor || StyleSheet.flatten(avatar.content).color;
            const size = iconSize || spacing.iconSize;
            content = (<Icon name={icon} color={color} size={size}/>);
        } else if (text) {
            content = <Text style={styles.content}>{text}</Text>;
        } else if (image) {
            content = image;
        } else if (src) {
            const extendStyle = showAsRound ? {
                borderRadius: size / 2,
            } : {}
            content = (
                <Image
                    style={[
                        {
                            width: size,
                            height: size,
                        },
                        extendStyle,
                    ]}
                    width={size}
                    height={size}
                    source={{uri: src}}
                />
            )
        }

        return (
            <View style={{flexGrow: 1}}>
                <View style={styles.container}>
                    {content}
                </View>
            </View>
        );
    }
}

Avatar.propTypes = {
    showAsRound: PropTypes.bool,
    facebookId: PropTypes.string,
    /**
     * {uri:${src}}
     */
    src: PropTypes.string,
    /**
     * If passed in, this component will render image.
     */
    image: PropTypes.string,
    /**
     * If passed in, this component will render icon element inside avatar.
     */
    icon: PropTypes.string,
    /**
     * If passed in, this component will render an icon with this color.
     */
    iconColor: PropTypes.string,
    /**
     * If passed in, this component will render an icon with this size.
     */
    iconSize: PropTypes.number,
    /**
     * If passed in, this component will render text element inside avatar.
     */
    text: PropTypes.string,
    /**
     * It's just sugar for: style: { width: size, height: size, borderRadius: size / 2 }
     */
    size: PropTypes.number,
    /**
     * Inline style of avatar
     */
    style: PropTypes.shape({
        container: ViewPropTypes.style,
        content: Text.propTypes.style,
    }),
};
Avatar.defaultProps = {
    showAsRound: false,
    image: null,
    src: null,
    icon: null,
    iconColor: null,
    iconSize: null,
    text: null,
    size: 48,
    style: {},
};
Avatar.contextTypes = {
    uiTheme: PropTypes.object.isRequired,
};

export default Avatar;
