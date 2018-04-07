/* eslint-disable import/no-unresolved, import/extensions */
import { Component } from 'react';
import PropTypes from 'prop-types';
/* eslint-enable import/no-unresolved, import/extensions */
import getTheme from './getTheme';


class ThemeProvider extends Component {
    getChildContext() {
        return {
            uiTheme: getTheme(this.props.uiTheme),
        };
    }

    render() {
        return this.props.children;
    }
}

ThemeProvider.propTypes = {
    children: PropTypes.element.isRequired,
    // TODO: flowtype
    uiTheme: PropTypes.object, // eslint-disable-line
};
ThemeProvider.defaultProps = {
    uiTheme: {},
};
ThemeProvider.childContextTypes = {
    uiTheme: PropTypes.object.isRequired,
};

export default ThemeProvider;
